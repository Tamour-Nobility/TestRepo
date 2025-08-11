import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClicksService } from './clicks.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-clicks',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './clicks.component.html',
    styleUrl: './clicks.component.scss'
})
export class ClicksComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private clicksService: ClicksService
    ) {}

    ngOnInit(): void {
        this.clicksService.loadChart();
    }

}