import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChartModule} from 'angular2-highcharts';
import {BsDropdownModule} from 'ngx-bootstrap';

import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

declare let require: any;
export function highchartsFactory() {
    return require('highcharts');
}

import {AppComponent} from './app.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {GraphContributionsComponent} from './search-result/graph-contributions/graph-contributions.component';

import {SearchService} from './search-service/search.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchResultComponent,
        SearchFormComponent,
        GraphContributionsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartModule,
        BsDropdownModule.forRoot(),
    ],
    providers: [
        SearchService,
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        },
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
