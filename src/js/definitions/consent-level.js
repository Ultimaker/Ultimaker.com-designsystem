import Defaults from 'constants/defaults';

class ConsentLevel {
    /**
     * @param {string|number} [bitmask] - default value
     */
    constructor(bitmask) {
        if (typeof bitmask === 'string') {
            this.bitmask = parseInt(bitmask, 2);
        } else if (!isNaN(bitmask)) {
            this.bitmask = bitmask;
        } else {
            this.bitmask = Defaults.consentLevel;
        }

        if (isNaN(this.bitmask)) {
            this.bitmask = Defaults.consentLevel;
        }
    }

    /**
     * @returns {consentLevels|{functional, analytics, personalization, tracking}} - Possible consent levels
     * @constructor
     */
    static get Levels() {
        return Defaults.consentLevels;
    }

    /**
     * @returns {string} - Bitmask of the consult level
     */
    toString() {
        return this.bitmask.toString(2);
    }

    /**
     * @returns {number} - Numerical presentation of the consult level
     */
    level() {
        return this.bitmask;
    }

    /**
     * Check if a consult level has been set
     * @param {number} level - Level to test for
     * @returns {boolean} Level has been set
     */
    has(level) {
        return !!(this.bitmask & level);
    }

    /**
     * Set a specific level
     * @param {number} level - Level to set
     * @returns {null} - Nothing
     */
    set(level) {
        this.bitmask = this.bitmask | level;
    }

    /**
     * Unset a specific level
     * @param {number} level - Level to set
     * @returns {null} - Nothing
     */
    unset(level) {
        this.bitmask = this.bitmask & ~level;
    }
}

export default ConsentLevel;
