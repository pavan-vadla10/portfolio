import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experience: Experience[] = [
    {
      company: 'XYZ Technologies',
      role: 'System Engineer',
      duration: '2024 - Present',
      description:
        'Developed enterprise applications using Angular, Spring Boot and PostgreSQL. Worked on UDIN, Event Management and Project Management modules while building scalable REST APIs and responsive user interfaces.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'PostgreSQL', 'REST API'],
    },
  ];
}
