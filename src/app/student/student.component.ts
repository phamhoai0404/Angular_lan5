
import { Router } from '@angular/router';
// import { ServiceHttpService } from './../../../../Angular4/src/app/service/service-http.service';

import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team.model';
import { ServiceHttpService } from '../service/service-http.service';
import { CommonService } from '../service/common.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTeamComponent } from '../edit-team/edit-team.component';
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
        this.loadData();
    }
    buttonAddTeam() {
        this.router.navigate(['formStudent']);
    }
    loadData() {
        console.log("Vào huhu");
        this.testService.getAllTeam().subscribe(
            data => {
                console.log(data);
                this.doituong = data;
                console.error(this.doituong);
                this.common.numberTeam = data.length;
            },
            error => {
                console.log(error.data);
            }
        )
    }
    addTeam() {
        console.log("vào button");
        this.themdoituong();

        //Theo mình nghĩ như này cũng được  nhưng chắc hơi chậm thôi hoặc thêm luôn ở chỗ thêm đối tượng
        //this.huhu();
    }
    themdoituong() {
        const newTeam = {
            teamName: 'Javassssssssssssssss',
            teamId: 'JSS'
        }
        this.testService.postTeam(newTeam as Team).subscribe(
            data => {
                console.log("trả về dữ liệu: ", data);
                this.doituong.push(data);

            },
            error => console.log("lỗi ", error.data)
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
