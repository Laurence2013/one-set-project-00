import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  public data = { title: 'This is a fitness App' };

  public constructor() {}
  public onLogoClicked() {
    alert('Hello World');
  }
}
