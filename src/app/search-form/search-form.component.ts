import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['search-form.component.scss']
})

export class SearchFormComponent {
    @Input()
    loading: boolean;

    @Output()
    public onReposSearch: EventEmitter<{}> = new EventEmitter();

    user: string = '';

    onSearchClick(): void {
        this.onReposSearch.emit(this.user);
    }
}
