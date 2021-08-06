import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Team } from '../model/team.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceHttpService {
    private URL_BASIC = 'http://localhost:8087/api';
    constructor(private http: HttpClient) { }

    getAllTeam() {
        return this.http
            .get<any>(this.URL_BASIC + '/team')
            .pipe(catchError(this.handleError));
    }

    postTeam(data: Team) {
        return this.http
            .post<any>(this.URL_BASIC + '/team/create', data)
            .pipe(catchError(this.handleError));
    }
    editTeam(data: Team){
        return this.http
        .put<any>(this.URL_BASIC + '/team/update/'+ data.id , data)
        .pipe(catchError(this.handleError)); 
    }
    deleteTeam(id: number){
        return this.http
        .delete<any>(this.URL_BASIC + '/team/delete/' + id )
        .pipe(catchError(this.handleError)); 
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

}
