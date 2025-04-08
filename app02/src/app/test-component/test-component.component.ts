import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../models/course';
import { IonCardHeader, IonCardTitle, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, CommonModule],
})
export class TestComponent implements OnInit {

	@Input()
	public course: Course | undefined;

	@Input()
	public cardIndex!: number;

	@Output()
	public courseSelected = new EventEmitter<Course>();

	@ContentChild('tempComponent')
	public tempCom = '';

	public currentDate = new Date();

  public constructor(){}
  public ngOnInit(){}
	public onCourseViewed(){
		console.log('Course Card Component button clicked!');

		this.courseSelected.emit(this.course);
	}
	public isImageVisible(){
		return this.course && this.course.iconUrl;
	}
	public cardClass(){
		return {
			'beginner': this.course?.category === 'BEGINNER',
			'course-card': true
		}
	}
	public cardStyle(){
		return {'text-decoration': 'underline'}
	}
	public isCourseBeginner(){
		if(this.course?.category === 'BEGINNER'){
			return {'courseSpacing2': 'true'}
		}else{
			return {'courseSpacing1': 'true'}
		}
	}
}
