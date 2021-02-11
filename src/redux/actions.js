import { HIDE_LOADER, SHOW_LOADER, FETCH_CHARACTERS, REQUEST_CHARACTERS, PAGES_NUM, INCREMENT_NUM, FETCH_SINGLE_CHARACTER, REQUEST_SINGLE_CHARACTER } from "./types";

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

export function requestCharacters() {
  return {
    type: REQUEST_CHARACTERS
  }
}

export function incrementPage() {
  return {
    type: INCREMENT_NUM
  }
}

export function fetchCharacters(characters) {
  return {
    type: FETCH_CHARACTERS,
    payload: characters
  }
}

export function requestSingleCharacter(id) {
  return {
    type: REQUEST_SINGLE_CHARACTER,
    payload: id
  }
}

export function fetchSingleCharacter(character) {
  return {
    type: FETCH_SINGLE_CHARACTER,
    payload: character
  }
}

export function setPagesNum(pagesNum) {
  return {
    type: PAGES_NUM,
    payload: pagesNum
  }
}