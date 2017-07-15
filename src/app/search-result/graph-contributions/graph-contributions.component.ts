import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-graph-contributions',
    templateUrl: './graph-contributions.component.html',
    styleUrls: ['./graph-contributions.component.scss']
})

export class GraphContributionsComponent implements OnChanges {
    @Input()
    contributorsByUserRepo;

    chartOptions: Object;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.contributorsByUserRepo || changes.selectedRepoName) {
            this.chartOptions = {
                title: {
                    text: 'Contributions per user',
                },
                chart: {
                    type: 'column',
                    width: Math.max(200, Math.min(1300, this.contributorsByUserRepo.length * 30)),
                },
                series: [{
                    data: this.contributorsByUserRepo.map(elem => elem.contributions),
                }],
                legend: {
                    enabled: false,
                },

                credits: {
                    enabled: false,
                },

                xAxis: {
                    categories: this.contributorsByUserRepo.map(elem => elem.login),
                }
            };
        }
    }
}
