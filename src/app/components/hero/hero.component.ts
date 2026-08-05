import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

import Typed from 'typed.js';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  private typed!: Typed;

  techStack = [
    'Angular',
    'Spring Boot',
    'Java',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Git'
  ];

  ngAfterViewInit(): void {

    // Typed Animation
    this.typed = new Typed('#typed', {
      strings: [
        'Full Stack Developer',
        'Angular Developer',
        'Spring Boot Developer',
        'Java Developer',
        'Software Engineer'
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Hero Left Animation
    gsap.from('.hero-left', {
      x: -120,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Hero Right Animation
    gsap.from('.hero-right', {
      x: 120,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Floating Icons
    gsap.to('.floating', {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    // Stats Cards
    gsap.from('.stat-card', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      delay: 1
    });

    // Tech Chips
    gsap.from('.chips span', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.8
    });

    // Buttons
    gsap.from('.buttons button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 1
    });

  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {

    const light = document.querySelector('.mouse-light') as HTMLElement;

    if (!light) {
      return;
    }

    gsap.to(light, {
      left: event.clientX,
      top: event.clientY,
      duration: 0.3,
      ease: 'power2.out'
    });

  }

  scrollToProjects(): void {

    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });

  }

  downloadResume(): void {

    // Place your resume in src/assets/resume.pdf
    window.open('assets/resume.pdf', '_blank');

  }

  ngOnDestroy(): void {

    if (this.typed) {
      this.typed.destroy();
    }

  }

}