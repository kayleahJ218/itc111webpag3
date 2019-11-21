import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInIt {
  imageURL="https://i.pinimg.com/originals/4c/e6/ae/4ce6ae70bffae06463e0a3e7734a73d5.jpg"

  name = 'Angular';
  getUrl() {
    return "url('https://i2.wp.com/pursuitofdaydreams.com/wp-content/uploads/2015/10/Shopping-bags-Fast-fashion.jpg?resize=300%2C300')";
  }
  
}
