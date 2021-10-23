import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { MetaInfoService } from 'src/app/service/meta-info.service';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router,private metaInfo:MetaInfoService,private userAddress:UserServiceService) { 
    
    
  }

  user:any;
   currentUser:any;
   action:String='';
  ngOnInit(): void {
    this.getState();
    this.user=this.login.getUser();
    this.userAddress.getAddressByUser(this.user.userId).subscribe((data:any)=>{
      this.newAddress.id=data.id;
    });
  }

  address:any={
    state:'',
    district:'',
    tehsil:'',
    village:'',
    pincode:''
  }
  newAddress:any={
    id:'',
    stateName:'',
    districtName:'',
    tehsilName:'',
    villageName:'',
    pincode:'',
    userid_fk:''
  }
  addressFormSubmit(){
    
    this.newAddress.stateName=this.address.state.stateName;
    this.newAddress.districtName=this.address.district.districtName;
    this.newAddress.tehsilName=this.address.tehsil.name;
    this.newAddress.villageName=this.address.village.name;
    this.newAddress.pincode=this.address.pincode;
    this.newAddress.userid_fk=this.user.userId;
    
    this.currentUser=this.userAddress.currentUser;
    this.action=this.userAddress.action;
     if(this.action=="update")
     {
       
    this.userAddress.updateAddress(this.newAddress).subscribe((data:any)=>{
     // console.log(data);
      this.snack.open('Address updated successfully!!','',{
        duration:2000,
        verticalPosition:'top',
        horizontalPosition:'right',
         
      });
      this.router.navigate(['/user-dashboard/user-profile']);
      });
    }
    else{
      this.userAddress.addUserAddress(this.newAddress).subscribe((data:any)=>{
        console.log(data);
        this.snack.open('Address added successfully!!','',{
          duration:2000,
          verticalPosition:'top',
          horizontalPosition:'right',
        });
        this.router.navigate(['/user-dashboard/user-profile']);
      });
    }
    // console.log(this.newAddress);
  }
  states:any;
  districts:any;
  tehsils:any;
  villages:any;

  onChangeState(obj:any){
    console.log(obj);
    this.getDistrict(obj.id);
  }

  onChangeDistrict(obj:any){
    console.log(obj);
    this.getTehsil(obj.id);
    //this.get(obj.id);
  }

  onChangeTehsil(obj:any){
    console.log(obj);
    this.getVillage(obj.id);
    //this.get(obj.id);
  }

 

  getState()
  {
  this.metaInfo.getState().subscribe((data:any)=>{
    console.log(data);
      this.states=data;
    })
  };

  getDistrict(id:any)
  {
      this.metaInfo.getDistrict(id).subscribe((data:any)=>{
        console.log(data);
        this.districts=data;
      })
  };

  getTehsil(id:any)
  {
      this.metaInfo.getTehsil(id).subscribe((data:any)=>{
        console.log(data);
        this.tehsils=data;
      })
  };

  getVillage(id:any)
  {
      this.metaInfo.getVillage(id).subscribe((data:any)=>{
        console.log(data);
        this.villages=data;
      })
  };

  
  // getStateList() {
  //   this.serviceObj.getState().subscribe((resp : any) => { 
  //     console.log(resp);
  //     this.stateList = resp;
  //   })
  //  }

}