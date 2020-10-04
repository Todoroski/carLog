import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import { CostLogService } from 'src/app/services/cost-log.service';
import { FuelLog } from 'src/app/model/fuelLog';

@Component({
  selector: 'app-cost-log-popup',
  templateUrl: './cost-log-popup.component.html',
  styleUrls: ['./cost-log-popup.component.scss']
})
export class CostLogPopupComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef, private firebase: AngularFireDatabase, private toastr: ToastrService,
              private costLogService: CostLogService) { }

  costLogList: AngularFireList<any>;
  costLogArray: FuelLog [];
  id: number;

  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    totalCost: new FormControl('', Validators.required),
    note: new FormControl(''),
    odoCounter: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.getCostLogs().subscribe(
      async list => {
        this.costLogArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        }).sort((a, b) => b.odoCounter - a.odoCounter);
        await this.populatePopup(this.costLogService.costLogId);
        this.id = this.costLogService.costLogId;
      }
    );
  }

  insertCostLog(costLog) {
    this.costLogList.push({
      title: costLog.title,
      totalCost: costLog.totalCost,
      note: costLog.note,
      odoCounter: costLog.odoCounter,
      date: new Date().toISOString().slice(0, 10),
    });
  }

  getCostLogs() {
    this.costLogList = this.firebase.list('costLogs');
    return this.costLogList.snapshotChanges();
  }

  populatePopup(costLog) {
    if (this.costLogService.costLogId) {
      this.form.setValue(costLog);
    }
  }

  updateCostLog(costLog) {
    this.costLogList.update(costLog.$key, {
      title: costLog.title,
      totalCost: costLog.totalCost,
      note: costLog.note,
      odoCounter: costLog.odoCounter,
      date: costLog.date,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.get('$key').value == null) {
        this.insertCostLog(this.form.value);
        this.closeModal();
        this.showToastr('Cost log successfully saved');
      } else {
        this.updateCostLog(this.form.value);
        this.closeModal();
        this.showToastr('Cost log successfully updated');
      }
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  showToastr(message) {
    this.toastr.success(message);
  }
}
