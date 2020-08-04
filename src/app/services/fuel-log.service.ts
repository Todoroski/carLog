import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuelLogService {

  fuelLogId: any;
  url = 'https://fuellog-f667b.firebaseio.com/fuelLogs.json';

  constructor(private http: HttpClient) { }

  getFuelLogs() {
    return this.http.get(this.url);
  }

  addFuelLog(fuelLog) {
    return this.http.post(this.url, fuelLog);
  }

  updateFuelLog(fuelLog, id) {
    return this.http.patch( `https://fuellog-f667b.firebaseio.com/fuelLogs/${id}.json`, fuelLog);
  }

  deleteFuelLog(id) {
    return this.http.delete(`https://fuellog-f667b.firebaseio.com/fuelLogs/${id}.json`);
  }
}
