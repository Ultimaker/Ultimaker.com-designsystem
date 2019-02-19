export class UniqId {
    static install(vue) {
        Object.defineProperty(vue.prototype, 'uniqId', {
            configurable: true,
            get: function uniqId() {
                return this._uid;
            },
        });
    }
}
