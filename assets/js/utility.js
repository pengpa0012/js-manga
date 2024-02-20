

export function fetchData (path, args = "") {
  return fetch(`${API_URL}${path}${args}`, {
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': HOST
    }
  })
  .then(res => res.json())
  .then(data => data.data)
}