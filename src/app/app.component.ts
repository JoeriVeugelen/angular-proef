import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmileyFeedbackComponent } from './smiley-feedback/smiley-feedback.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SmileyFeedbackComponent,
    TextBlockComponent,
    BlogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-proef';
}
