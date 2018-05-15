import Logger from 'utils/logger';

const propertyMixinFactory = function(link) {
    const mixin = {
        computed: {}
    };

    mixin.computed[link] = function() {
        try {
            if (!this.links) {
                return null;
            }

            const linkedProperty = this.links[link];

            return Array.isArray(linkedProperty) ? linkedProperty : [linkedProperty];
        } catch (e) {
            Logger.logMessage(this.name || 'propertyMixinFactory', e.message, Logger.Levels.warn);

            return null;
        }
    };

    return mixin;
};

export default propertyMixinFactory;
