import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImpressionsService } from './impressions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-impressions',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './impressions.component.html',
    styleUrl: './impressions.component.scss'
})
export class ImpressionsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private impressionsService: ImpressionsService
    ) {}

    ngOnInit(): void {
        this.impressionsService.loadChart();
    }

}