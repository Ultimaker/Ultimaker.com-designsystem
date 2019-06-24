import Default from '../constants/defaults';

// Eventualy the locale will be passed down 
// eg: publishedDate {
//      date: '24-05-2019',
//      locale: 'nl_NL',
// }
export class Format {
    static options: object = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    static locale: string = `${Default.language}-${Default.country.code}`;

    static ISODate(date: string, locale:string = this.locale, options: object = this.options): string {
        const dateObj = new Date(date);
        return new Intl.DateTimeFormat(locale, options).format(dateObj);
    }
}
