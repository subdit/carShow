import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree_2.png',
      userName: 'forest',
      content: 'I saw such a beautiful tree today'
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/mountainbike.png',
      userName: 'Mountain biking lovers',
      content: 'I ride a bike today in cthe forest'
    },
    {
      title: 'Snowy Moutian',
      imageUrl: 'assets/mountain.png',
      userName: 'Snowy Mountain',
      content: 'No moutain high enough'
    },
    {
      title: 'Moutian bike again',
      imageUrl: 'assets/biking.png',
      userName: 'Snowy Mountain',
      content: 'No moutain high enough'
    }
  ]
}
