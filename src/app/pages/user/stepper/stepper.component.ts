import {Component,OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { UserServiceService } from 'src/app/service/user.service';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Stepper responsive
 */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;
  maxDate:Date;
  minDate: Date;
  constructor(private router :  Router,private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private cropService:UserServiceService,private login:LoginService,private snack:MatSnackBar) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
      const currentYear=new Date().getFullYear();
      const currentDate=new Date().getDate();
      const currentMonth=new Date().getMonth();
      this.minDate = new Date(currentYear - 20, 0, 1);
      //this.maxDate=new Date(currentYear,currentMonth,currentDate);
      this.maxDate=new Date(currentYear,11,31);
  }
  user:any;
 

  ngOnInit(): void{
    this.user=this.login.getUser();
   
  }

  public cropDetail={
    fieldName:'',
    cropName:'',
    cropDate:'',
    area:'',
    seedQuantity:'',
    pesticideName:'',
    pesticideBrand:'',
    pesticideDate:'',
    pesticideQuantity:'',
    microName:'',
    microBrand:'',
    microDate:'',
    microQuantity:'',
    output:'',
    userid_fk:'',
  }
  cName:any;

 
 
  formSubmit()
  {
    // this.allLetter(this.cropDetail.cropName);
    // console.log(this.cropDetail.userid_fk);
    // if(this.cropDetail.cropName == )
    // this.cName=this.cropDetail.cropName.length;

  
    this.cropDetail.userid_fk=this.user.userId;
    this.cropService.addCropDetail(this.cropDetail).subscribe(
      (data:any)=>{
        console.log(data);
        this.snack.open('Crop Detail added successfully!!','',{
          duration:2000,
          verticalPosition:'top',
          horizontalPosition:'right',
        });
      }
    )
    this.router.navigate(['/user-dashboard/datalist']);
  
   }
   
  }

  // allLetter(word:any){
   
  //    var letters = /^[A-Za-z]+$/;
  //    if(word.value.match(letters))
  //      {
  //       return true;
  //      }
  //    else
  //      {
  //      alert("message");
  //      return false;
  //      }
  //   }
  

 

