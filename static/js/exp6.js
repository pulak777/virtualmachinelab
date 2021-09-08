var rightconnection = false;
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },


        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "/static/images/littledot.png" }],
        Connector: ["Bezier", { curviness: +90 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare1("ld4"),
            e5 = prepare2("ld5"),
            e6 = prepare3("ld6"),
            e7 = prepare1("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare3("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare1("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare1("ld16"),
            e17 = prepare2("ld17"),
            e18 = prepare3("ld18"),
            e19 = prepare1("ld19"),
            e20 = prepare2("ld20"),
            e21 = prepare3("ld21"),
            e22 = prepare1("ld22"),
            e23 = prepare2("ld23"),
            e24 = prepare3("ld24"),
            e25 = prepare1("ld25"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        var correct_connections_10_5 = [
            {
                "source": "ld10",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld10"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld7",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld8"
            },
            {
                "source": "ld2",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld2"
            },
            {
                "source": "ld18",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld18"
            },
            {
                "source": "ld25",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld25"
            },
            {
                "source": "ld3",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld21"
            },
            {
                "source": "ld21",
                "target": "ld4"
            },
            {
                "source": "ld12",
                "target": "ld22"
            },
            {
                "source": "ld22",
                "target": "ld12"
            },
            {
                "source": "ld14",
                "target": "ld23"
            },
            {
                "source": "ld23",
                "target": "ld14"
            },
            {
                "source": "ld10",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld10"
            },
            {
                "source": "ld12",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld12"
            },
        ];

        var actual_connections = instance.getAllConnections();

        /*var is_connected_1_4= false;
        var is_connected_2_5 = false;
        var is_connected_3_6 = false;
        var is_connected_7_10 = false;
        var is_connected_8_11= false;
        var is_connected_9_16 = false;
        var is_connected_11_15 = false;
        var is_connected_10_12 = false;*/
        var is_connected_10_5 = false;
        var unallowed_connection_present = false;

        /* actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_1_4){
                 is_connected_1_4 = correct_connections_1_4.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_2_5){
                 is_connected_2_5 = correct_connections_2_5.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_3_6){
                 is_connected_3_6 = correct_connections_3_6.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_7_10){
                 is_connected_7_10 = correct_connections_7_10.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_8_11){
                 is_connected_8_11 = correct_connections_8_11.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 });
             }
             if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_9_16){
                 is_connected_9_16= correct_connections_9_16.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
 
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_11_15){
                 is_connected_11_15= correct_connections_11_15.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
         });
         actual_connections.forEach(function (connection) {
             var this_connection = {
                 "source": connection.sourceId,
                 "target": connection.targetId
             };
 
             if(!is_connected_10_12){
                 is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                   });
             }
 
            if(!unallowed_connection_present){
                 unallowed_connection_present = !(allowed_connections.find(function (conn) {
                     return conn.source === this_connection.source && conn.target === this_connection.target;
                 }));
             }
         });*/
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_10_5) {
                is_connected_10_5 = correct_connections_10_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        //short cut can be used for debugging
        if (is_connected_10_5 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.querySelector("#connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
        }
        else {
            alert("Alert ! Incorrect connection.");

            return;
        }
    });
});




function disable_all() {
    jsPlumb.ready(function () {

        var instance,

            initAnimation = function (elId) {
                var el = document.getElementById(elId);

                instance.on(el, 'click', function (e, ui) {
                    if (el.className.indexOf("jsPlumb_dragged") > -1) {
                        jsPlumb.removeClass(elId, "jsPlumb_dragged");
                        return;
                    }

                });
            },
            endpoint1 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint2 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint3 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            prepare1 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint1);
            },
            prepare2 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint2);
            },
            prepare3 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint3);
            },

            // get a jsPlumb instance, setting some appropriate defaults and a Container.
            instance = jsPlumb.getInstance({
                DragOptions: { cursor: 'wait', zIndex: 20 },
                Endpoint: ["Image", { url: "/static/images/littledot.png" }],
                Connector: ["Bezier", { curviness: +90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.
        instance.batch(function () {
            var e1 = prepare1("ld1"),
                e2 = prepare2("ld2"),
                e3 = prepare3("ld3"),
                e4 = prepare1("ld4"),
                e5 = prepare2("ld5"),
                e6 = prepare3("ld6"),
                e7 = prepare1("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare3("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare2("ld11"),
                e12 = prepare3("ld12"),
                e13 = prepare1("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare2("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare1("ld19"),
                e20 = prepare2("ld20"),
                e21 = prepare3("ld21"),
                e22 = prepare1("ld22"),
                e23 = prepare2("ld23"),
                e24 = prepare3("ld24"),
                e25 = prepare1("ld25"),
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}

var blocked_rotor = false;
var rotoroffstate = true;
var mcboffstate = true;
var were = 270;
function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            rotaronoff();
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

var rangeMeter = document.querySelector('#range');

var rangeShow0 = document.querySelector("#show0");
var rangeShow1 = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");

var rangeClock1 = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');
var rangeClock3 = document.querySelector('#meter3');


const volt = 400;
const fieldC = [0, 0.05, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const armC = [0, 2.75, 2.25, 1.75, 1.15, 0.5, 0, 0.35, 0.9, 1.45];


function rotaronoff() {

    if (mcboffstate == false) {
        if (rotoroffstate == true) {
            rangeMeter.disabled = false;
            rangeMeter.value = 1;
            setTimeout(function () {
                alert("Start moving the slider");
            }, 1000);
            rangeChange();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

var trace = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
};
var clickCounter = 0;

function rangeChange() {

    const val = rangeMeter.value;
    if (val == 10) {
        document.querySelector("#range").disabled = true;
        document.querySelector("#graph").disabled = false;
        setTimeout(function () {
            alert("Click on graph");
        }, 1000);
        return;
    }

    rangeShow0.value = fieldC[val];
    rangeShow1.value = armC[val];
    rangeShow2.value = volt;
    clickCounter++;
    var y = table.insertRow(clickCounter);
    var cell1 = y.insertCell(0);
    cell1.setAttribute('style', 'text-align: center;');
    var cell2 = y.insertCell(1);
    cell2.setAttribute('style', 'text-align: center;');
    var cell3 = y.insertCell(2);
    cell3.setAttribute('style', 'text-align: center;');
    var cell4 = y.insertCell(3);
    cell4.setAttribute('style', 'text-align: center;');

    cell1.innerHTML = clickCounter;
    cell2.innerHTML = volt;
    cell3.innerHTML = fieldC[val];
    cell4.innerHTML = armC[val];

    trace.y.push(armC[val]);
    trace.x.push(fieldC[val]);

}

rangeMeter.addEventListener('input', rangeChange);

function drawgraph() {
    var data = [trace];
    var layout = {
        xaxis: {
            title: {
                text: 'Field Current',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Armature Current',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        }
    };
    Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });

    setTimeout(function () {
        alert("CONGRATULATIONS YOU HAVE MADE IT**************************************NO MORE EXPERIMENTS LEFT****************CHEERS");
    }, 2000);
}
