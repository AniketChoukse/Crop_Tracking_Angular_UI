import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { LoginService } from 'src/app/service/login.service';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  user:any
  address:any
   columnDefs = [

     { field: 'action',Headers: 'action', sortable: true, filter: true,cellRenderer:(params:any)=>{
      const eDiv = document.createElement('div');
      eDiv.innerHTML = '<a class="btn-simple">Push Me</a>';
      const eButton = eDiv.querySelectorAll('.btn-simple')[0];
      eButton.addEventListener('click', () => {
        this.router.navigate(["/user-dashboard/croplist"])
          // this.service.getCropDetail().subscribe((data:any)=>{
          //   console.log(data);
          // })
    });
    return eDiv;
    }},
     { field: 'firstName',Headers: 'FirstName', sortable: true, filter: true},
     { field: 'lastName',Headers: 'LastName', sortable: true, filter: true },
     { field: 'contact',Headers: 'Contact', sortable: true, filter: true },
     { field: 'stateName',Headers: 'State', sortable: true, filter: true },
     { field: 'districtName',Headers: 'District', sortable: true, filter: true },
     { field: 'tehsilName',Headers: 'Tehsil', sortable: true, filter: true },
     { field: 'villageName',Headers: 'Village', sortable: true, filter: true },
     { field: 'pincode',Headers: 'Pincode', sortable: true, filter: true },
     { field: 'role',Headers: 'Role', sortable: true, filter: true ,cellRenderer:(params:any)=>{
       return this.myfun(params.data)
     } 
    },
 ];
   
   constructor(private http: HttpClient,private service: UserServiceService,private router: Router, private login:LoginService) {
  }
 
   rowData:any[] | undefined;

myfun(data:any){
  // console.log(data.authorities[0].authority);
 
 return data.authorities[0].authority;
  
  }
  
     userData:any;
   ngOnInit(): void { 


 this.service.getUserByRoleName().subscribe((data:any)=>{
   this.user= data;
  //  console.log(data);
  
   this.service.getUserAddress().subscribe((params:any)=>{
     this.address = params;
   const returnedTarget = _.merge(this.user, this.address);
       this.rowData = returnedTarget;

   })
   
 });
 
 
  }

}
