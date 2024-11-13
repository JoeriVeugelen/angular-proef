import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMeh,
  faSmile,
  faFaceLaugh,
  faFaceLaughBeam,
  faFaceGrinHearts,
} from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

interface FeedbackFace {
  icon: any;
  backgroundColor: string;
  iconColor: string;
}

@Component({
  selector: 'app-smiley-feedback',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './smiley-feedback.component.html',
  styleUrls: ['./smiley-feedback.component.scss'],
})
export class SmileyFeedbackComponent {
  @Input() question: string = 'Hoe eenvoudig kon je je huis online plaatsen?';

  faces: FeedbackFace[] = [
    { icon: faMeh, backgroundColor: '#FEF8F8', iconColor: '#F65455' },
    { icon: faSmile, backgroundColor: '#FDF1D2', iconColor: '#F9AF05' },
    { icon: faFaceLaugh, backgroundColor: '#FCFFD9', iconColor: '#FBDE27' },
    { icon: faFaceLaughBeam, backgroundColor: '#A1E36D', iconColor: '#FFFFFF' },
    {
      icon: faFaceGrinHearts,
      backgroundColor: '#D7FFEB',
      iconColor: '#3FD472',
    },
  ];

  selectedFace: FeedbackFace | null = null;

  selectFace(face: FeedbackFace): void {
    this.selectedFace = face;
  }
}
