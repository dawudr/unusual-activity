// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCLNfUWpTAPVky_NZVODh6oUPyEz3Jdcpg",
    authDomain: "unusual-activity.firebaseapp.com",
    databaseURL: "https://unusual-activity.firebaseio.com",
    projectId: "unusual-activity",
    storageBucket: "unusual-activity.appspot.com",
    messagingSenderId: "742942868879"
  },
  purchasedDB: 'https://stocks-dd1e5.firebaseio.com/purchase.json',  // restful database to save purchased list from google firebase
  favoriteDB: 'https://stocks-dd1e5.firebaseio.com/favorite.json', // restful database to save favorite list from google firebase
  configDB: 'https://stocks-dd1e5.firebaseio.com/config.json',// restful database to save config  from google firebase
  apiKey: 1537   // api key from  https://www.alphavantage.co
};
