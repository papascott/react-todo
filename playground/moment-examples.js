var moment = require('moment');

console.log(moment().format());

//Jan 1 1970 @ 12:00am -> 0
//Jan 1 1970 @ 12:01am -> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1465748667;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
