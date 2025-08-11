import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-browsing-pages',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './top-browsing-pages.component.html',
    styleUrl: './top-browsing-pages.component.scss'
})
export class TopBrowsingPagesComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}