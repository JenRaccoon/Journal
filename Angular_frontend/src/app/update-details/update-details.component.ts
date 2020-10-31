import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from '../common/diary';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css'],
})
export class UpdateDetailsComponent implements OnInit {
  id: number;
  mood: string;
  dateCreated: Date;
  title: string;
  description: string;
  dairy: Diary;
  constructor(
    private diaryService: DiaryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.mood = this.route.snapshot.params['mood'];
    this.dateCreated = this.route.snapshot.params['dateCreated'];
    this.title = this.route.snapshot.params['title'];
    this.description = this.route.snapshot.params['description'];
    // this.dairy = new Diary(this.id, new Date(), '', '', '');
    this.dairy = new Diary(
      this.id,
      this.dateCreated,
      this.mood,
      this.title,
      this.description
    );

    if (this.id != -1) {
      this.diaryService
        .retrieveDairy(this.id)
        .subscribe((data) => (this.dairy = data));
      console.log(this.id, this.dairy);
    }
  }

  saveDiary() {
    if (this.id === -1) {
      this.diaryService.createDiary(this.dairy).subscribe((data) => {
        console.log(data);
        this.router.navigate(['diary']);
      });
    } else {
      this.diaryService.updateDiary(this.id, this.dairy).subscribe((data) => {
        console.log(data);
        this.router.navigate(['diary']);
      });
    }
  }
}
