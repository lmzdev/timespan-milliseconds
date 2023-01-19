/**
 *
 * @returns current millis from performance.now()
 */
export declare function now(): number;
/**
 *
 * @param start start of interval
 * @returns time passed since start in milliseconds, truncated to 2 decimals
 */
export declare function since(start: number): number;
/**
 *
 * @param start
 * @param end
 * @returns time passed between start and end in milliseconds, truncated to 2 decimals
 */
export declare function span(start: number, end: number): number;
