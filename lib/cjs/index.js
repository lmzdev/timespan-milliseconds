"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.span = exports.since = exports.now = void 0;
/**
 *
 * @returns current millis from performance.now()
 */
function now() {
    return performance.now();
}
exports.now = now;
/**
 *
 * @param start start of interval
 * @returns time passed since start in milliseconds, truncated to 2 decimals
 */
function since(start) {
    return Math.floor((performance.now() - start) * 100) / 100;
}
exports.since = since;
/**
 *
 * @param start
 * @param end
 * @returns time passed between start and end in milliseconds, truncated to 2 decimals
 */
function span(start, end) {
    return Math.floor((end - start) * 100) / 100;
}
exports.span = span;
//# sourceMappingURL=index.js.map