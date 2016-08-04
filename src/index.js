import preact from 'preact';
import React from 'preact-compat';
import {connect} from 'react-redux';
import createAll from './createAll';

React.h = preact.h;

const isNative =
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.product &&
  window.navigator.product === 'ReactNative';

export const {
  actionTypes,
  addArrayValue,
  autofill,
  autofillWithKey,
  blur,
  change,
  changeWithKey,
  destroy,
  focus,
  reducer,
  reduxForm,
  removeArrayValue,
  getValues,
  initialize,
  initializeWithKey,
  propTypes,
  reset,
  startAsyncValidation,
  startSubmit,
  stopAsyncValidation,
  stopSubmit,
  swapArrayValues,
  touch,
  touchWithKey,
  untouch,
  untouchWithKey
} = createAll(isNative, React, connect);
