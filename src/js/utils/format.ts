import Default from '../constants/defaults';

export class Format {
    options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    locale = `${Default.language}-${Default.country.code}`;

    ISODate(date: string, locale:string = this.locale, options: object = this.options): string {
        const dateObj = new Date(date);
        return new Intl.DateTimeFormat(locale, options).format(dateObj);
    }
}
