import {
    Component,
    Input,
} from '@angular/core';

import {SearchService} from '../search-service/search.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['search-result.component.scss']
})

export class SearchResultComponent {
    @Input()
    loading: boolean;

    @Input()
    reposByUser: Object;

    selectedRepoName: string = '';

    contributorsByUserRepo: Iterable<{}>[];

    constructor(private _service: SearchService) {
    }

    /* This looks strange, however I need it to get rid of error in console */
    /* Maybe there is more elegant solution, however I tried to spend not more than 4 hours */
    makeAnArray(value: Iterable<{}>): any[] {
        return Array.from(value);
    }

    selectedRepoIsActual(arr, val) {
        return arr.map(x => x.name).indexOf(val) !== -1;
    }

    onClickOnRepo(user: string, repo: string): void {
        this.selectedRepoName = repo;

        this._service.getContributorsByUserRepo(user, repo)
            .subscribe(res => {
                this.contributorsByUserRepo = res;
            })
    }
}
