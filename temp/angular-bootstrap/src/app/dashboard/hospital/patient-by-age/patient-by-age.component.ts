import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatientByAgeService } from './patient-by-age.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-patient-by-age',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './patient-by-age.component.html',
    styleUrl: './patient-by-age.component.scss'
})
export class PatientByAgeComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private patientByAgeService: PatientByAgeService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.patientByAgeService.loadChart();
    }

    // Card Header Menu
    isCardHeaderOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
    }

}