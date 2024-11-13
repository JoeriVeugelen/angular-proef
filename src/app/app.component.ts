import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmileyFeedbackComponent } from './smiley-feedback/smiley-feedback.component';
import { TextBlockComponent } from './text-block/text-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmileyFeedbackComponent, TextBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-proef';
}
