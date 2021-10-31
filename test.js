function React(width, height) {
  this.width = width;
  this.height = height;
}

React.prototype = function () {
    return this.width * this.height;
  };
