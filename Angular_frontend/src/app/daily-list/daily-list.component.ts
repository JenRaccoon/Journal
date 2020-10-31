import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diary } from '../common/diary';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css'],
})
export class DailyListComponent implements OnInit {
  diarys: Diary[];
  id: number;
  message: string;

  constructor(private dairyService: DiaryService, private router: Router) {}

  ngOnInit(): void {
    this.listDiarys();
  }

  listDiarys() {
    this.dairyService.getDairysList().subscribe((data) => {
      this.diarys = data;
    });
  }

  ReadDiary(id) {
    this.router.navigate(['diarys', id]);
  }

  deleteDiary(id) {
    console.log(`delete ${id}`);
    this.dairyService.deleteDairy(id).subscribe((response) => {
      console.log(response);
      this.message = `刪除成功 Delete !`;
      //有成功刪除就刷新
      this.listDiarys();
    });
  }

  updateDiary(id) {
    this.router.navigate(['diarys', id]);
  }

  addDiary() {
    this.router.navigate(['updatedetail', -1]);
  }
}
