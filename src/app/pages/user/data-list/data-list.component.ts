import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  constructor(private login: LoginService,private service:UserServiceService,private http:HttpClient,private snack:MatSnackBar) { }
  user:any
  cropDetail:any
  gridOptions:any
  gridApi:any
  columnApi:any
   columnDefs = [
   // params.data.cropDate
   //params.data.microDate
 //  params.data.pesticideDate
    
  
     { field: 'fieldName',Headers: 'FieldName', sortable: true, filter: true},
     { field: 'cropName',Headers: 'Crop', sortable: true, filter: true },
     { field: 'cropDate',Headers: 'CropDate', sortable: true, filter: true,
    //  cellRenderer:(params:any)=>{
    //    console.log(params.data.cropDate.getFullYear().getMonth().getDate());
    //    return params.data.cropDate.getFullYear().getMonth().getDate()
    //  }
    },
     { field: 'area',Headers: 'Area', sortable: true, filter: true },
     { field: 'seedQuantity',Headers: 'SeedQuantity', sortable: true, filter: true },
     { field: 'pesticideName',Headers: 'Pesticide', sortable: true, filter: true },
     { field: 'pesticideBrand',Headers: 'PesticideBrand', sortable: true, filter: true },
     { field: 'pesticideDate',Headers: 'PesticideDate', sortable: true, filter: true },
     { field: 'pesticideQuantity',Headers: 'PesticideQuantity', sortable: true, filter: true},
     { field: 'microName',Headers: 'MicroNuterien', sortable: true, filter: true},
     { field: 'microDate',Headers: 'Date', sortable: true, filter: true},
     { field: 'microQuantity',Headers: 'MicroNuterien', sortable: true, filter: true},
     { field: 'output',Headers: 'Output', sortable: true, filter: true},
     { field: 'delete',Headers: 'Delete', sortable: true, filter: true,cellRenderer:(params:any)=>{
      const eDiv = document.createElement('div');
      eDiv.innerHTML = '<button class="btn-simple">Delete User</button>';
      const eButton = eDiv.querySelectorAll('.btn-simple')[0];
      eButton.addEventListener('click', () => {
        
      //  console.log(params.data.id);
        this.service.deleteCropById(params.data.id).subscribe(()=>{
          this.snack.open('Crop Successfully Deleted ','success',{
            duration:1500,
            verticalPosition:'top',
            horizontalPosition:'right',
          })
          this.service.getCropDetail(params.data.userid_fk).subscribe((data:any)=>{
            this.gridApi.setRowData([]);
            var newData = data;

            this.gridApi.updateRowData({add:newData});
            // this.user= data;
            // this.rowData = this.user;

        });
        });

    });
    return eDiv;
    }}
     
 ];
 
 rowData:any[] | undefined;
 
 
 
   ngOnInit(): void {
     this.user = this.login.getUser();
   //   console.log(this.user.userId);
     this.service.getCropDetail(this.user.userId).subscribe((data:any)=>{
       this.rowData = data;
       //this.onGridReady(data)
       this.gridApi.setRowData([]);
       let newData=data;

       this.gridApi.updateRowData({add:newData});
     });
     
   }
   onGridReady(params:any){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
   
   }
}
