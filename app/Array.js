// Simple compare function of two arrays
Array.prototype.equals = function(otherArray) {
  if (this.length !== otherArray.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== otherArray[i]) {
      return false;
    }
    return true;
  }
};