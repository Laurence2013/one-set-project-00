import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss', '../../assets/styles.scss'],
	standalone: true,
  imports: [IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, CommonModule],
})
export class CourseCardComponent  implements OnInit {

  @Input() public course!: Course;
  @Input() public cardIndex!: number;
  @Output('courseSelected') public courseEmitter = new EventEmitter<Course>();

	public constructor(){}
  public ngOnInit(){}
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
