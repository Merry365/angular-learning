import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myc02-child1-modify',
  templateUrl: './myc02-child1-modify.component.html',
  styleUrls: ['./myc02-child1-modify.component.css']
})
export class Myc02Child1ModifyComponent implements OnInit {
  //普通变量
  public userInput:any;
 //事件发射器
 @Output()
 public cryEvent = new EventEmitter()



  constructor() { }

  ngOnInit(): void {
  }
  //自定义函数
  doModify(){
    console.log('用户输入的名字：',this.userInput);
    this.cryEvent.emit(this.userInput)
  }
  

}
