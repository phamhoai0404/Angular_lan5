import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../model/team.model';
import { ServiceHttpService } from './service-http.service';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public numberTeam = 0;
    public numberTeam$ = new BehaviorSubject<number>(0);

    //Dùng để lưu trữ cái team để xóa, sửa
    public dataEditTeam = new Team();

    public dataTeam: Team[] = [];
    public dataTeam$ = new BehaviorSubject<Team[]>(null);

    constructor( private  servicehttp: ServiceHttpService) { 
    }

    public setNumber(numbers: number) {

        this.numberTeam = numbers;

        //Thông báo cho ai đăng kí nó cũng thay đổi theo bằng giá trị của this.numberTeam
        this.numberTeam$.next(numbers);
    }
    public increaseTeam() {
        this.numberTeam++;

        //Thông báo cho ai đăng kí nó cũng thay đổi theo bằng giá trị của this.numberTeam
        this.numberTeam$.next(this.numberTeam);
    }

    public setDataTeam(data) {
        this.dataTeam = data;
        this.dataTeam$.next(data);
    }
    public hoa() {
        this.servicehttp.getAllTeam().subscribe(
            data => {
                this.setDataTeam(data);
            },
            error => {
                console.log(error.data);
            }
        )
    }
}
