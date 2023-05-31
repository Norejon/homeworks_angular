import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../../../interfacces";
import {CarService} from "../../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
@Input()
  cars:ICar[];
  panelOpenState=false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
