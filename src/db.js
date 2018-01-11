import firebase from 'firebase';

export default firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com',
}).database();
