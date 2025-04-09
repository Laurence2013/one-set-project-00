import { Component, ViewChild, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { map } from 'rxjs';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';

import { CourseCardComponent } from '../course-card/course-card.component';
import { COURSES } from 'src/db-data';

import { Course } from '../models/course';
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCardSubtitle, CourseCardComponent, CommonModule, CourseImageComponent],
})
export class HomePage implements AfterViewInit {
  
  public test:string = 'Foo testing';
  public courses = COURSES;
  public startDate = new Date();
 
  //@ViewChild(CourseCardComponent) public card?: CourseCardComponent;
  //@ViewChildren(CourseCardComponent) public cards?: QueryList<CourseCardComponent>;
  @ViewChildren(CourseCardComponent, {read: ElementRef}) public cards?: QueryList<CourseCardComponent>;

  public constructor(){}
  public ngAfterViewInit(){
    const result00$ = this.cards?.changes.pipe(
      map(obj99 => obj99.toArray())
    );
    result00$?.subscribe(console.log);
  }
  public onCardClicked(course: Course){}
  public onCoursesEdited(){
	this.courses.push(
	  {
		id: 1,
        description: "Angular Core Deep Dive 2",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10,
        category: 'INTERMEDIATE'
	  });
  }
}
