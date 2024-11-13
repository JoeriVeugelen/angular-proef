import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

interface BlogItem {
  image: string;
  title: string;
  description: string;
  pageUrl: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogItems: BlogItem[] = [
    {
      image:
        'https://images.unsplash.com/photo-1662144374178-753a74fa28fb?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een obereikbare toekomstdroom? Dat hoeft helemaal niet!',
      pageUrl: 'https://www.google.be',
    },
    {
      image:
        'https://images.unsplash.com/photo-1662144374178-753a74fa28fb?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een obereikbare toekomstdroom? Dat hoeft helemaal niet!',
      pageUrl: 'https://www.google.be',
    },
    {
      image:
        'https://images.unsplash.com/photo-1662144374178-753a74fa28fb?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een obereikbare toekomstdroom? Dat hoeft helemaal niet!',
      pageUrl: 'https://www.google.be',
    },
    {
      image:
        'https://images.unsplash.com/photo-1662144374178-753a74fa28fb?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: '6 makkelijke manieren om voor een huis te sparen',
      description:
        'Een huis kopen een obereikbare toekomstdroom? Dat hoeft helemaal niet!',
      pageUrl: 'https://www.google.be',
    },
  ];

  faAnglesRight = faAnglesRight;
}
