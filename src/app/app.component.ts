import { ServiceHttpService } from './service/service-http.service';
import { CommonService } from './service/common.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Angular5';
    @ViewChild('sidenav') sidenav: MatSidenav;
    public isOpened = false;

    //Ghi dữ liệu ở ngoài html 
    public number = 0;

    constructor(
        private testService: ServiceHttpService,
        private common: CommonService
    ) { }

    ngOnInit(): void {

        //Đây là đăng kí trước 
        this.common.numberTeam$.subscribe(
            numberTeam => this.number = numberTeam
        )

        //Nếu mà number == 0 thì lại load lại dữ liệu
        if(this.number === 0){
            this.loadNumber();
        }

    }
    loadNumber() {
        this.testService.getAllTeam().subscribe(
            data => {
                this.common.setNumber(data.length);
            },
            error => console.error(error.data)
        )
    }



    //Phục vụ cho việc trình bày
    public openLeftSide() {
        this.isOpened = !this.isOpened;
        this.sidenav.toggle();
    }

    public closeLeftSide() {
        this.isOpened = false;
    }
}
