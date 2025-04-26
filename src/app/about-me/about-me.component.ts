import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Interface for Project data
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link to the project
}

// Interface for Skill data
interface Skill {
  name: string;
  level: number; // e.g., 1-5, or percentage
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Removed RouterOutlet, RouterLink
  template: `
    <div class="container mx-auto p-4 md:p-8">
      <section class="text-center mb-8 md:mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          John Doe
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Senior Fullstack Engineer
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Highly proficient Senior Fullstack Engineer leveraging a robust technology stack. Proven ability to architect and implement complex web applications.
        </p>
        <div class="mt-6">
          <a
            href="#projects"
            class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="skills" class="mb-12 md:mb-16">
   

        <h2 class="text-3xl md:text-4xl font-semibold text-yellow-400 dark:text-yellow-300 bg-black dark:bg-gray-900 text-center mb-6 md:mb-8 rounded-md py-2">
          Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let skill of skills" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ skillLevelToString(skill.level) }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                class="bg-blue-500 rounded-full h-2.5"
                [style.width]="skill.level + '%'"
                aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6 md:mb-8">
          Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let project of projects" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 transition-transform duration-300 hover:scale-105">
            <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span *ngFor="let tech of project.technologies" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-sm font-medium">
                {{ tech }}
              </span>
            </div>
            <a *ngIf="project.link" href="{{project.link}}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200 inline-flex items-center">
              View Project <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3h-10.5a.5.5 0 000 1h10.5v-1z"></path></svg>
            </a>
          </div>
        </div>
      </section>

      <section id="about" class="mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6 md:mb-8">
          About Me
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            I am a Senior Fullstack Engineer with a passion for building
            innovative and scalable web applications. I have extensive experience
            in both front-end and back-end development, and I am always eager to
            learn new technologies. My goal is to create software that not only
            meets the technical requirements but also provides a great user
            experience.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6 md:mb-8">
          Contact Me
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
          <p class="text-lg text-gray-600 dark:text-gray-400 text-center">
            Email: john.doe&#64;example.com
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400 text-center">
            LinkedIn: linkedin.com/in/johndoe
          </p>
          </div>
      </section>
    </div>
  `,
})
export class AboutMeComponent implements OnInit {
  title = 'my-portfolio';
  projects: Project[] = [];
  skills: Skill[] = [];

  ngOnInit(): void {
    // Initialize projects data
    this.projects = [
      {
        title: 'E-commerce Platform',
        description:
          'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and checkout functionality.',
        technologies: [
          'Angular',
          'Ruby on Rails',
          'PostgreSQL',
          'Stripe API',
        ],
        link: 'https://github.com/example/ecommerce-platform', //Add a real link
      },
      {
        title: 'Data Analysis Dashboard',
        description:
          'A dashboard for visualizing and analyzing sales data, with interactive charts and reports.',
        technologies: ['Angular', 'Python', 'Django', 'NumPy', 'Pandas', 'D3.js'],
        link: 'https://github.com/example/data-analysis-dashboard', //Add a real link
      },
      {
        title: 'RESTful API Service',
        description:
          'A RESTful API service for managing user data, built with Spring Boot and secured with Spring Security.',
        technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
        link: 'https://github.com/example/restful-api', //Add a real link
      },
    ];

    // Initialize skills data.
    this.skills = [
        { name: 'Angular', level: 90 },
        { name: 'Ruby on Rails', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java/Spring Boot', level: 75 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML', level: 98 },
        { name: 'CSS', level: 95 },
        { name: 'SQL', level: 80 },
        { name: 'Git', level: 90 },
    ];
  }

  skillLevelToString(level: number): string {
    if (level >= 90) {
      return 'Expert';
    } else if (level >= 80) {
      return 'Advanced';
    } else if (level >= 70) {
      return 'Proficient';
    } else if (level >= 60) {
      return 'Intermediate';
    } else {
      return 'Beginner';
    }
  }
}
