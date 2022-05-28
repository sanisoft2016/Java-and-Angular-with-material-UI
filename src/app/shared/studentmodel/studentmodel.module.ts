import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentmodelModule {
  admissionNo:string='';
  firstName:string='';
  lastName:string='';
  startClass:string='';
  currentClassId:number=0;
  dateOfBirth:string='';
  dateOfAdmsn: string='';
  religion:number=0;
  gender:number=0;
  bloodGroup:string='';
 }
