import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/service/login.service';
import { MetaInfoService } from 'src/app/service/meta-info.service';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user:any;
  constructor(private login:LoginService,private addressService:UserServiceService,private route:Router) { }

  //routerLink="/user-dashboard/edituser" 
  address:any;
  subButton:any;
  ngOnInit(): void {
   
    this.user=this.login.getUser();
   this.addressService.getAddressByUser(this.user.userId).subscribe((data:any)=>{
    // console.log(data); 
    this.address= data;
    this.subButton="Update";
    });    
  }


  checkAddress(){
    if(this.address==null){
      this.addressService.checkAddress("save",this.user);
      this.route.navigate(['/user-dashboard/edituser']);
    }
    else
    {
      this.addressService.checkAddress("update",this.user);
      this.route.navigate(['/user-dashboard/edituser']);
    }
  }}
