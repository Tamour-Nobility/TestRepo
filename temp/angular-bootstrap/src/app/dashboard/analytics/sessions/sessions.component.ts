import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionsService } from './sessions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sessions',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './sessions.component.html',
    styleUrl: './sessions.component.scss'
})
export class SessionsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private sessionsService: SessionsService
    ) {}

    ngOnInit(): void {
        this.sessionsService.loadChart();
    }

}