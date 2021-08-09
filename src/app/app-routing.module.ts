import { StudentComponent } from './student/student.component';
import { InformationComponent } from './information/information.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTeamComponent } from './form-team/form-team.component';


const routes: Routes = [
    {
        path: '',//Nếu mà '' thì đường đẫn nó mặc định tới 'information' là component InformationComponent
        redirectTo:'information',
        pathMatch:'full'//cái này phải viết thêm vào không sẽ báo lỗi 
    },
    { path: 'information', component: InformationComponent },
    { path: 'student', component: StudentComponent },
    { path: 'formStudent', component: FormTeamComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
