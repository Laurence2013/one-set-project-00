import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Declare your AppComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot() // Import IonicModule
  ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
