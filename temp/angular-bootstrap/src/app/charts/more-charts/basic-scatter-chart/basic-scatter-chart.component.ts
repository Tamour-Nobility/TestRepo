import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicScatterChartService } from './basic-scatter-chart.service';

@Component({
    selector: 'app-basic-scatter-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-scatter-chart.component.html',
    styleUrl: './basic-scatter-chart.component.scss'
})
export class BasicScatterChartComponent {

    constructor(
        private basicScatterChartService: BasicScatterChartService
    ) {}

    ngOnInit(): void {
        this.basicScatterChartService.loadChart();
    }

}