import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomAngleCircleRadialbarChartService } from './custom-angle-circle-radialbar-chart.service';

@Component({
    selector: 'app-custom-angle-circle-radialbar-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './custom-angle-circle-radialbar-chart.component.html',
    styleUrl: './custom-angle-circle-radialbar-chart.component.scss'
})
export class CustomAngleCircleRadialbarChartComponent {

    constructor(
        private customAngleCircleRadialbarChartService: CustomAngleCircleRadialbarChartService
    ) {}

    ngOnInit(): void {
        this.customAngleCircleRadialbarChartService.loadChart();
    }

}