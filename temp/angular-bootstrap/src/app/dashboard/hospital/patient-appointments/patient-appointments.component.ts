import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-patient-appointments',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './patient-appointments.component.html',
    styleUrl: './patient-appointments.component.scss'
})
export class PatientAppointmentsComponent {

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