import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SyncingLineChartService } from './syncing-line-chart.service';

@Component({
    selector: 'app-syncing-line-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './syncing-line-chart.component.html',
    styleUrl: './syncing-line-chart.component.scss'
})
export class SyncingLineChartComponent {

    constructor(
        private syncingLineChartService: SyncingLineChartService
    ) {}

    ngOnInit(): void {
        this.syncingLineChartService.loadChart();
    }

}