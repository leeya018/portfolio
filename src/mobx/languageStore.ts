// stores/languageStore.ts
import { autorun, makeAutoObservable, runInAction, toJS } from "mobx";

import enTranslations from "@/locales/es/content.json";
import heTranslations from "@/locales/es/content.json";
import spTranslations from "@/locales/es/content.json";
import { create } from "mobx-persist";

// let hydrate: any;

// if (typeof window !== "undefined") {
//   hydrate = create({
//     storage: localStorage, // or sessionStorage
//     jsonify: true,
//   });
// }

class LanguageStore {
  translations: any = enTranslations;
  locale: string = "en";
  direction: string = "ltr";

  constructor() {
    // logDev({ countriesEn });
    makeAutoObservable(this);
    // this.translations = this.loadTranslations();
    // hydrate("languageStore", this).then(() => {
    //   this.translations = "sehnteirsntisnei";
    //   this.locale = "en";
    // });
  }
  setDirection(newDirection: string) {
    this.direction = newDirection;
    document.documentElement.setAttribute("dir", newDirection);
  }

  loadTranslations() {
    switch (this.locale) {
      case "en":
        this.translations = enTranslations;
        this.setDirection("ltr");
        break;
      case "es":
        this.translations = spTranslations;
        this.setDirection("ltr");
        break;
      case "he":
        this.translations = heTranslations;
        this.setDirection("rtl");
        break;
      default:
        this.translations = enTranslations;
        this.setDirection("ltr");
    }
  }

  setLocale(newLocale: string) {
    this.locale = newLocale;
    // this.loadTranslations();
  }
}
// Usage example
export const languageStore = new LanguageStore();

// autorun(() => {
//   logDev(languageStore.locale);
//   logDev(toJS(languageStore.translations));
// });
