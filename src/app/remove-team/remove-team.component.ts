import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../service/common.service';
import { ServiceHttpService } from '../service/service-http.service';

@Component({
    selector: 'app-remove-team',
    templateUrl: './remove-team.component.html',
    styleUrls: ['./remove-team.component.scss']
})
export class RemoveTeamComponent implements OnInit {

    constructor(
        private service: ServiceHttpService,
        private common: CommonService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }
    buttonRemoveTeam() {
        let idRemove = this.common.dataEditTeam.id;
        this.service.deleteTeam(idRemove as number).subscribe(
            data => {
                console.log("xóa thành công ", data);
                this.loadDataTeam();
            },
            error => console.log("lỗi removeService", error.data)
        )
    }
    
    loadDataTeam() {
        this.service.getAllTeam().subscribe(
            data => {
                this.common.setDataTeam(data);
                this.common.setNumber(data.length);
                this.dialog.closeAll();
            },
            error => {
                console.log(error.data);
            }
        )
    }
}
