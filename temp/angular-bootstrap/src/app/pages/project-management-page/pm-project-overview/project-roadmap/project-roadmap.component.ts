import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectRoadmapService } from './project-roadmap.service';

@Component({
    selector: 'app-project-roadmap',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './project-roadmap.component.html',
    styleUrl: './project-roadmap.component.scss'
})
export class ProjectRoadmapComponent {

    constructor(
        private projectRoadmapService: ProjectRoadmapService
    ) {}

    ngOnInit(): void {
        this.projectRoadmapService.loadChart();
    }

}