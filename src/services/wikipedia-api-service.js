export function searchWikipediaApi(term) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=opensearch&format=json&search=${term}&limit=20&origin=*`)
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
}

export function getWikipediaArticleDetails(term) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=query&format=json&search=${term}&origin=*`)
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
}