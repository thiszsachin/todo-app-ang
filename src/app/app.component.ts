import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  constructor(){
    setTimeout(() => {
      this.title = "Sachin Srivastava"
    }, 2000);
  }
}
