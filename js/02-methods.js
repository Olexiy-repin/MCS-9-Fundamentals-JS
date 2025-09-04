/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
TODO: - addTrack(newTrack);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 4,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName(newName) {
    if (typeof newName === 'string') {
      this.name = newName;
    }
  },

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  addTrack(newTrack) {
    if (typeof newTrack === 'string') {
      this.tracks.push(newTrack);
    }
  },
};

console.log('playlist:', playlist);

playlist.changeName('My powerful playlist');
playlist.updateRating(5);
playlist.addTrack('track-4');

console.log('playlist:', playlist);
