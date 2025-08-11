import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RealTimeSalesService } from './real-time-sales.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-real-time-sales',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './real-time-sales.component.html',
    styleUrl: './real-time-sales.component.scss'
})
export class RealTimeSalesComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private realTimeSalesService: RealTimeSalesService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.realTimeSalesService.loadChart();
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