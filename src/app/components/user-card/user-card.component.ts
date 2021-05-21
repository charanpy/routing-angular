import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit,OnChanges {

  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log('card triggered');
    
  }

}
