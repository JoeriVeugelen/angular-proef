import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://67351d555995834c8a91ed44.mockapi.io/api';

  postFeedback(rating: number, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Feedback`, {
      rating: rating,
      comment: comment,
    });
  }
}
