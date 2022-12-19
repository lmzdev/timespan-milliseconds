/**
 *
 * @returns current nanoseconds from hrtime.bigint()
 */
export declare function now(): bigint;
/**
 *
 * @param start start of interval in nanoseconds
 * @returns time passed since start in milliseconds, truncated to 2 decimals
 */
export declare function since(start: bigint): number;
/**
 *
 * @param start
 * @param end
 * @returns time passed between start and end in milliseconds, truncated to 2 decimals
 */
export declare function span(start: bigint, end: bigint): number;
