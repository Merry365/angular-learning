import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-child2-photo',
  templateUrl: './myc03-child2-photo.component.html',
  styleUrls: ['./myc03-child2-photo.component.css']
})
export class Myc03Child2PhotoComponent implements OnInit {
  @Input()
  public child2Name:any;
  constructor() { }

  ngOnInit(): void {
  }

}
