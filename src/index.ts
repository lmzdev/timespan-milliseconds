    /**
     * 
     * @returns current millis from performance.now() 
     */
    export function now(): number {
        return performance.now()
    }

    /**
     * 
     * @param start start of interval
     * @returns time passed since start in milliseconds, truncated to 2 decimals
     */
    export function since(start: number): number {
        return Math.floor((performance.now() - start) * 100) / 100
    }

    /**
     * 
     * @param start 
     * @param end 
     * @returns time passed between start and end in milliseconds, truncated to 2 decimals
     */
    export function span(start: number, end: number): number {
        return Math.floor((end - start) * 100) / 100
    }
