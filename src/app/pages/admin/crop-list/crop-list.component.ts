import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {

  cropDetail:any
  columnDefs = [

   
 
    { field: 'fieldName',Headers: 'FieldName', sortable: true, filter: true},
    { field: 'cropName',Headers: 'Crop', sortable: true, filter: true },
    { field: 'cropDate',Headers: 'CropDate', sortable: true, filter: true },
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
    
];

 constructor(private http: HttpClient,private service: UserServiceService,private router: Router) {
 }

 rowData:any[] | undefined;

 ngOnInit(): void {
  //  this.service.getCropDetail().subscribe((data:any)=>{
  //    this.rowData = data;
  //  });
   
    

 }

}
