import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionsByChannelService } from './sessions-by-channel.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sessions-by-channel',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './sessions-by-channel.component.html',
    styleUrl: './sessions-by-channel.component.scss'
})
export class SessionsByChannelComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private sessionsByChannelService: SessionsByChannelService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.sessionsByChannelService.loadChart();
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