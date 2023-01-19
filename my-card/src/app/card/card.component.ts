import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // Get the data from app.component parent to child using @Input 
@Input() title = '';
@Input() imageUrl ='';
@Input() userName = '';
@Input() content ='';


  constructor() { }

  ngOnInit(): void {
  }

}
