Airport = function() {
    this.hanger = [];
    this.landPlane = function(plane) {
        // return false if hanger is full / plane already landed
        this.hanger.push(plane);
        return true;
    };
    this.takeoffPlane = function(plane) {
        // return false if hanger is empty / plane already taken off / not in there
        var index = this.hanger.indexOf(plane);
        if (index > -1) {
            this.hanger.splice(index, 1);
            return true;
        }
    };
};

