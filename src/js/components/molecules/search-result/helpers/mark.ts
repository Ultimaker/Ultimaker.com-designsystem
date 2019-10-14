import escapeStringRegexp from 'escape-string-regexp';

export default function mark(text: string, terms: string): string {
    // find individual terms split on whitespace
    const termsRE = new RegExp(`(${escapeStringRegexp(terms).split(/\s/).join('|')})`, 'gi');

    // wrap terms in <mark> tags
    return text.replace(termsRE, '<mark>$1</mark>');
}
