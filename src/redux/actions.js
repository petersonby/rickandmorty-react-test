import { HIDE_LOADER, SHOW_LOADER, FETCH_CHARACTERS, REQUEST_CHARACTERS, PAGES_NUM } from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function requestCharacters(page) {
  return {
    type: REQUEST_CHARACTERS,
    payload: page
  }
}

export function fetchCharacters(characters) {
  return {
    type: FETCH_CHARACTERS,
    payload: characters
  }
}

export function setPagesNum(pagesNum) {
  return {
    type: PAGES_NUM,
    payload: pagesNum
  }
}