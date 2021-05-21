import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-fbgit';

  constructor(private auth:AuthService) {
    auth.getUser().subscribe(
      (user) => {
        console.log(user);
        
      },
      err => {
        console.log(err);
        
      }
    )
  }
}
