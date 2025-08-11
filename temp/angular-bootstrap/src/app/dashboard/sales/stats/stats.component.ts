import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalProfitComponent } from './total-profit/total-profit.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [RouterLink, TotalSalesComponent, TotalOrdersComponent, TotalProfitComponent, TotalRevenueComponent],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}