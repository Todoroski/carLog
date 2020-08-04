import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import { FuelLogService } from 'src/app/services/fuel-log.service';
import { FuelLog } from '../../model/fuelLog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-log-popup',
  templateUrl: './fuel-log-popup.component.html',
  styleUrls: ['./fuel-log-popup.component.scss']
})
export class FuelLogPopupComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef, private firebase: AngularFireDatabase, private toastr: ToastrService,
              private fuelLogService: FuelLogService, private router: Router) { }

  fuelLogList;
  fuelLogData: FuelLog;
  submitted: boolean;
  fuelLogArray = [];
  id: number;
  avgConsumption: number;
  fuelData;

  form = new FormGroup({
    $key: new FormControl(null),
    odoCounter: new FormControl('', Validators.required),
    fuel: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    avgConsumption: new FormControl('')
  });

  ngOnInit() {
    this.getFuelLogs().subscribe(
      async list => {
        this.fuelLogArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        }).sort((a, b) => b.odoCounter - a.odoCounter);
        await this.populatePopup(this.fuelLogService.fuelLogId);
      }
    );
  }

  insertFuelLog(fuelLog) {
    const arrayLength = this.fuelLogArray.length;
    if (arrayLength !== 0) {
      const passedKm = fuelLog.odoCounter - this.fuelLogArray[0].odoCounter;
      const fuelConsumed = fuelLog.fuel;
      this.avgConsumption = (fuelConsumed / passedKm) * 100;
    } else {
      this.avgConsumption = 0;
    }
    this.fuelData = {
      odoCounter: fuelLog.odoCounter,
      fuel: fuelLog.fuel,
      cost: fuelLog.cost,
      price: fuelLog.price,
      date: fuelLog.date.slice(0, 10),
      avgConsumption: this.avgConsumption.toFixed(2)
    };
    this.fuelLogService.addFuelLog(this.fuelData).subscribe((data: FuelLog) => {
      this.showToastr('Fuel log successfully saved');
      this.closeModal();
    }, error => {
      this.toastr.error('Fuel log not saved');
      this.closeModal();
    });
  }

  getFuelLogs() {
    this.fuelLogList = this.firebase.list('fuelLogs');
    return this.fuelLogList.snapshotChanges();
  }

  populatePopup(fuelLog) {
    if (this.fuelLogService.fuelLogId) {
      this.form.setValue(fuelLog);
    }
  }

  updateFuelLog(fuelLog) {
    const passedKm = fuelLog.odoCounter - this.fuelLogArray[1].odoCounter;
    const fuelConsumed = fuelLog.fuel;
    this.avgConsumption = (fuelConsumed / passedKm) * 100;
    this.fuelData = {
      odoCounter: fuelLog.odoCounter,
      fuel: fuelLog.fuel,
      cost: fuelLog.cost,
      price: fuelLog.price,
      date: fuelLog.date,
      avgConsumption: this.avgConsumption.toFixed(2)
    };
    this.fuelLogService.updateFuelLog(this.fuelData, fuelLog.$key).subscribe((data: FuelLog) => {
      this.showToastr('Fuel log successfully updated');
      this.closeModal();
    }, error => {
      this.toastr.error('Fuel log not updated');

    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.get('$key').value == null) {
        this.insertFuelLog(this.form.value);
      } else {
        this.updateFuelLog(this.form.value);
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
