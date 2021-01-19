export function searchWikipediaApi(term) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=opensearch&format=json&search=${term}&limit=20&origin=*`)
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    });
};

export function getWikipediaArticleDetails(title) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=query&format=json&titles=${title}&prop=description|pageviews&origin=*`)
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    });
};