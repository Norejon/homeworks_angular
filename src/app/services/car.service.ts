import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interfacces";
import {IPlagination} from "../interfacces/plagination.interface";
import {urls} from "../constants/urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getAll(page=1):Observable<IPlagination<ICar>>{
    return this.httpClient.get<IPlagination<ICar>>(urls.cars.full,{params:{page}})
  }
  getById(id:number):Observable<ICar>{
    return this.httpClient.get<ICar>(urls.cars.byId(id))
  }

}
