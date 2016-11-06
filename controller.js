var dotAmount = 0;

$(document).ready(function() {
    var preventNonDigits = function(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    };
    $("#firstTop").on("keypress", preventNonDigits);
    $("#secondTop").on("keypress", preventNonDigits);
});

function addDot() {
    var newDot = $("<div class='connectorHolder'><div class='dot-number'>" + ++dotAmount + "</div></div>");
    $(".container").append(newDot);

    addNewEndpoints(newDot);

    newDot.on("mouseover", function() {
        $(".jsplumb-endpoint").addClass("jsplumb-hover");
    });

    newDot.on("mouseout", function() {
        $(".jsplumb-endpoint").removeClass("jsplumb-hover");
    });

    jsPlumbInstance.draggable(newDot, {
        containment:true
    });

    window.model.addDot();
}

function addNewEndpoints(item) {
    var endpointCommonOptions = {
        isSource: true,
        isTarget: true
    };
    jsPlumbInstance.addEndpoint(item, {anchor: "Top"}, endpointCommonOptions);
    jsPlumbInstance.addEndpoint(item, {anchor: "Bottom"}, endpointCommonOptions);
    jsPlumbInstance.addEndpoint(item, {anchor: "Left"}, endpointCommonOptions);
    jsPlumbInstance.addEndpoint(item, {anchor: "Right"}, endpointCommonOptions);
}