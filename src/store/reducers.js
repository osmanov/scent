import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => combineReducers({
  location: locationReducer,
  form: formReducer,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  // eslint-disable-next-line no-param-reassign
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

