const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&order=date&q=reactjs"
);
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "63883c5dbamshe437cc3c4aaebefp14c6bdjsn276daf966d08"
);
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);
