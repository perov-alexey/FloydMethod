function Model() {

    var pathes = [];

    this.addDot = function() {
        for (var i = 0; i < pathes.length; i++) {
            pathes[i].push(Infinity);
        }
        var newRow = (new Array(pathes.length)).fill(Infinity);
        newRow.push(0);
        pathes.push(newRow);

    };

    this.setConnectionWeight = function (source, target, weight) {
        pathes[source][target] = weight;
    };

    this.getPathes = function() {
        return pathes;
    }
}

window.model = new Model();