export class UniqId {
    static install(vue) {
        Object.defineProperty(vue.prototype, 'uniqId', {
            configurable: true,
            get: function uniqId() {
                if (process.env.BABEL_ENV) {
                    return 'static_id';
                }

                return this._uid;
            },
        });
    }
}
