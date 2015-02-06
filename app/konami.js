window.onload = function () {
  'use strict';
  
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var konamiStream = Bacon.fromEventTarget(document.body, 'keydown')
  .map('.keyCode')
  .slidingWindow(konami.length)		
  .flatMap(function (keyCodes) {
    return keyCodes.equals(konami) ?  Bacon.once(true) : Bacon.never();
  });
  
  konamiStream.onValue(function (isKonami) {
    document.body.innerHTML = '<h1>KONAMI!!!!</h1>'
    setTimeout(function () {
      document.body.innerHTML = '';
    }, 2000);
  });
  
};