import v5 from 'uuid';

export default function (): string {
    if (process.env.BABEL_ENV) {
        return 'static';
    }
    return v5();
}
