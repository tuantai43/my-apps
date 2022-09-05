import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  destroy$ = new Subject();
  openSidebar = false;
  lang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang(this.lang);
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.lang = res.lang;
      document.documentElement.lang = this.lang;
    });
    document.documentElement.className = 'fa-management';
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
