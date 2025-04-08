import { Component, ViewChild, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFooter } from '@ionic/angular/standalone';

import { map } from 'rxjs/operators';

import { TestComponent } from '../test-component/test-component.component';

import { COURSES } from '../../db-data';
import { Course } from '../models/course';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, TestComponent, CommonModule],
})
export class HomePage implements AfterViewInit {
	public home:string = 'Home';

	public courses = COURSES;

	/*@ViewChildren(TestComponent, {read: ElementRef})
	public cards?: QueryList<ElementRef>*/

	@ViewChildren(TestComponent)
	public cards?: QueryList<TestComponent>

	/*@ViewChild('testComponent1')
	public test1!: TestComponent;

	@ViewChild('testComponent2')
	public test2!: TestComponent;

	@ViewChild('testComponent1', {read: ElementRef})
	public test1!: ElementRef;

	@ViewChild('testComponent2', {read: ElementRef})
	public test2!: ElementRef;

	@ViewChild('testViewChild')
	public testViewChild!: ElementRef;

	@ViewChild('container')
	public containerDiv!: ElementRef;*/

  public constructor(){}
	public ngAfterViewInit(){
		const element = this.cards?.changes.pipe(map(obj99 => obj99.toArray()));
		element?.subscribe(console.log);

		/*this.cards?.changes.subscribe(cards => console.log('All cards: ', cards));

		console.log('ngAfterViewInit, At testViewChild', this.testViewChild);
		console.log('ngAfterViewInit, At test1', this.test1);
		console.log('ngAfterViewInit, At test2', this.test2);*/

		//this.courses[0].description = 'test';
	}
	public onCourseSelected(course: Course){
		/*const element = this.test1.nativeElement as HTMLElement
		console.log('At test1', element.innerText);
		console.log('At test2', this.test2);*/
	}
	public onCoursesEdited(){
		this.courses.push(
    {
			id: 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      lessonsCount: 10,
      category: 'INTERMEDIATE'
    })
	}
}
