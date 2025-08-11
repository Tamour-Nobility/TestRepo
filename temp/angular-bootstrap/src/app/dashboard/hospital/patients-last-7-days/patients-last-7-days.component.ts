import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatientsLast7DaysService } from './patients-last-7-days.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-patients-last-7-days',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './patients-last-7-days.component.html',
    styleUrl: './patients-last-7-days.component.scss'
})
export class PatientsLast7DaysComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private patientsLast7DaysService: PatientsLast7DaysService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.patientsLast7DaysService.loadChart();
    }

}