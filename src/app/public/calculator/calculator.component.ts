import { Component, OnInit } from '@angular/core';
import { FuelLogService } from '../../services/fuel-log.service';
import { FuelLog } from 'src/app/model/fuelLog';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  avgCounter: number;
  fuelLogArray: FuelLog [];
  avgConsumption;
  distance;
  price;
  result;

  constructor(private fuelLogService: FuelLogService) { }

  ngOnInit() {
    this.getFuelLogs();
  }

  getFuelLogs() {
    this.fuelLogService.getFuelLogs().subscribe(data => {
      this.fuelLogArray = Object.values(data);
      this.getAvgConsumption();
    });
  }

  getAvgConsumption() {
    this.avgCounter = 0;
    for (const data of this.fuelLogArray) {
      this.avgCounter += +data.avgConsumption;
    }
    this.avgConsumption = (this.avgCounter / (this.fuelLogArray.length - 1)).toFixed(2);
  }

  tripResult() {
    this.result = ((this.distance * this.avgConsumption) / 100 * this.price).toFixed(0);
  }
}
