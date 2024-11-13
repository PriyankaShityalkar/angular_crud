import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
constructor(private service:AuthService, private storage:StorageService, private router:Router){}


form:FormGroup = new FormGroup({
  "username" : new FormControl(""),
  "password" : new FormControl("")
});

formsubmit()
  {
    // console.log(this.form.value)
    this.service.login(this.form.value).subscribe(res=> {
     this.storage.saveUser(res)
     let user  = this.storage.getUser()
     let token = this.storage.getToken()
    //  this.storage.saveToken(token)
     let role = this.storage.getRole()

     console.log(user);
     console.log(role);


      if(user !== null && role == "STUDENT")
      {
        // this.router.navigate(["/admin"])
      }
      else if(user !== null && role == "NORMAL-USER")
      {
        console.log(user);
     console.log(role);
          // this.router.navigate(["/user"])
      }
    })
  }
}
