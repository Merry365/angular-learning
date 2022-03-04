import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

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



  constructor(public st:StorageService) { }

  ngOnInit(): void {
  }
  //自定义函数
  doModify(){
    //点击按钮打印用户的输入
    console.log('用户输入的名字：',this.userInput);
    // 根据用户的输入改变父组件的名称
    this.cryEvent.emit(this.userInput)
    // 判断使用服务是否成功
    this.st.set("userInput",{"userInput":this.userInput})
    this.st.get("userInput")
  }
  

}
