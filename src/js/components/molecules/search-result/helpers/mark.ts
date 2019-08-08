/** @format */

export default function mark(text: string, terms: string): string {
    // find individual terms split on whitespace
    const termsRE = new RegExp(`(${terms.split(/\s/).join('|')})`, 'gi');

    // wrap terms in <mark> tags
    return text.replace(termsRE, '<mark>$1</mark>');
}
