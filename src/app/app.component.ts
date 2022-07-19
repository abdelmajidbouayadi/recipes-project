import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = "recipe"
  title = 'shopping-project';
  onNavigate(event:string){
    this.page  = event
  }
}
