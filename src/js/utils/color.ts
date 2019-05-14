export class Color {
    static lightness(color : string) : Number {
        const white = 765;
        const expression = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/;
        const matches = color && color.match ? color.match(expression) : false;

        if (!matches || matches.length !== 4) { return 0; }

        return Math.round((parseInt(matches[1], 16) +
            parseInt(matches[2], 16) +
            parseInt(matches[3], 16)) / white * 100) / 100;
    }
}
