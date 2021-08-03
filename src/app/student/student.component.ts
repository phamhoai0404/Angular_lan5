
import { Router } from '@angular/router';
// import { ServiceHttpService } from './../../../../Angular4/src/app/service/service-http.service';

import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team.model';
import { ServiceHttpService } from '../service/service-http.service';
import { CommonService } from '../service/common.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { RemoveTeamComponent } from '../remove-team/remove-team.component';
// import { EditTeamComponent } from '../edit-team/edit-team.component';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    public doituong: Team[] = [];


    constructor(
        private common: CommonService,
        private testService: ServiceHttpService,
        private router: Router,
        private dialog: MatDialog
    ) {
    }
    ngOnInit(): void {
         //Đăng kí là thằng đối tượng bằng thằng dataTeam
         this.common.dataTeam$.subscribe(
            data => this.doituong = data
        )
        
        //Nếu không có đối tượng gì thì load lại dữ liệu
        if(this.doituong == null){
            this.loadData();
        }
    }
    buttonAddTeam() {
        this.router.navigate(['formStudent']);
    }

    loadData() {
        this.testService.getAllTeam().subscribe(
            data => {
                console.error("load data app", data);
                this.common.setDataTeam(data);
            },
            error => {
                console.log(error.data);
            }
        )
    }
    editTeam(team) {
        console.log("Đã vào edit");
        console.log("Team edit nhá", team);
        this.openDialogEdit(team);
    }
    deleteTeam(team) {
        console.log("Đã vào delete");
        console.log("Team edit nhá", team);
        this.openDialogRemove(team);
    }
    
    openDialogRemove(team) {
        this.dialog.open(RemoveTeamComponent);
        this.common.dataEditTeam = team;
    }
    openDialogEdit(team) {
        //Chưa cần dùng đến nên để thế này cũng được
        //    const dialogRef = this.dialog.open(EditTeamComponent);

        this.dialog.open(EditTeamComponent);
        this.common.dataEditTeam = team;


        //Mình nghĩ cái này chưa cần thiết trong đây lắm
        //Nhưng chắc cần thiết trong một trường hợp nào đấy 
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    }


}
