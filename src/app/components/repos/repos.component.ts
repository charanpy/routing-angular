import { GithubService } from './../../services/github.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
  SimpleChanges,
  SimpleChange,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges,DoCheck {
  @Input() repoUrl: string | any = '';
  repos = [];

  constructor(private github: GithubService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    const change1: SimpleChange = changes.repoUrl;
    console.log(change1.previousValue, change1.currentValue);
    console.log('triggered repos');
    // if (this.repoUrl) {
    //   this.github.getRepos(this.repoUrl).subscribe(
    //     (repo: []) => {
    //       this.repos = repo;
    //       // this.ref.detectChanges();
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
   
  }

ngDoCheck(){
    console.log("do check at repo triggered")
     this.repos=this.repoUrl
     
  }
}
