import { StudentComponent } from './student/student.component';
import { InformationComponent } from './information/information.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTeamComponent } from './form-team/form-team.component';


const routes: Routes = [
  {path:'', component:InformationComponent },
  {path:'information', component:InformationComponent },
  {path:'student', component:StudentComponent },
  {path:'formStudent', component:FormTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
