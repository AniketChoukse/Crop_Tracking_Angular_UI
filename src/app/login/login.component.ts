import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  hide:any;
 
  loginData={
    username:'',
    password:'',
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) {}

  ngOnInit(): void {
    this.hide=true;
  }

  formSubmit(){
    console.log("login btn clicked");
    if(this.loginData.username.trim()==''||this.loginData.username==null)
    {
      this.snack.open('Mobile Number is required!!','',{
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim()==''||this.loginData.password==null)
    {
      this.snack.open('Password is required!!','',{
        duration:3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //Login...
        this.login.loginUser(data.token);

      
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect...ADMIN: admin-dashboard
            //redirect...USER: user-dashboard
            if(this.login.getUserRole()=='ADMIN')
            {
              //admin dashboard
             // window.location.href='/admin';
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=='USER'){
              //user dashboard
              //window.location.href='/user-dashboard';
             this.router.navigate(['user-dashboard']);
             this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();
              // location.reload();
            }
          }
        );


      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid Details !! Try again",'',{
          verticalPosition:'top',
        horizontalPosition:'right',
          duration:3000,
        });
      }
    );
  }
}
