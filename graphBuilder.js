jsPlumb.ready(function() {
    var jsPlumbInstance = jsPlumb.getInstance({
        Container: ".container",
        Connector: "StateMachine",
        Anchor: ["Perimeter", {shape: "Square"}],
        Endpoint: ["Dot", {cssClass: "transparentEndpoint"}],
        ConnectionOverlays: [
            ["Arrow", {location: 1}]
        ]
    });

    jsPlumbInstance.connect({
        source: "first",
        target: "second",
        overlays: [
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

    jsPlumbInstance.draggable($(".jsplumb-connected"), {
        containment:true
    });
});