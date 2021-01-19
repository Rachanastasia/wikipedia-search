export function searchWikipediaApi(term) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}?action=parse&format=json&page=${term}&props=text&origin=*`)
    .then(res => {
      console.log('RESPONSE FROM REQUEST', res)
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })

}