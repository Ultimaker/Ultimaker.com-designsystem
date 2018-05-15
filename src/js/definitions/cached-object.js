const _cachedObject = Symbol('cachedObject');

class CachedObject {
    constructor(objectToCache, cacheTime = 600) {
        this[_cachedObject] = objectToCache;
        this._cachedUntil = Date.now() + (cacheTime * 1000);
    }

    get cachedObject() {
        if (this._cachedUntil < Date.now()) {
            return null;
        }

        return this[_cachedObject];
    }
}

export default CachedObject;
