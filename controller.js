var dotAmount = 0;

function addDot() {
    var newDot = $("<div class='connectorHolder'><div class='dot-number'>" + ++dotAmount + "</div></div>");
    $(".container").append(newDot);

    addNewEndPoint(newDot);

    jsPlumbInstance.draggable(newDot, {
        containment:true
    });
}

function addNewEndPoint(item) {
    jsPlumbInstance.addEndpoint(item, {
        isSource: true,
        isTarget: true
    });
}