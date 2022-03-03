import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc-parent-blog',
  templateUrl: './myc-parent-blog.component.html',
  styleUrls: ['./myc-parent-blog.component.css']
})
export class MycParentBlogComponent implements OnInit {
  public userName:any='文艺小青年';

  constructor() { }

  ngOnInit(): void {
  }
  //自定义函数
  doCry(e:any){
    console.log(e);
    this.userName = e;
   
    
  }

}
