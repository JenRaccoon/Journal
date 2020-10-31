import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyListComponent } from './daily-list/daily-list.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  { path: 'updatedetail/:id', component: UpdateDetailsComponent },
  { path: 'diarys/:id', component: DiaryDetailComponent },
  { path: 'diary', component: DailyListComponent },
  { path: '', component: DailyListComponent },
  { path: '**', component: DailyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
