import { Component, OnInit, Input, Output, EventEmitter, ContentChild, QueryList, AfterContentInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";

import { CourseImageComponent } from '../course-image/course-image.component';  
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss', '../../assets/styles.scss'],
	standalone: true,
  imports: [IonCardContent, IonCard, IonCardTitle, IonCardHeader, CommonModule],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() public course!: Course;
  @Input() public cardIndex!: number;
  @Output('courseSelected') public courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent) public images?: QueryList<CourseImageComponent>;

	public constructor(){}
  public ngOnInit(){}
  public ngAfterViewInit(){}
  public ngAfterContentInit(){
    console.log(this.images);
  }
  public onCourseViewed(){
    console.log('Course Card Component button clicked!');

    this.courseEmitter.emit(this.course);
  } 
  public cardClass(){
    return {
      'beginner': this.course.category === 'BEGINNER',
      'course-card': true,
    }
  }
  public cardStyle(){
    return {'text-decoration': 'underline'};
  }
  public isImageVisible(){
    return this.course && this.course.iconUrl;
  }
}
