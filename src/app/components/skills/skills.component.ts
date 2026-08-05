import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  categories: SkillCategory[] = [

    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'JavaScript'
      ]
    },

    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Spring Security',
        'Hibernate',
        'JWT'
      ]
    },

    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'SQL'
      ]
    },

    {
      title: 'Tools',
      icon: '🚀',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Jenkins',
        'VS Code',
        'Postman'
      ]
    }

  ];

}