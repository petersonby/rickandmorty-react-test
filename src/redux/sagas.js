import {call, put, takeEvery, select, takeLatest} from 'redux-saga/effects';
import { hideLoader, showLoader, fetchCharacters, fetchSingleCharacter, setPagesNum, incrementPage } from './actions';
import { REQUEST_CHARACTERS, REQUEST_SINGLE_CHARACTER } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_CHARACTERS, sagaWorker);
  yield takeLatest(REQUEST_SINGLE_CHARACTER, sagaSingleWorker);
}

const getPage = (state) => state.page;
const getPagesNum = (state) => state.pagesNum;

function* sagaWorker() {
  let page = yield select(getPage);
  let pagesNum = yield select(getPagesNum);

  if(!!pagesNum && pagesNum < page) {
    return true;
  }

  try {
    yield put(showLoader());

    const response = yield call(() => fetchPosts(page));
  
    if(!pagesNum) {
      yield put(setPagesNum(response.info.pages));
    }

    yield put(fetchCharacters(response.results));

    yield put(incrementPage());
  
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

function* sagaSingleWorker({payload}) {
  try {
    const response = yield call(() => fetchPost(payload));
    yield put(fetchSingleCharacter(response));

  } catch (error) {
  }
}

async function fetchPost(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  let json = await response.json();

  return json;
}