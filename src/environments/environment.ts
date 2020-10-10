// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostname : 'http://localhost:4200',
  firebase: {
    apiKey: 'AIzaSyDNqEQh_9XN-fR5BD-a1HEJkCbwzzqOP1I',
    authDomain: 'pokxfan.firebaseapp.com',
    databaseURL: 'https://pokxfan.firebaseio.com',
    projectId: 'pokxfan',
    storageBucket: 'pokxfan.appspot.com',
    messagingSenderId: '1012237369586',
    appId: '1:1012237369586:web:d337fc65499ba8790ad06b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
