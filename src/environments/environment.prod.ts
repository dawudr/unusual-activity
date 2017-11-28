export const environment = {
  production: true,
  purchasedDB: 'https://stocks-dd1e5.firebaseio.com/purchase.json',  // restful database to save purchased list from google firebase
  favoriteDB: 'https://stocks-dd1e5.firebaseio.com/favorite.json', // restful database to save favorite list from google firebase
  configDB: 'https://stocks-dd1e5.firebaseio.com/config.json',// restful database to save config  from google firebase
  apiKey: 1537,   // api key from  https://www.alphavantage.co
  firebase: {
    apiKey: "AIzaSyCLNfUWpTAPVky_NZVODh6oUPyEz3Jdcpg",
    authDomain: "unusual-activity.firebaseapp.com",
    databaseURL: "https://unusual-activity.firebaseio.com",
    projectId: "unusual-activity",
    storageBucket: "unusual-activity.appspot.com",
    messagingSenderId: "742942868879"
  }
};
