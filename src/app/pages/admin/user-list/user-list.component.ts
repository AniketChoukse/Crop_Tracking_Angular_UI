import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  } from 'ag-grid-community';
import { UserServiceService } from 'src/app/service/user.service';
import * as _ from 'lodash'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user:any
  address:any
  gridOptions: any;
  gridApi : any;
  columnApi: any;

   columnDefs = [
     
    
     
     { field: 'firstName',Headers: 'FirstName', sortable: true, filter: true},
     { field: 'lastName',Headers: 'LastName', sortable: true, filter: true },
     { field: 'contact',Headers: 'Contact', sortable: true, filter: true },
     { field: 'details',Headers: 'Details', sortable: true, filter: true,cellRenderer:(params:any)=>{
      const eDiv = document.createElement('div');
      eDiv.innerHTML = '<button class="btn-simple">View Crop Details</button>';
      const eButton = eDiv.querySelectorAll('.btn-simple')[0];
      eButton.addEventListener('click', () => {
        this.router.navigate(["admin/usershare"])
          //  this.service.getCropDetail(params.userId).subscribe((data:any)=>{
          //   console.log(params);
            
          // })
          this.service.userIdByAdminM(params.data);
    });
    return eDiv;
    }},
    { field: 'delete',Headers: 'Delete', sortable: true, filter: true,cellRenderer:(params:any)=>{
      const eDiv = document.createElement('div');
      eDiv.innerHTML = '<button class="btn-simple">Delete User</button>';
      const eButton = eDiv.querySelectorAll('.btn-simple')[0];
      eButton.addEventListener('click', () => {
        
        this.service.deleteUserById(params.data.userId).subscribe(()=>{
          this.snack.open('User Successfully Deleted ','success',{
            duration:1500,
            verticalPosition:'top',
            horizontalPosition:'right',
          })
          this.service.getUserByRoleName().subscribe((data:any)=>{
            this.gridApi.setRowData([]);
            var newData = data;

            this.gridApi.updateRowData({add:newData});
            // this.user= data;
            // this.rowData = this.user;

        });
        });

        
      //  this.router.navigate(["admin/usershare"])
          //  this.service.getCropDetail(params.userId).subscribe((data:any)=>{
          //   console.log(params);
            
          // })
        //  this.service.userIdByAdminM(params.data);
    });
    return eDiv;
    }},
    // { field:'update',Headers: 'Update', cellRendererFramework:'CellRendererComponent'}
  //    { field: 'stateName',Headers: 'State', sortable: true, filter: true },
  //    { field: 'districtName',Headers: 'District', sortable: true, filter: true },
  //    { field: 'tehsilName',Headers: 'Tehsil', sortable: true, filter: true },
  //    { field: 'villageName',Headers: 'Village', sortable: true, filter: true },
  //    { field: 'pincode',Headers: 'Pincode', sortable: true, filter: true },
  //    { field: 'role',Headers: 'Role', sortable: true, filter: true ,cellRenderer:(params:any)=>{
  //     return this.myfun(params.data)
  //   } 
  //  },
 ];
   
   constructor(private http: HttpClient,private service: UserServiceService,private router: Router,
    private snack:MatSnackBar
    ) {

     // this.gridOptions.pagination = true;
   }
   rowData:any[] | undefined;
   onGridReady(params: any){
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
   }
   myfun(data:any){
    // console.log(data.authorities[0].authority);
   
   return data.authorities[0].authority;
    
    }
 
   ngOnInit(): void {
    this.service.getUserByRoleName().subscribe((data:any)=>{
      this.user= data;
      this.rowData = this.user;
      // this.service.getUserAddress().subscribe((params:any)=>{
      //   this.address = params;
      //   const returnedTarget = _.merge(this.user, this.address);
      //    this.rowData = returnedTarget;
      //    console.log(returnedTarget);
      // })
    });  
   }
 //    loadAddress()
 // { this.service.getAddress().subscribe((data:any)=>{
 //  // console.log(data);
 //   this.rowData = data;
 
 // });
 //   console.log(this.address);
 // }
 //   loadUser(){
 //     this.service.getUser().subscribe((data:any)=>{
 //       //console.log(data);
 //       this.user = data;
 //     });
  




}
