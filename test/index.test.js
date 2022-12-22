const {now, since, span} = require('timespan-milliseconds')
require('mocha')
const { assert } = require('chai')

async function waitFor(waitForMs) {
    return new Promise((arg) => setTimeout(arg, waitForMs));
}

describe('Test now()', () => {
    const start = now()
    it('should a value greater zero', () => {
        assert.isAbove(Number(start), 0)
    })
})

describe('Test since()', () => {
    const start = now()
    it('should return a value greater zero', async() => {
        waitFor(2)
        assert.isAbove(since(start), 0)
    })
    it('should return correct milliseconds when waiting', async () => {
        const q = now()
        const waitForMs = 10
        const p = performance.now()
        await waitFor(waitForMs)
        assert.equal(Math.round(since(q)), Math.round((performance.now() - p)))
    })
})

describe('Test span()', () => {
    it('shoud return a value greater zero', async () => {
        const start = now()
        await waitFor(2)
        const until = now()
        await waitFor(2)
        assert.isAbove(span(start, until), 0)
    })
})
