import deepFreeze from 'deep-freeze'
import store from './reducer'

describe('unicafe reducer', async () => {
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0,
        counter: 0,
        positive: '0.0',
        average: '0.0'
    }

    beforeEach( async () => {
        store.dispatch( { type: 'ZERO' })
    })

    it('should return a proper initial state when called with undefined state', async () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }
        store.dispatch(action)
        expect(store.getState()).toEqual(initialState)
    })

    it('good is incremented', async () => {
        const action = { type: 'GOOD' }
        deepFreeze(store)
        store.dispatch(action)
        expect(store.getState()).toEqual({
            good: 1,
            ok: 0,
            bad: 0,
            counter: 1,
            positive: '100.0',
            average: '1.0'        
        })
    })

    it('ok is incremented', async () => {
        const action = {
          type: 'OK'
        }
        deepFreeze(store)
        store.dispatch(action)
        expect(store.getState()).toEqual({
            good: 0,
            ok: 1,
            bad: 0,
            counter: 1,
            positive: '0.0',
            average: '0.0'        
        })
    })

    it('bad is incremented', async () => {
        const action = {
          type: 'BAD'
        }
        deepFreeze(store)
        store.dispatch(action)
        expect(store.getState()).toEqual({
            good: 0,
            ok: 0,
            bad: 1,
            counter: 1,
            positive: '0.0',
            average: '-1.0'       
        })
    })

    it('bad is incremented twice', async () => {
        const action = {
          type: 'BAD'
        }
        deepFreeze(store)
        store.dispatch(action)
        store.dispatch(action)
        expect(store.getState()).toEqual({
            good: 0,
            ok: 0,
            bad: 2,
            counter: 2,
            positive: '0.0',
            average: '-1.0'        
        })
    })

    it('zero', async () => {
        const action = {
          type: 'ZERO'
        }
        deepFreeze(store)
        store.dispatch(action)
        expect(store.getState()).toEqual({
            good: 0,
            ok: 0,
            bad: 0,
            counter: 0,
            positive: '0.0',
            average: '0.0'
        })
    })

})