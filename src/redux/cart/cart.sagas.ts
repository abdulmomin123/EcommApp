import { all, call, put, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cart.actions';

function* clearCartSaga() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest('SIGN_OUT_SUCCESS', clearCartSaga);
}

export default function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
