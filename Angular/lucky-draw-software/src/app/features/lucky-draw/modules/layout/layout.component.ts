import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lucky-draw-layout',
  host: { class: 'lucky-theme' },
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  destroy$ = new Subject();
  lang: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang(this.lang);
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.lang = res.lang;
      document.documentElement.lang = this.lang;
    });
    document.documentElement.className = 'lucky-draw';
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
