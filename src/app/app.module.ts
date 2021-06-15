import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDeatailsComponent } from './components/tutorial-deatails/tutorial-deatails.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TutorialServiceService } from './services/tutorial-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDeatailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [TutorialServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
