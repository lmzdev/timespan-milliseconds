    /**
     * 
     * @returns current nanoseconds from hrtime.bigint()
     */
    export function now(): bigint {
        return process.hrtime.bigint()
    }

    /**
     * 
     * @param start start of interval in nanoseconds
     * @returns time passed since start in milliseconds, truncated to 2 decimals
     */
    export function since(start: bigint): number {
        return Number((process.hrtime.bigint() - start) / 10000n) / 100
    }

    /**
     * 
     * @param start 
     * @param end 
     * @returns time passed between start and end in milliseconds, truncated to 2 decimals
     */
    export function span(start: bigint, end: bigint): number {
        return Number((end - start) / 10000n) / 100
    }
