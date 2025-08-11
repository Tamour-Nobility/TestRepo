import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicPolarChartService } from './basic-polar-chart.service';

@Component({
    selector: 'app-basic-polar-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-polar-chart.component.html',
    styleUrl: './basic-polar-chart.component.scss'
})
export class BasicPolarChartComponent {

    constructor(
        private basicPolarChartService: BasicPolarChartService
    ) {}

    ngOnInit(): void {
        this.basicPolarChartService.loadChart();
    }

}