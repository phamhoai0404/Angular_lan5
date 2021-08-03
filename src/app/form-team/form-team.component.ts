import { CommonService } from './../service/common.service';
import { FormControl, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team.model';
import { ServiceHttpService } from '../service/service-http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-team',
    templateUrl: './form-team.component.html',
    styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {

    public teamGroup = new FormGroup({
        teamId: new FormControl(''),
        teamName: new FormControl(''),
    });

    private team = new Team();
    constructor(
        private service: ServiceHttpService,
        private router: Router,
        private common: CommonService
    ) { }

    ngOnInit(): void {
    }

    newTeam(team) {
        //Lưu trữ vào team
        for (const controlName in this.teamGroup.controls) {
            //Kiểu nếu nó tồn tại ấy 
            if (controlName) {
                team[controlName] = this.teamGroup.controls[controlName].value;
            }
        }
        console.error(team);//Bình thường check dữ liệu nhưng mà đang học nên thôi nhá 
    }

    //Thêm dữ liệu vào post ấy 
    addTeamContinue(team) {
        this.service.postTeam(team).subscribe(
            data => {
                this.common.increaseTeam();
                console.log(data.length);
                this.teamGroup.reset();//Xóa dữ liệu cũ
            },
            error => console.log(error.data)
        )
    }

    addTeamSavePage(team) {
        this.service.postTeam(team).subscribe(
            data => {
                this.common.increaseTeam();
                this.teamGroup.reset();//Xóa dữ liệu cũ
                this.router.navigate(['/student']);

            },
            error => console.log(error.data)
        )
    }


    saveContinue() {
        //Tạo dữ liệu mới cho team
        this.newTeam(this.team);

        //Thực hiện post lên serve và xóa dữ liệu cũ tăng Bagde
        this.addTeamContinue(this.team);
    }
    saveAndPageMain() {
        //Tạo dữ liệu mới cho team
        this.newTeam(this.team);

        //Thực hiện post lên serve và xóa dữ liệu cũ tăng Bagde và thực hiển chuyển trang
        this.addTeamSavePage(this.team);
    }
}
