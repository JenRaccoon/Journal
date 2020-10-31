import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Diary } from '../common/diary';
@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private baseUrl =
    'http://jennifermysqldiary-dev.eba-9zcpuici.us-east-1.elasticbeanstalk.com/jpa/diarys';

  constructor(private httpClient: HttpClient) {}

  getDairysList() {
    return this.httpClient.get<Diary[]>(this.baseUrl);
  }

  deleteDairy(id) {
    return this.httpClient.delete(this.baseUrl + `/${id}`);
  }
  retrieveDairy(id) {
    return this.httpClient.get<Diary>(this.baseUrl + `/${id}`);
  }

  updateDiary(id, diary) {
    return this.httpClient.put(this.baseUrl + `/${id}`, diary);
  }
  createDiary(diary) {
    return this.httpClient.post(this.baseUrl, diary);
  }
}
