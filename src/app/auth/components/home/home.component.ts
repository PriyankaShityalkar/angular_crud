import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
constructor(private service:AuthService){}

users = [
  {
    id:"",
    username:"",
    image:""
  }
]

ngOnInit(): void {
  this.service.getUser().subscribe(res=>{
    this.users = res
  })
}

deleteUser(id:any){
  this.service.deleteUser(id).subscribe(res=>{
    if(res){
      this.ngOnInit()
    }
  },
    error=>{
      console.log(error);
    }
  )
}
}
