import {
    Component,
    Output,
} from '@angular/core';

import {SearchService} from './search-service/search.service';

import {Subject} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent {
    @Output()
    public reposByUser: Subject<any> = new Subject<any>();

    loading: boolean;

    constructor(private _service: SearchService) {
    }

    onReposSearch(user: string): void {
        this.loading = true;

        this._service.getReposByUser(user)
            .toPromise()
            .then(res => {
                this.reposByUser = res;
                this.loading = false;

                if (res.length == 0) {
                    throw 'This user has no repos, try to search another user';
                }
            })
            .catch(err => alert(err));
    }
}
