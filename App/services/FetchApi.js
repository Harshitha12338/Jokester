export default function FetchApi(url, reqObj) {
  return fetch(url, reqObj)
    .then(function(res) {
      return res.json();
    })
    .catch(err => {
      alert(err.message);
    });
}
