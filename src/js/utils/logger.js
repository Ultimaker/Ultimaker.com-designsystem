/* eslint-disable no-caller, complexity */

const levels = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    verbose: 'verbose',
    debug: 'debug',
    silly: 'silly'
};

let _reporter = (level, message) => {
    let logFunction = null;

    switch (level) {
        case 'info':
        case 'verbose':
        case 'debug':
        case 'silly':
            logFunction = console.info;
            break;
        case 'warn':
            logFunction = console.warn;
            break;
        case 'error':
        default:
            logFunction = console.error;
            break;
    }

    if (typeof logFunction === 'function') {
        logFunction(message);
    }
};

/**
 * Utility class to log (and route) error messages, eventually to a remote logging environment
 */
class Logger {
    /**
     * Available verbosity logging levels
     * @returns {{info: string, warn: string, error: string}} Available logging levels
     */
    static get Levels() {
        return levels;
    }

    /**
     * Logs a message of a specified level
     * @param {string} caller - Source of the message
     * @param {string} message - Message to log
     * @param {string} level - Verbosity level of the message
     * @returns Nothing
     */
    static logMessage(caller, message, level = levels.info) {
        _reporter(level, `${ caller }: ${ message }`);
    }

    /**
     * Logs an exception of a specified level
     * @param {string} caller - Source of the message
     * @param {Object} exception - Exception to log
     * @param {string} level - Verbosity level of the message
     * @returns Nothing
     */
    static logException(caller, exception, level = levels.info) {
        Logger.logMessage(caller, exception.message, level);
    }

    /**
     * Overwrites the report function to inject your own
     * @param {function} reporter - Function to use for reporting
     * @returns Nothing
     */
    static setReporter(reporter) {
        _reporter = reporter;
    }
}

export default Logger;
