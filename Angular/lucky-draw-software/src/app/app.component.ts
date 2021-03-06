import { Component, Inject, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Tour of Heroes';
  destroy$ = new Subject();
  lang: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang(this.lang);
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.lang = res.lang;
      document.documentElement.lang = this.lang;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
