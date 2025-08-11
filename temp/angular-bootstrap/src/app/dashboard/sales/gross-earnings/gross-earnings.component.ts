import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GrossEarningsService } from './gross-earnings.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-gross-earnings',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './gross-earnings.component.html',
    styleUrl: './gross-earnings.component.scss'
})
export class GrossEarningsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private grossEarningsService: GrossEarningsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.grossEarningsService.loadChart();
    }

}