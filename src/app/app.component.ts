import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngx-translate-test1'

  constructor(private translate: TranslateService) {
    if (window.navigator.languages && window.navigator.languages[0] && window.navigator.languages[0].includes("de"))
      translate.setDefaultLang('de')
    else
      translate.setDefaultLang('en')
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
