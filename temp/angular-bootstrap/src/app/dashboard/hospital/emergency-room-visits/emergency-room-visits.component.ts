import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmergencyRoomVisitsService } from './emergency-room-visits.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-emergency-room-visits',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './emergency-room-visits.component.html',
    styleUrl: './emergency-room-visits.component.scss'
})
export class EmergencyRoomVisitsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private emergencyRoomVisitsService: EmergencyRoomVisitsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.emergencyRoomVisitsService.loadChart();
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