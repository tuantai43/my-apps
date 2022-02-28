import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {LanguageModel} from '../../language.model';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  languageList: LanguageModel[] = [
    new LanguageModel('en', 'English', '/assets/images/flag/en.svg'),
    new LanguageModel('vi', 'Việt', '/assets/images/flag/vi.svg'),
    new LanguageModel('ja', '日本', '/assets/images/flag/ja.svg'),
    new LanguageModel('ko', '한국', '/assets/images/flag/ko.svg'),
    new LanguageModel('zh', '中国', '/assets/images/flag/zh.svg'),
    new LanguageModel('ar', 'عربي', '/assets/images/flag/ar.png'),
    new LanguageModel('th', 'ประเทศไทย', '/assets/images/flag/th.svg'),
    new LanguageModel('ru', 'Россия', '/assets/images/flag/ru.svg'),
    new LanguageModel('fr', 'Français', '/assets/images/flag/fr.svg'),
    new LanguageModel('de', 'Deutsch', '/assets/images/flag/de.svg'),
    new LanguageModel('tr', 'Türkçe', '/assets/images/flag/tr.png'),
  ]

  currentLang = 'en';

  constructor(public dialogRef: MatDialogRef<LanguageListComponent>, public translate: TranslateService) {
  }

  ngOnInit() {
    console.log(this.translate.defaultLang)
    this.currentLang = this.translate.currentLang;
  }

  switchLanguage(key: string) {
    this.translate.use(key);
    this.currentLang = key;
    sessionStorage.setItem('language', this.currentLang);
    this.dialogRef.close();
  }

}
