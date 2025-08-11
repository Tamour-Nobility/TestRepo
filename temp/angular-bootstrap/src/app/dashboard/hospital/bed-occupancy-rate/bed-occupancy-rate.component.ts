import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { BedOccupancyRateService } from './bed-occupancy-rate.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-bed-occupancy-rate',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './bed-occupancy-rate.component.html',
    styleUrl: './bed-occupancy-rate.component.scss'
})
export class BedOccupancyRateComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private bedOccupancyRateService: BedOccupancyRateService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.bedOccupancyRateService.loadChart();
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