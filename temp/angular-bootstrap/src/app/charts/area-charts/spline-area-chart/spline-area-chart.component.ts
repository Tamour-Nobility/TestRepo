import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SplineAreaChartService } from './spline-area-chart.service';

@Component({
    selector: 'app-spline-area-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './spline-area-chart.component.html',
    styleUrl: './spline-area-chart.component.scss'
})
export class SplineAreaChartComponent {

    constructor(
        private splineAreaChartService: SplineAreaChartService
    ) {}

    ngOnInit(): void {
        this.splineAreaChartService.loadChart();
    }

}