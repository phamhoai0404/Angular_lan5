import { CommonService } from './../service/common.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceHttpService } from '../service/service-http.service';
import { Team } from '../model/team.model';


@Component({
    selector: 'app-edit-team',
    templateUrl: './edit-team.component.html',
    styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

    private team = new Team();
    public teamGroup = new FormGroup({
        teamName: new FormControl(''),
        teamId: new FormControl(''), 
        id:  new FormControl('')
    });
    constructor(
        private common: CommonService,
        private dialog: MatDialog,
        private service: ServiceHttpService
    ) { }

    ngOnInit(): void {
        this.loadData();
        
    }
    buttonEditTeam() {
        //Cần check dữ liệu nữa nhưng mà thôi h chưa check

        //Team sau khi đã sửa
        this.newTeam();

        //
        this.editService();
    }
    loadData(){
        // for(const name in this.common.dataEditTeam){
        //     if(this.common.dataEditTeam[name]){
        //         this.teamGroup.controls[name] = this.common.dataEditTeam[name]; 
        //     }
        // }

        //Sét dữ liệu
        this.teamGroup.controls.teamName.setValue( this.common.dataEditTeam['teamName']);
        this.teamGroup.controls.teamId.setValue( this.common.dataEditTeam['teamId']);
        this.teamGroup.controls.id.setValue( this.common.dataEditTeam['id']);
        
        console.log("common",this.common.dataEditTeam);
        console.log("TeamGroup",this.teamGroup.controls);
    }
    newTeam(){
        for (const controlName in this.teamGroup.controls) {
            //Kiểu nếu nó tồn tại ấy 
            if (controlName) {
                this.team[controlName] = this.teamGroup.controls[controlName].value;
            }
        }
    }
    editService(){
        this.service.editTeam(this.team).subscribe(
            data =>{
                console.log(data);
                this.dialog.closeAll();
            },
            error => console.log("lỗi ", error.data)
            
        )
    }

}
