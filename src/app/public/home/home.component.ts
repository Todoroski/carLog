import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }

  carList: AngularFireList<any>;
  submitted: boolean;
  carsArray = [];

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit() {
    this.getCars().subscribe(
      async list => {
        this.carsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        await console.log(this.carsArray)
      }
    );
  }

  getCars() {
    this.carList = this.firebase.list('cars');
    return this.carList.snapshotChanges();
  }

  insertCars(cars) {
    this.carList.push({
      fullName: cars.fullName,
      email: cars.email
    });
  }

  populateCars(cars) {
    this.form.setValue(cars);
  }

  updateCars(cars) {
    this.carList.update(cars.$key, {
      fullName: cars.fullName,
      email: cars.email
    });
  }

  onSubmit() {
    debugger
    this.submitted = true;
    if (this.form.get('$key').value == null) {

      this.insertCars(this.form.value);
    } else {
      this.updateCars(this.form.value);
    }
    this.submitted = false;
    this.form.reset();
  }

  getData(){
    console.log(this.carsArray)
  }
}


