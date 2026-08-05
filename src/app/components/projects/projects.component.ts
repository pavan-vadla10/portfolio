import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Project Management',
      subtitle: 'Internal Enterprise Portal',
      image: 'assets/projects/project.png',
      description:'Built project planning, task tracking, user management and reporting modules with responsive dashboards.',
      technologies: [
        'Angular',
        'Java',
        'Spring Boot',
        'REST API'
      ],
      github: '',
      live: '',
      featured: false
    }
  ];

}