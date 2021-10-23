import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BaseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MetaInfoService {

  constructor(private http : HttpClient) { }

  public getState(){
  
    return this.http.get('http://localhost:8787/CropTracking/state/getState');

  }
  public getDistrict(id:Number){
  
    return this.http.get('http://localhost:8787/CropTracking/district/findByState?stateId'+"="+id);

  }
  public getTehsil(id:Number){
  
    return this.http.get('http://localhost:8787/CropTracking/tehsil/findByDistrict?districtId'+"="+id);

  }
  public getVillage(id:Number){
  
    return this.http.get('http://localhost:8787/CropTracking/village/findByTehsil?tehsilId'+"="+id);

  }
   
  // public getState(){
  //   return this.http.get(`${BaseUrl}CropTracking/current-user`);
  // }
}
