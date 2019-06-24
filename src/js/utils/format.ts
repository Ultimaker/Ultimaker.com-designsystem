import Default from '../constants/defaults';

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
