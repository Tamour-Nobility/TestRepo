import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsOverviewService } from './analytics-overview.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-analytics-overview',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './analytics-overview.component.html',
    styleUrl: './analytics-overview.component.scss'
})
export class AnalyticsOverviewComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private analyticsOverviewService: AnalyticsOverviewService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.analyticsOverviewService.loadChart();
    }

}