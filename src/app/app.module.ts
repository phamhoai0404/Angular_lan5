import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material nhá 
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



import { InformationComponent } from './information/information.component';
import { StudentComponent } from './student/student.component'
import { HttpClientModule } from '@angular/common/http';
import { FormTeamComponent } from './form-team/form-team.component';



//import để sử dụng input 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';

//Thêm
import { EditTeamComponent } from './edit-team/edit-team.component';
import { RemoveTeamComponent } from './remove-team/remove-team.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    StudentComponent,
    FormTeamComponent,
    //DialogContentExampleDialogComponent,
   
    EditTeamComponent,
    RemoveTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,//tạm thời thì thấy thằng này để giao tiếp với serve

    //inport để sử dụng input á
    FormsModule,
    ReactiveFormsModule,


    //Material
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
