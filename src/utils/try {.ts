try {
  const response = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '63883c5dbamshe437cc3c4aaebefp14c6bdjsn276daf966d08',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}