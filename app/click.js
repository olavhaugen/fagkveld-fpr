window.onload = function () {
  'use strict';
  var button = document.querySelector('#theButton');
  var display = document.querySelector('#display');

  var clickStream = Bacon.fromEventTarget(button, 'click');
  var clickCountStream = clickStream
  .bufferWithTime(300)
  .map(function (events) {
  	return events.length;
  });
  var singleClickStream = clickCountStream.filter(function (count) {
  	return count === 1; 
  });
  var doubleClickStream = clickCountStream.filter(function (count) {
  	return count === 2;
  });
  var multiClickStream = clickCountStream.filter(function (count) {
  	return count > 2;
  });
  singleClickStream.onValue(function (e) {
  	display.textContent = 'You clicked once!';
  });
  doubleClickStream.onValue(function (e) {
  	display.textContent = 'You doubleclicked!';
  });
  multiClickStream.onValue(function (e) {
  	display.textContent = 'You clicked ' + e + ' times';
  });
};