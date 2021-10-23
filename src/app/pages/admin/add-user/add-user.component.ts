import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaInfoService } from 'src/app/service/meta-info.service';
import { UserServiceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

 
  constructor(private userService:UserServiceService,private metaInfo : MetaInfoService,private snack:MatSnackBar) {
  }

 
 public user = {
   username:'',
   password:'',
   firstName:'',
   lastName:'',
   contact:'',
 }
 confirmPassword : String = '';
 public hide:any;
 public hide1:any;
 public states:any;
 ngOnInit(): void {
   this.hide=true;
   this.hide1=true;
 }

 // cPass = "password"; 
 // btnShow = "Show Password";
 // passShow(){
 //   this.cPass = this.cPass=="password"? "text" : "password";
 //   this.btnShow = this.btnShow=="Show Password"? "Hide Password" : "Show Password";
 // }
 formSubmit()
 {
   this.user.contact = this.user.username;
   console.log(this.user);
   if(this.user.username==''||this.user.username==null){
     //alert('User is required!!');
     this.snack.open('Username is required!!','',{
       duration:2000,
       verticalPosition:'top',
       horizontalPosition:'right',
     });
     return;
   }

   //validate

   //addUser:uerService
   if(this.user.password==this.confirmPassword)
   {
   this.userService.save(this.user).subscribe(
     (data:any)=>{
       //success
       console.log(data);
       //alert('success'); 
       Swal.fire('Successfully done!!','success');
     },
     (error)=>{
       //error
       console.log(error);
       //alert('something went wrong');
       this.snack.open('something went wrong!!','',{
         duration:300,
       })
     }
   );
   }
   else{
     this.snack.open('Password must be same!!','',{
       duration:300,
     })
   }

 }



}
