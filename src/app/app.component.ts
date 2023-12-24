import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'behrood';
  constructor(private wowService: NgwWowService, private translate: TranslateService) {
    this.wowService.init();
    this.translate.setDefaultLang('en'); // Set default language
  }
}
