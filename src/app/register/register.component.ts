import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import BaseUrl from '../service/helper';
import { MetaInfoService } from '../service/meta-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
  constructor(private userService:UserServiceService,private metaInfo : MetaInfoService,
    private snack:MatSnackBar,
    private router : Router
    ) {
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
  // userName:any; 
  formSubmit()
  {
    // this.userName=this.user.firstName;
    
    //validate
if(this.user.username.length!=10)
  {
    this.snack.open('Mobile Number is required!!','',{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'right',
    });
  }else if(this.user.firstName.length>=100)
  {
    this.snack.open('Firstname must be less then 100!!','',{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'right',
    });
  }else if(this.user.lastName.length>=100)
  {
    this.snack.open('Lastname must be less then 100!!','',{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'right',
    });
  }
    //addUser:uerService
    else if(this.user.password.length>=6 && this.user.password.length<=20){
    if(this.user.password==this.confirmPassword)
    {
      this.user.contact=this.user.username;
    this.userService.save(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('success'); 
        // Swal.fire('Successfully done!!','success');
        this.snack.open('Successfully registered ','success',{
          duration:1500,
          verticalPosition:'top',
          horizontalPosition:'right',
        })
        this.router.navigate(['/login']);

      },
      
      (error)=>{
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong!!','',{
          verticalPosition:'top',
        horizontalPosition:'right',
          duration:300,
        })
      }
    );
    }
    else{
      this.snack.open('Password must be same!!','',{
        verticalPosition:'top',
        horizontalPosition:'right',
        duration:300,
      })
    }
  }
  else{
    this.snack.open('Password size is not in range','',{
      verticalPosition:'top',
        horizontalPosition:'right',
      duration:300,
    })
  }
  this.user.contact = this.user.username;
    console.log(this.user);
  
  }


}
