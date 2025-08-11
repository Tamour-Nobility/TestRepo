import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CriticalPatientsService } from './critical-patients.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-critical-patients',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './critical-patients.component.html',
    styleUrl: './critical-patients.component.scss'
})
export class CriticalPatientsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private criticalPatientsService: CriticalPatientsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.criticalPatientsService.loadChart();
    }

}