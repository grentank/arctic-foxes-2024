const tracks = [
  {
    title: 'Stairway to Heaven', genre: 'rock', duration: 210, artist: 'Led Zeppelin', album: 'Led Zeppelin IV', year: 1971,
  },
  {
    title: 'Bohemian Rhapsody', genre: 'rock', duration: 355, artist: 'Queen', album: 'A Night at the Opera', year: 1975,
  },
  {
    title: 'Hotel California', genre: 'rock', duration: 312, artist: 'Eagles', album: 'Hotel California', year: 1976,
  },
  {
    title: 'The Dark Side of the Moon', genre: 'rock', duration: 323, artist: 'Pink Floyd', album: 'The Dark Side of the Moon', year: 1973,
  },
  {
    title: 'In Da Club', genre: 'rap', duration: 190, artist: 'Eminem', album: 'The Marshall Mathers LP', year: 1983,
  },
  {
    title: 'Dangerous', genre: 'rock', duration: 275, artist: 'Pink Floyd', album: 'The Wall', year: 1979,
  },
  {
    title: 'The Wall', genre: 'rock', duration: 442, artist: 'Pink Floyd', album: 'The Wall', year: 1979,
  },
  {
    title: 'The Rain', genre: 'rap', duration: 200, artist: 'DMX', album: 'DMX', year: 2002,
  },
];

// console.log(tracks.every(function (oneTrack) {
//     if(oneTrack.genre === 'rock') return true;
//     else return false;
// }));

function trackGenreIsRock(oneTrack) {
//   return oneTrack.genre === 'rock';
  if (oneTrack.genre === 'rock') return true;
  return false;
}

// console.log(tracks.every(trackGenreIsRock));
// console.log(tracks.some(trackGenreIsRock));
// console.log(tracks
//   .filter(trackGenreIsRock)
//   .every(trackGenreIsRock));
// console.log(tracks.every((track) => track.genre === 'rock'));
// console.log(tracks.filter((track) => track.genre === 'rap'));
// console.log(tracks
//   .filter((track, index) => track.duration % (index + 1) === 0));

// console.log(tracks.map((track, index) => ({
//   ...track,
//   liked: index % 2 === 0,
// })));
// console.log(tracks.map((track) => track.title));
// tracks.sort((track1, track2) => -(track2.year - track1.year));
// console.log(tracks.map((track) => track.title));

// console.log(tracks.reduce((acc, track) => {
//   const { genre } = track;
//   //   console.log(acc, track.title, track.genre);
//   if (genre in acc) {
//     acc[genre]++;
//   } else acc[genre] = 1;
//   return acc;
// }, {}));

// console.log(tracks[2]);
// console.log(tracks.forEach((track) => {
//   return track.year += 1;
// }));
// console.log(tracks[2]);

// ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ МАССИВА
// const tracksCopy = tracks.slice();
// const tracksCopy = tracks.map((e) => e);
// const tracksCopy = [...tracks];

// ГЛУБОКОЕ КОПИРОВАНИЕ МАССИВА
// const tracksCopy = JSON.parse(JSON.stringify(tracks));
// console.log(JSON.stringify(tracks));
// // tracks.pop();
// // console.log(tracksCopy.length, tracks.length);
// tracks[0].title = 'NO TITLE AHAHAHA!';
// console.log(tracksCopy[0].title, tracks[0].title);

function myFind(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const res = callback(element);
    if (res) return element;
  }
}
console.log(tracks.find((track) => track.title.length >= 10));
console.log(myFind(tracks, (track) => track.title.length >= 10));
