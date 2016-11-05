jsPlumb.ready(function() {
    window.jsPlumbInstance = jsPlumb.getInstance({
        Container: ".container",
        Connector: "Straight",
        DragOptions: { cursor: 'pointer', zIndex: 2000 },
        Endpoint: ["Dot", {radius: 5}],
        ConnectionOverlays: [
            ["Arrow", {location: 1}],
            ["Custom", {
                create: function(component) {
                    var label = $("<input size='1'>");
                    label.on("keyup", function() {
                        this.style.width = ((this.value.length || 1) * 7) + 'px';
                    });
                    label.keyup();
                    return label;
                }
            }]
        ]
    });

    jsPlumbInstance.bind("connectionDrag", function() {
        $(".jsplumb-endpoint").addClass("jsplumb-connection-in-progress");
    });

    jsPlumbInstance.bind("connection", function() {
        $(".jsplumb-endpoint").removeClass("jsplumb-connection-in-progress");
    });

    jsPlumbInstance.bind("connectionAborted", function() {
        $(".jsplumb-endpoint").removeClass("jsplumb-connection-in-progress");
    });

    jsPlumbInstance.bind("connectionDetached", function() {
        $(".jsplumb-endpoint").removeClass("jsplumb-connection-in-progress");
    });


});