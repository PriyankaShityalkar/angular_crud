import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private readonly service: AuthService){}
  selectedFile:File | undefined

  form:FormGroup = new FormGroup({
    "username": new FormControl(""),
    "password": new FormControl(""),
    "image": new FormControl("")
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0]; // Get the first file selected
    console.log(event)
  }

  formsubmit()
  {
    const formData = this.createFormData(this.form.value)
    this.service.register(formData).subscribe(res=>{
      console.log(res);
    },
    error =>{
    console.log(error);
  })
  }

  //Create FormData object
  createFormData(formValue:any): FormData{
    const formData = new FormData();

    //Append form fields to FormData
    formData.append('username',formValue.username);
    formData.append('password',formValue.password);
    if(this.selectedFile){
      formData.append('image', this.selectedFile, this.selectedFile.name); // Make sure to apper
    }
    return formData
  }
}
