import { INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_ALL_COUNTER } from './actionTypes'

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER
}
interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER
}
interface ClearAllCounterAction {
  type: typeof CLEAR_ALL_COUNTER
}
export type CounterActionTypes = IncrementCounterAction | DecrementCounterAction | ClearAllCounterAction

export interface SystemState {
  count: {
    value: number
  }
}
