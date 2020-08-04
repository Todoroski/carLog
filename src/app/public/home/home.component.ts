import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FuelLogPopupComponent } from 'src/app/shared/fuel-log-popup/fuel-log-popup.component';
import { FuelLog } from 'src/app/model/fuelLog';
import { FuelLogService } from 'src/app/services/fuel-log.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase, private modalService: BsModalService, private fuelLogService: FuelLogService,
              private toastr: ToastrService) { }

  fuelLogList;
  submitted: boolean;
  fuelLogArray: FuelLog[] = [];
  modalRef: BsModalRef;
  template: TemplateRef<any>;
  id;
  avgCounter = 0;
  avgConsumption;
  lastFuelConsumption: number;
  lastFuelPrice: number;
  lastFillUp: number;
  logArray = [];
  max = 5;
  loading: boolean;
  showMore: boolean;

  ngOnInit() {
    this.loading = true;
    this.getFuelLogs().subscribe(
      async list => {
        this.fuelLogArray = list.map(item => {
          this.loading = false;
          return {
            $key: item.key,
            ...item.payload.val()
          };
        }).sort((a, b) => b.odoCounter - a.odoCounter);
        this.getStatistics();
        if (this.fuelLogArray.length > 5) {
          this.showMore = true;
        }
      });
  }

  addFIllUp(id) {
    this.fuelLogService.fuelLogId = id;
    this.modalRef = this.modalService.show(FuelLogPopupComponent);
  }

  getFuelLogs() {
    this.fuelLogList = this.firebase.list('fuelLogs');
    return this.fuelLogList.snapshotChanges();
  }

  getStatistics() {
    this.avgCounter = 0;
    for (let i = 0; i < this.fuelLogArray.length; i++) {
      this.avgCounter += +this.fuelLogArray[i].avgConsumption;
    }
    this.avgConsumption = (this.avgCounter / (this.fuelLogArray.length - 1)).toFixed(2);
    this.lastFillUp = this.fuelLogArray[0].fuel;
  }

  toggle(): void {
    this.max = this.max + 5;
  }

  deleteLog() {
    this.fuelLogService.deleteFuelLog(this.id).subscribe(data => {
      this.toastr.success('Fuel log is deleted');
    });
    this.decline();
  }

  openModall(template: TemplateRef<any>, id) {
    this.template = template;
    this.id = id;
    this.modalRef = this.modalService.show(template);
  }

  decline() {
    this.modalRef.hide();
  }
}


