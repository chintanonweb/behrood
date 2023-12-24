import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    // Get the currently selected language on component initialization
    this.selectedLanguage = this.translate.currentLang || 'en';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
  }
}
