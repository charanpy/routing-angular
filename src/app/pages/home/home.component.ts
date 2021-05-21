import { GithubService } from './../../services/github.service';
import { Component, OnInit, ChangeDetectorRef,DoCheck,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck,OnChanges {

  user=null;
  userName: string='';
  Error=null;

  constructor(private github:GithubService, private ref:ChangeDetectorRef) { }
ngOnChanges(){
    console.log('hey')
  }

  ngOnInit(): void {
  }

  handleFindUser(){
    this.github.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.Error=null;
        // this.ref.detectChanges();
      },
      (err) => {
        this.user=null;
        this.Error="User not found"
        this.ref.detectChanges();
      }
    )
  }

  
  ngDoCheck(){
    console.log("do check at home triggered")
    console.log(this.user,this.Error,this.userName)
  }

  update(){
    this.user.repo_url=[{
      html_url: 'https://google.com'
    }]
  }

}
