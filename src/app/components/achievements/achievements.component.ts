import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {

  stats = [
    {
      value: '2+',
      label: 'Years Experience'
    },
    {
      value: '20+',
      label: 'Projects'
    },
    {
      value: '15+',
      label: 'Technologies'
    },
    {
      value: '100%',
      label: 'Commitment'
    }
  ];

  achievements: Achievement[] = [

    {
      icon: '🏆',
      title: 'Enterprise Development',
      description:
      'Built and maintained enterprise applications using Angular, Spring Boot and PostgreSQL.'
    },

    {
      icon: '📄',
      title: 'IEEE Research Publication',
      description:
      'Published research on Multi-Symbol Detection of QPSK Signals in Noisy Channels.'
    },

    {
      icon: '🚀',
      title: 'Enterprise Modules',
      description:
      'Delivered UDIN, Event Management and Project Management modules.'
    },

    {
      icon: '💻',
      title: 'Modern Full Stack',
      description:
      'Developed responsive applications using Angular, Java and Spring Boot.'
    }

  ];

}