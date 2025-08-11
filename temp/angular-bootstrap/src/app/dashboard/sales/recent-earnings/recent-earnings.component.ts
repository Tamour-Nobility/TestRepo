import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecentEarningsService } from './recent-earnings.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-recent-earnings',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './recent-earnings.component.html',
    styleUrl: './recent-earnings.component.scss'
})
export class RecentEarningsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private recentEarningsService: RecentEarningsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.recentEarningsService.loadChart();
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