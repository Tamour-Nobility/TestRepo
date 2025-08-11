import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PriceStatisticsService } from './price-statistics.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-price-statistics',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './price-statistics.component.html',
    styleUrl: './price-statistics.component.scss'
})
export class PriceStatisticsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private priceStatisticsService: PriceStatisticsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.priceStatisticsService.loadChart();
    }

    // Card Header Menu
    isCardHeaderOpen = false;
    isCryptocurrencyTypesOpen = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    toggleCryptocurrencyTypesMenu() {
        this.isCryptocurrencyTypesOpen = !this.isCryptocurrencyTypesOpen;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
        if (!target.closest('.cryptocurrency-types')) {
            this.isCryptocurrencyTypesOpen = false;
        }
    }

}