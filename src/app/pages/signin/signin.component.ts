import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private toastr:ToastrService,private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(f:NgForm) {
    const {email,password} = f.form.value;
    this.auth.signUp(email,password)
    .then(res => {
      this.router.navigateByUrl('/')
      this.toastr.success("Sign up success")
    })
    .catch(e => {
      console.log(e.message);
      this.toastr.error("Signup failed.Please Try again")
    })
  }

}
