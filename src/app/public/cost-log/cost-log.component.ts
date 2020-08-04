import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastrService } from 'ngx-toastr';
import { CostLogService } from 'src/app/services/cost-log.service';
import { CostLog } from '../../model/costLog';
import { CostLogPopupComponent } from '../../shared/cost-log-popup/cost-log-popup.component';


@Component({
  selector: 'app-cost-log',
  templateUrl: './cost-log.component.html',
  styleUrls: ['./cost-log.component.scss']
})
export class CostLogComponent implements OnInit {

  max = 5;
  costLogList: AngularFireList<any>;
  submitted: boolean;
  costLogArray: CostLog [];
  id;
  avgConsumption: number;
  modalRef: BsModalRef;
  template: TemplateRef<any>;
  loading: boolean;
  showMore: boolean;
  searchData: string;

  constructor(private firebase: AngularFireDatabase, private toastr: ToastrService,
              private costLogService: CostLogService, private modalService: BsModalService) { }

  ngOnInit() {
    this.loading = true;
    this.getCostLogs().subscribe(
      async list => {
        this.costLogArray = list.map(item => {
          this.loading = false;
          return {
            $key: item.key,
            ...item.payload.val()
          };
        }).sort((a, b) => b.odoCounter - a.odoCounter);
        if (this.costLogArray.length > 5) {
          this.showMore = true;
        }
      }
    );
  }

  addCostLog(id) {
    this.costLogService.costLogId = id;
    this.modalRef = this.modalService.show(CostLogPopupComponent);
  }

  getCostLogs() {
    this.costLogList = this.firebase.list('costLogs');
    return this.costLogList.snapshotChanges();
  }

  deleteLog() {
    this.costLogList.remove(this.id);
    this.toastr.success('Cost log is deleted');
    this.decline();
  }

  openModal(template: TemplateRef<any>, id) {
    this.template = template;
    this.id = id;
    this.modalRef = this.modalService.show(template);
  }

  decline() {
    this.modalRef.hide();
  }

  showToastr(message) {
    this.toastr.success(message);
  }

  toggle(): void {
    this.max = this.max + 5;
  }
}
