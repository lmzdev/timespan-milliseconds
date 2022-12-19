"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.span = exports.since = exports.now = void 0;
/**
 *
 * @returns current nanoseconds from hrtime.bigint()
 */
function now() {
    return process.hrtime.bigint();
}
exports.now = now;
/**
 *
 * @param start start of interval in nanoseconds
 * @returns time passed since start in milliseconds, truncated to 2 decimals
 */
function since(start) {
    return Number((process.hrtime.bigint() - start) / 10000n) / 100;
}
exports.since = since;
/**
 *
 * @param start
 * @param end
 * @returns time passed between start and end in milliseconds, truncated to 2 decimals
 */
function span(start, end) {
    return Number((end - start) / 10000n) / 100;
}
exports.span = span;
//export const TimespanMilliseconds = {now, since, span}
//# sourceMappingURL=index.js.map