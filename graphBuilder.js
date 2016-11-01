jsPlumb.ready(function() {
    window.jsPlumbInstance = jsPlumb.getInstance({
        Container: ".container",
        Connector: "Straight",
        Anchor: ["Perimeter", {shape: "Circle", anchorCount: 20}],
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

    jsPlumbInstance.bind("connection", function(info) {
        addNewEndPoint(info.source);
        addNewEndPoint(info.target);
    });
});