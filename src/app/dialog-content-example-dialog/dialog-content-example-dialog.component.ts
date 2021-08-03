import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-dialog-content-example-dialog',
    templateUrl: './dialog-content-example-dialog.component.html',
    styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {

    public teamGroup = new FormGroup({
        teamId: new FormControl(''),
        teamName: new FormControl(''),
    });
    constructor(
        private dialog : MatDialog
    ) { }

    ngOnInit(): void {
    }
    buttonEditTeam(){
        
    }













    //Mấy cái này chỉ là test thôi
    // xinhgaiqua() {
    //     return 'do là cuộc đời tôi';
    // }
    // donha() {
    //     console.log("dóng nha");
    //     this.dialog.closeAll();
        
    // }

}
