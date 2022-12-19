/**
 *
 * @returns current nanoseconds from hrtime.bigint()
 */
export function now() {
    return process.hrtime.bigint();
}
/**
 *
 * @param start start of interval in nanoseconds
 * @returns time passed since start in milliseconds, truncated to 2 decimals
 */
export function since(start) {
    return Number((process.hrtime.bigint() - start) / 10000n) / 100;
}
/**
 *
 * @param start
 * @param end
 * @returns time passed between start and end in milliseconds, truncated to 2 decimals
 */
export function span(start, end) {
    return Number((end - start) / 10000n) / 100;
}
//export const TimespanMilliseconds = {now, since, span}
//# sourceMappingURL=index.js.map