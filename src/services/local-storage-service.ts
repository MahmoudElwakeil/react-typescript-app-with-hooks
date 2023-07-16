export default class LocalStorageService {
    constructor() {
    }

    setLanguage(lang: string) {
        localStorage.setItem("lang", lang);
    }

    getCurrentLanguage() {
        let lang = localStorage.getItem("lang");;
        return lang ?? 'en';
    }

}