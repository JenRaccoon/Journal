import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DailyListComponent } from './daily-list/daily-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService } from './services/diary.service';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DailyListComponent,
    DiaryDetailComponent,
    UpdateDetailsComponent,
  ],
  imports: [
    NgbPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [DiaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
