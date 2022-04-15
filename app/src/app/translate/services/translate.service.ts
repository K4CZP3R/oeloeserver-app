import { Injectable } from '@angular/core';
import i18next from 'i18next';
import { HttpRequestService } from 'src/app/http/services/http-request.service';
import { TranslateFile } from '../models/translate-file.interface';
import { TranslateModule } from '../translate.module';

@Injectable({
  providedIn: TranslateModule,
})
export class TranslateService {
  constructor(private httpRequestService: HttpRequestService) {
    if (!i18next.isInitialized) {
      this.initializeLanguages().then((resources) => {
        i18next.init({
          lng: 'en',
          debug: true,
          resources: resources,
        });
      });
    }
  }

  async initializeLanguages(languages = ['en', 'nl']) {
    let toReturn: { [key: string]: any } = {};
    for (let language of languages) {
      let resp = await this.httpRequestService.get<TranslateFile>(
        `/assets/locale/${language}.json`
      );
      toReturn[language] = resp;
    }
    return toReturn;
  }

  setLanguage(newLanguage: string) {
    // i18next.language = newLanguage;
    i18next.changeLanguage(newLanguage);
  }
  getLanguage() {
    return i18next.language;
  }

  translate(value: string): string {
    return i18next.t(value);
  }
}
