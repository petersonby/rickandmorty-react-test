import {call, put, takeEvery, select} from 'redux-saga/effects';
import { hideLoader, showLoader, fetchCharacters, setPagesNum } from './actions';
import { REQUEST_CHARACTERS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_CHARACTERS, sagaWorker);
}

const getPage = (state) => state.page;
const getPagesNum = (state) => state.pagesNum;

function* sagaWorker() {
  if(!!getPagesNum && getPagesNum <= getPage) {
    return;
  }

  try {
    yield put(showLoader());

    let page = yield select(getPage);
    let pagesNum = yield select(getPagesNum);
    const response = yield call(() => fetchPosts(page));
  
    if(!pagesNum) {
      yield put(setPagesNum(response.info.pages));
    }

    yield put(fetchCharacters(response.results));
  
    yield put(hideLoader());
  } catch (error) {
    yield put(hideLoader());
  }
}

async function fetchPosts(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  let json = await response.json();

  return json;
}