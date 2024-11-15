import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {
  faMeh,
  faSmile,
  faFaceLaugh,
  faFaceLaughBeam,
  faFaceGrinHearts,
} from '@fortawesome/free-regular-svg-icons';
import { ApiService } from '../api.service';

interface FeedbackFace {
  icon: any;
  backgroundColor: string;
  iconColor: string;
  rating: number;
}

@Component({
  selector: 'app-smiley-feedback',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './smiley-feedback.component.html',
  styleUrls: ['./smiley-feedback.component.scss'],
})
export class SmileyFeedbackComponent implements OnInit {
  @Input() question: string = 'Hoe eenvoudig kon je je huis online plaatsen?';

  faces: FeedbackFace[] = [
    {
      icon: faMeh,
      backgroundColor: '#FEF8F8',
      iconColor: '#F65455',
      rating: 1,
    },
    {
      icon: faSmile,
      backgroundColor: '#FDF1D2',
      iconColor: '#F9AF05',
      rating: 2,
    },
    {
      icon: faFaceLaugh,
      backgroundColor: '#FCFFD9',
      iconColor: '#FBDE27',
      rating: 3,
    },
    {
      icon: faFaceLaughBeam,
      backgroundColor: '#A1E36D',
      iconColor: '#FFFFFF',
      rating: 4,
    },
    {
      icon: faFaceGrinHearts,
      backgroundColor: '#D7FFEB',
      iconColor: '#3FD472',
      rating: 5,
    },
  ];

  selectedFace: FeedbackFace | null = null;
  feedbackForm: FormGroup;
  showError: boolean = false;
  formSubmittedSuccessfully: boolean = false;

  constructor(private apiService: ApiService) {
    this.feedbackForm = new FormGroup({
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.feedbackForm.get('comment')?.valueChanges.subscribe((value) => {
      this.onCommentChange(value);
    });
  }

  selectFace(face: FeedbackFace): void {
    if (this.selectedFace === face) {
      this.selectedFace = null;
      this.feedbackForm.reset();
    } else {
      this.selectedFace = face;
    }
    this.showError = false;
    this.formSubmittedSuccessfully = false;
  }

  isFaceSelected(face: FeedbackFace): boolean {
    return this.selectedFace === face;
  }

  onSubmit(): void {
    const comment = this.feedbackForm.get('comment')?.value;
    if (!comment || comment.trim() === '') {
      this.showError = true;
      return;
    }

    if (this.selectedFace) {
      const feedback = {
        rating: this.selectedFace.rating,
        comment: comment,
      };
      console.log('Sending feedback to API...', feedback);
      this.apiService
        .postFeedback(feedback.rating, feedback.comment)
        .subscribe({
          next: (response) => {
            console.log('Feedback submitted successfully:', response);
            this.resetForm();
            this.formSubmittedSuccessfully = true;
          },
          error: (error) => {
            console.error('Error submitting feedback:', error);
          },
        });
    }
  }

  onCommentChange(value: string): void {
    this.showError = false;
  }

  private resetForm(): void {
    this.feedbackForm.reset();
    this.selectedFace = null;
    this.showError = false;
  }
}
