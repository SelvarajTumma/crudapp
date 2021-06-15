import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDeatailsComponent } from './components/tutorial-deatails/tutorial-deatails.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

const routes: Routes = [
  {path:'',redirectTo:'tutorials',pathMatch:'full'},
  {path:'tutorials',component:TutorialsListComponent},
  {path:'tutorials/:id',component:TutorialDeatailsComponent},
  {path:'add',component:AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
