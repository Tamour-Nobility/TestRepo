import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverallVisitorsService } from './overall-visitors.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-overall-visitors',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './overall-visitors.component.html',
    styleUrl: './overall-visitors.component.scss'
})
export class OverallVisitorsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private overallVisitorsService: OverallVisitorsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.overallVisitorsService.loadChart();
    }

}