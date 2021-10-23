import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient){}

  currentUser:any;
  action:any;
  checkAddress(action:any,currentUser:any):any{
    this.currentUser=currentUser;
    this.action=action;
  }

  userIdByAdmin :any;
  public userIdByAdminM(user:any){
        this.userIdByAdmin = user;
  }
  //add user
  public save(user:any){
    return this.http.post('http://localhost:8787/CropTracking/user/save',user);
  }

  public getState(){
    return this.http.get('http://localhost:8787/CropTracking/state/getState');
  }

  public addUserAddress(address:any){
    return this.http.post('http://localhost:8787/CropTracking/address/save',address);
  }

  public getUserAddress(){
    return this.http.get('http://localhost:8787/CropTracking/address/getAddress');
  }

  public getAddressByUser(id:any){
    return this.http.get('http://localhost:8787/CropTracking/address/findAddressByUser?userId='+id);
  }

  public getUser(){
    return this.http.get('http://localhost:8787/CropTracking/user/getUser');
  }

  public addCropDetail(cropdetail:any){
    return this.http.post('http://localhost:8787/CropTracking/cropdetail/save',cropdetail);
  }

  public getCropDetail(id:any){
    return this.http.get('http://localhost:8787/CropTracking/cropdetail/findByUser?userId='+id);
  }

  public updateAddress(address:any){
    return this.http.put('http://localhost:8787/CropTracking/address/update',address);
  }

  public getUserByRoleName(){
    return this.http.get('http://localhost:8787/CropTracking/user/findUserByRolename');
  }

  public deleteUserById(id:any){
    return this.http.delete('http://localhost:8787/CropTracking/user/delete/'+id);
  }
  public deleteCropById(id:any){
    return this.http.delete('http://localhost:8787/CropTracking/cropdetail/delete/'+id);
  }
  

}
