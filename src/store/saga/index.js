import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import ImageType from '../../features/getimage/getimage.types';
import { fetchDog, fetchDogErrorUrl } from '../api';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* rootSaga() {
  yield takeEvery(ImageType.API_CALL_REQUEST, fetchImageDog);
  yield takeEvery(ImageType.API_CALL_REQUEST_ERROR, fetchDogImageError)
}

// worker saga: makes the api call when watcher saga sees the action
function* fetchImageDog() {
  try {
    const response = yield call(fetchDog);
    const urlImage = response.data.message;
    console.log(urlImage);

    // dispatch a success action to the store with the new dog
    yield put({ type: ImageType.API_CALL_SUCCESS, url: urlImage });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: ImageType.API_CALL_FAILURE, error: error });
  }
};

function* fetchDogImageError() {
  try {
    const response = yield call(fetchDogErrorUrl);
    const urlImage = response.data.message;
    console.log(response);

    // dispatch a success action to the store with the new dog
    yield put({ type: ImageType.API_CALL_SUCCESS, url: urlImage });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log(error);
    yield put({ type: ImageType.API_CALL_FAILURE, error: 'Server error: ' + error });
  }
};