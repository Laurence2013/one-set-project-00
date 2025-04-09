import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss'],
  imports: [CommonModule]
})
export class CourseImageComponent  implements OnInit, AfterViewInit, AfterContentInit {

  public test01?:string;

  @Input('src') public imageUrl:string = '';
  @Input('test99') public test00?:string;

  public constructor(){}
  public ngOnInit(){
    this.isTesting();
  }
  public ngAfterViewInit(){}
  public ngAfterContentInit(){}
  public isTesting(): string | undefined {
    return this.test00 !== undefined ? this.test01 = this.test00 : this.test01;
  }
}
