import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../model/team.model';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public numberTeam = 0;
    public numberTeam$ = new BehaviorSubject<number>(0);
    public dataEditTeam = new Team();
    constructor() { }

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
}
