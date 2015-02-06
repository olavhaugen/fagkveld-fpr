window.onload = function() {
  'use strict';
  var draggable = document.querySelector('#draggable');
  var mousedown = Bacon.fromEventTarget(draggable, 'mousedown');
  var mouseup = Bacon.fromEventTarget(draggable, 'mouseup');
  var mousemove = Bacon.fromEventTarget(draggable, 'mousemove');
  var mousedrag = mousedown.flatMap(function(md) {
    var startX = md.offsetX,
    startY = md.offsetY;
    return mousemove.map(function(mm) {
      return {
        left: mm.clientX - startX,
        top: mm.clientY - startY
      };
    }).takeUntil(mouseup);
  });

  mousedrag.onValue(function(pos) {
    draggable.style.top = pos.top + 'px';
    draggable.style.left = pos.left + 'px';
  });
};