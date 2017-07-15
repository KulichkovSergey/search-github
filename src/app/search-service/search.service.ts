import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import {gitHubUrl} from '../common/domain';

@Injectable()
export class SearchService {
    constructor(private _http: Http) {
    }

    getReposByUser(user: string): Observable<any> {
        return this._http.get(`${gitHubUrl}users/${user}/repos`)
            .map(res => res.json())
            .catch(err => Observable.throw(err.json().error || alert("There is no such user, try to search another user")));
    }

    getContributorsByUserRepo(user: string, repo: string): Observable<any> {
        return this._http.get(`${gitHubUrl}repos/${user}/${repo}/contributors`)
            .map(res => res.json())
            .catch(err => Observable.throw(err.json().error));
    }
}