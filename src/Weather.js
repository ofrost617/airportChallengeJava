Weather = function() {
  this.current = function() {
    var weath = Math.floor(Math.random() * 11);
    if (weath >= 6) {
      return 'stormy';
    } else {
      return 'good'
    }
  };
};
