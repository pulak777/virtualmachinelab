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
            e7 = prepare3("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare1("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare3("ld11"),
            e12 = prepare1("ld12"),
            e13 = prepare2("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare3("ld16"),
            e17 = prepare1("ld17"),
            e18 = prepare2("ld18"),
            e19 = prepare3("ld19"),

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

        var correct_connections_17_18 = [
            {
                "source": "ld17",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld17"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "ld7",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld7"
            },
            {
                "source": "ld6",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld8"
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
                "source": "ld8",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld8"
            },
            {
                "source": "ld19",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld19"
            },
            {
                "source": "ld10",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld10"
            },
            {
                "source": "ld12",
                "target": "ld14"
            },

            {
                "source": "ld12",
                "target": "ld14"
            },

            {
                "source": "ld12",
                "target": "ld16"
            },
            {
                "source": "ld16",
                "target": "ld12"
            },
            {
                "source": "ld17",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld17"
            }
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
        var is_connected_17_18 = false;
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

            if (!is_connected_17_18) {
                is_connected_17_18 = correct_connections_17_18.find(function (conn) {
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
        if (is_connected_17_18 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.querySelector("#connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            setTimeout(function () {
                alert("Now turn on the power supply to perform No-load test on single phase induction motor");
            }, 2000);
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
                e7 = prepare3("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare1("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare3("ld11"),
                e12 = prepare1("ld12"),
                e13 = prepare2("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare3("ld16"),
                e17 = prepare1("ld17"),
                e18 = prepare2("ld18"),
                e19 = prepare3("ld19"),

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
        else if (blocked_rotor) {
            mcboffstate = true;
            document.getElementById('cirmover').style.animation = "rotation 0s infinite linear";
            rotoroffstate = true;
            document.getElementById('myimage').src = '/static/images/mcboff.png';
            document.getElementById('myimage1').src = '/static/images/push1.png';
            document.getElementById('myimage2').src = '/static/images/push1.png';
            document.getElementById('myimage3').src = '/static/images/push1.png';
            rangeMeter.value = 0;
            rangeShow0.value = 0;
            rangeShow1.value = 0;
            rangeShow2.value = 0;
            rangeShow3.value = 0;
            rangeShow4.value = 0;
            rangeShow5.value = 0;
            rangeClock1.style.transform = 'rotate(' + (-62) + 'deg)';
            rangeClock2.style.transform = 'rotate(' + (-62) + 'deg)';
            rangeClock3.style.transform = 'rotate(' + (-62) + 'deg)';
            document.getElementById("rotor_blocker").src = "/static/images/rotor_blocker.jfif";
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

var rangeShow0 = document.querySelector("#show00");
var rangeShow1 = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");
var rangeShow3 = document.querySelector("#show3");
var rangeShow4 = document.querySelector("#show4");
var rangeShow5 = document.querySelector("#show5");

var rangeClock1 = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');
var rangeClock3 = document.querySelector('#meter3');

var table = document.querySelector('#table');

function rotaronoff() {

    if (mcboffstate == false) {
        if (rotoroffstate == true) {
            rotoroffstate = false;
            if (blocked_rotor) {
                document.getElementById('cirmover').style.animation = "rotation 0s infinite linear";
            }
            else {
                document.getElementById('cirmover').style.animation = "rotation 3s infinite linear";
            }
            document.getElementById("range").disabled = false;

            if (blocked_rotor) {
                rangeMeter.value = 0;
            }
            else {
                rangeMeter.value = 1;
            }
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

const volt = [0, 99, 119, 140, 161, 179, 200];
const ampm = [0, 1.1, 1.17, 1.25, 1.32, 1.39, 1.46];
const watt = [0, 52, 60, 71, 79, 91, 100];
const speed = [0, 1000, 1100, 1193, 1295, 1386, 1495];

const blocked_volt = [0, 75];
const blocked_ampm = [0, 2.4];
const blocked_watt = [0, 120];

function rangeChange() {

    const val = rangeMeter.value;
    rangeShow1.value = val;
    if (blocked_rotor) {
        rangeShow2.value = blocked_volt[val];
        rangeClock1.style.transform = 'rotate(' + (-62 + (((blocked_volt[val] / 20) * 1000) / 150)) + 'deg)';
        rangeShow3.value = blocked_ampm[val];
        rangeClock2.style.transform = 'rotate(' + (-62 + ((blocked_ampm[val] * 1000) / 90)) + 'deg)';
        rangeShow4.value = blocked_watt[val];
        rangeClock3.style.transform = 'rotate(' + (-62 + (((blocked_watt[val] / 10) * 1000) / 100)) + 'deg)';
        rangeShow0.value = String(blocked_volt[val]) + "V";
        if (val == 1) {
            document.getElementById("range").disabled = true;
            blocked_rotor = false;
            setTimeout(function () {
                alert("Both experiments are completed. Hope you have noted down the final values.");
            }, 2000);
        }
    }
    else {
        rangeShow2.value = volt[val];
        rangeClock1.style.transform = 'rotate(' + (-62 + (((volt[val] / 20) * 1000) / 150)) + 'deg)';
        rangeShow3.value = ampm[val];
        rangeClock2.style.transform = 'rotate(' + (-62 + ((ampm[val] * 1000) / 90)) + 'deg)';
        rangeShow4.value = watt[val];
        rangeClock3.style.transform = 'rotate(' + (-62 + (((watt[val] / 10) * 1000) / 100)) + 'deg)';
        rangeShow5.value = speed[val];


        if (val == 1) {
            rangeShow0.value = "100V";
            document.getElementById('cirmover').style.animation = "rotation 3s infinite linear";
        }
        else if (val == 2) {
            rangeShow0.value = "120V";
            document.getElementById('cirmover').style.animation = "rotation 2.5s infinite linear";
        }
        else if (val == 3) {
            rangeShow0.value = "140V";
            document.getElementById('cirmover').style.animation = "rotation 2s infinite linear";
        }
        else if (val == 4) {
            rangeShow0.value = "160V";
            document.getElementById('cirmover').style.animation = "rotation 1.5s infinite linear";
        }
        else if (val == 5) {
            rangeShow0.value = "180V";
            document.getElementById('cirmover').style.animation = "rotation 1s infinite linear";
        }
        else if (val == 6) {
            rangeShow0.value = "200V";
            document.getElementById('cirmover').style.animation = "rotation 0.5s infinite linear";
            document.getElementById("range").disabled = true;
            blocked_rotor = true;
            setTimeout(function () {
                alert("Now turn off then turn on the power supply to perform *Block rotor* test on single phase induction motor");
            }, 2000);

        }

    }
}

rangeMeter.addEventListener('input', rangeChange);
