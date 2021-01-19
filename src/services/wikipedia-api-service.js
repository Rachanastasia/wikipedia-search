export function searchWikipediaApi(term) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=opensearch&format=json&search=${term}&origin=*`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json())

}