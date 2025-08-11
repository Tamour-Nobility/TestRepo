import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SalesOverviewService } from './sales-overview.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sales-overview',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './sales-overview.component.html',
    styleUrl: './sales-overview.component.scss'
})
export class SalesOverviewComponent {

    constructor(
        private salesOverviewService: SalesOverviewService
    ) {}

    ngOnInit(): void {
        this.salesOverviewService.loadChart();
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