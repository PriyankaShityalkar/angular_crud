import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit
{
  constructor(private readonly service: AuthService, private router: Router, private readonly route: ActivatedRoute){}

  userId: string | null | undefined

  u = {
    id:"",
    username:"",
    password:"",
    image:""
  }

  // Complexity is 3 Everything is cool!
  ngOnInit(): void {
    this.route.paramMap.forEach(r=>{
      this.userId = r.get("id")
    })

    this.service.getUserById(this.userId).subscribe(res=>{
      this.u = res
      console.log(res);

      this.form.get("id")?.setValue(this.u.id)
      this.form.get("username")?.setValue(this.u.username)
      this.form.get("password")?.setValue(this.u.password)
    })
  }

  selectedFile: File | undefined

  form:FormGroup = new FormGroup({
    id:new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    image: new FormControl('')
  })

  onFileSelect(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    const formData = this.updateFormData(this.form.value)
    this.service.updateUser(formData).subscribe(res=>{
      this.router.navigate(["/home"])
    }, err=>{
      alert(err)
    })
  }

  updateFormData(formValue: any): FormData{
    const formData = new FormData();
    formData.append('id', formValue.id)
    formData.append('username', formValue.username)
    formData.append('password', formValue.password)
    if(this.selectedFile){
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    return formData
  }

}
