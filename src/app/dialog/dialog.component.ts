import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
studentForm !: FormGroup;
  genderList = ["Male", "Female"];
  constructor(private formBuilder:FormBuilder, private api: ApiService) { }

  ngOnInit(): void { 
    this.studentForm = this.formBuilder.group({
      admissionNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      startClass: ['', Validators.required],
      currentClassId: ['', Validators.required],
      
      dateOfBirth: ['', Validators.required],
      religion: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required]
    })
  }
//this.registerForm.controls["surName"].value
  addStudent(){
    let student = this.studentForm.value;
    let genda = 0;
    if(student.gender === "Female"){
      genda = 1;
    }
    let religion = Number(this.studentForm.controls["religion"].value);
    this.studentForm.controls['gender'].setValue(genda);
    this.studentForm.controls['religion'].setValue(religion);
    
    this.api.postStudent(this.studentForm.value).subscribe({
      next:(res)=>{
        alert("Successfully Added !");
      },
      error: (err)=>{
        alert("Error while adding !");
      } 
    })
  }

}
