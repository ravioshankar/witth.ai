import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

interface Service {
  title: string;
  description: string;
}
@Component({
  selector: 'app-home-page',
  standalone: true,
imports: [CommonModule, RouterOutlet, MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, 
  MatChipsModule],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  title = 'software-consulting-site';
  currentYear = new Date().getFullYear();

  services: Service[] = [
    {
      title: 'Fullstack Software Development',
      description: 'From concept to deployment, we build robust and scalable web and mobile applications tailored to your needs. Leverage our expertise in frontend and backend technologies.',
    },
    {
      title: 'Database Setup & Fine-tuning',
      description: 'Ensure optimal performance and data integrity with our database design, implementation, and optimization services. We handle everything from initial setup to complex query tuning.',
    },
    {
      title: 'Digital Strategy & Planning',
      description: 'Navigate the digital landscape with a clear and effective strategy. We help you define your technology roadmap, identify opportunities, and implement solutions that align with your business goals.',
    },
  ];



  // Define expertise data
  expertiseItems: string[] = [ // <-- Add this array
    'Python',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Django',
    'Flask',
    'Ruby on Rails',
    'Spring Boot',
    'Node.js', // Added Node.js as an example
    'AWS',     // Added AWS as an example
    'Docker'   // Added Docker as an example
  ];


  highlightedChips = new Set<string>(); // Use a Set to track highlighted items

  toggleHighlight(tech: string): void {
    if (this.highlightedChips.has(tech)) {
      this.highlightedChips.delete(tech); // Remove if already highlighted
    } else {
      this.highlightedChips.add(tech); // Add if not highlighted
    }
  }

  // --- Add method to check if highlighted (optional, can do check in template) ---
  isHighlighted(tech: string): boolean {
    return this.highlightedChips.has(tech);
  }
}
