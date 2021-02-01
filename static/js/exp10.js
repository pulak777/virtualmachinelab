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
        Connector: ["Bezier", { curviness: -20 }],
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
            e26 = prepare2("ld26"),
            e27 = prepare3("ld27"),
            e28 = prepare1("ld28"),
            e29 = prepare2("ld29"),
            e30 = prepare3("ld30"),
            e31 = prepare1("ld31"),
            e32 = prepare2("ld32"),
            e33 = prepare3("ld33"),
            e34 = prepare1("ld34"),
            e35 = prepare2("ld35"),
            e36 = prepare3("ld36"),
            e37 = prepare1("ld37"),
            e38 = prepare2("ld38"),
            e39 = prepare3("ld39"),
            e40 = prepare1("ld40"),
            e41 = prepare2("ld41"),
            e42 = prepare3("ld42"),
            e43 = prepare1("ld43"),
            e44 = prepare2("ld44"),


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

        var correct_connections_39_41 = [
            {
                "source": "ld39",
                "target": "ld41"
            },

            {
                "source": "ld41",
                "target": "ld39"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld3"
            },
            {
                "source": "ld7",
                "target": "ld10"
            },

            {
                "source": "ld10",
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
                "source": "ld9",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld9"
            },
            {
                "source": "ld11",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld11"
            },
            {
                "source": "ld43",
                "target": "ld44"
            },
            {
                "source": "ld44",
                "target": "ld43"
            },
            {
                "source": "ld13",
                "target": "ld44"
            },
            {
                "source": "ld44",
                "target": "ld13"
            },
            {
                "source": "ld15",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld15"
            },

            {
                "source": "ld44",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld44"
            },
            {
                "source": "ld17",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld17"
            },
            {
                "source": "ld21",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld21"
            },
            {
                "source": "ld22",
                "target": "ld25"
            },

            {
                "source": "ld25",
                "target": "ld22"
            },
            {
                "source": "ld23",
                "target": "ld26"
            },

            {
                "source": "ld26",
                "target": "ld23"
            },
            {
                "source": "ld35",
                "target": "ld33"
            },

            {
                "source": "ld33",
                "target": "ld35"
            },
            {
                "source": "ld36",
                "target": "ld34"
            },
            {
                "source": "ld34",
                "target": "ld36"
            },
            {
                "source": "ld31",
                "target": "ld27"
            },
            {
                "source": "ld27",
                "target": "ld31"
            },
            {
                "source": "ld32",
                "target": "ld28"
            },
            {
                "source": "ld28",
                "target": "ld32"
            },
            {
                "source": "ld29",
                "target": "ld37"
            },
            {
                "source": "ld37",
                "target": "ld29"
            },
            {
                "source": "ld38",
                "target": "ld39"
            },

            {
                "source": "ld39",
                "target": "ld38"
            },

            {
                "source": "ld30",
                "target": "ld40"
            },
            {
                "source": "ld40",
                "target": "ld30"
            },

            {
                "source": "ld39",
                "target": "ld41"
            },
            {
                "source": "ld41",
                "target": "ld39"
            },

            {
                "source": "ld40",
                "target": "ld42"
            },
            {
                "source": "ld42",
                "target": "ld40"
            },

        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_39_41 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_39_41) {
                is_connected_39_41 = correct_connections_39_41.find(function (conn) {
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
        if (is_connected_39_41 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            rightconnection = true;
            disable_all();
            document.querySelector("#connection-table").innerHTML = "";
            document.querySelector("#wrapper").style.top = "10px";
        }
        else {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧.");

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
                e26 = prepare2("ld26"),
                e27 = prepare3("ld27"),
                e28 = prepare1("ld28"),
                e29 = prepare2("ld29"),
                e30 = prepare3("ld30"),
                e31 = prepare1("ld31"),
                e32 = prepare2("ld32"),
                e33 = prepare3("ld33"),
                e34 = prepare1("ld34"),
                e35 = prepare2("ld35"),
                e36 = prepare3("ld36"),
                e37 = prepare1("ld37"),
                e38 = prepare2("ld38"),
                e39 = prepare3("ld39"),
                e40 = prepare1("ld40"),
                e41 = prepare2("ld41"),
                e42 = prepare3("ld42"),
                e43 = prepare1("ld43"),
                e44 = prepare2("ld44"),

                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}



var blocked_rotor = false;
var rotoroffstate = true;
var mcboffstate = true;
var dcswitchoffstate = true;
var were = 270;
function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            setTimeout(function () {
                alert("𝗪𝗮𝗿𝗻𝗶𝗻𝗴:: 𝗗𝗼 𝗻𝗼𝘁 𝗰𝗵𝗮𝗻𝗴𝗲 𝘁𝗵𝗲 𝗿𝗵𝗲𝗼𝘀𝘁𝗮𝘁 𝘃𝗮𝗹𝘂𝗲!\n𝕎𝕒𝕣𝕟𝕚𝕟𝕘:: 𝔻𝕠 𝕟𝕠𝕥 𝕔𝕙𝕒𝕟𝕘𝕖 𝕥𝕙𝕖 𝕣𝕙𝕖𝕠𝕤𝕥𝕒𝕥 𝕧𝕒𝕝𝕦𝕖!");
            }, 1000);

            rotaronoff();
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}



var rangeMeter1 = document.querySelector('#range1');
var rangeMeter2 = document.querySelector('#range2');
var rangeMeter3 = document.querySelector('#range3');
var rangeMeter4 = document.querySelector('#range4');

var meterShow1 = document.querySelector("#show01");
var meterShow2 = document.querySelector("#show02");
var meterShow3 = document.querySelector("#show03");
var meterShow4 = document.querySelector("#show04");

var rangeShow = document.querySelector("#show");
var rangeShow1 = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");
var rangeShow3 = document.querySelector("#show3");
var rangeShow4 = document.querySelector("#show4");
var rangeShow5 = document.querySelector("#show5");
var rangeShow6 = document.querySelector("#show6");

var rangeClock1 = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');
var rangeClock3 = document.querySelector('#meter3');
var rangeClock4 = document.querySelector('#meter4');
var rangeClock5 = document.querySelector('#meter5');
var rangeClock6 = document.querySelector('#meter6');


const init_v = [400, 300, 200, 100, 0];
const init_a = [1.1, 0.8, 0.55, 0.25, 0];
const init_w1 = [-32, -24, -16, -8, 0];
const init_w2 = [328, 239, 162, 81, 0];
const init_speed = [1418, 1149, 699, 301, 0];

const f_init_v = [217, 148, 99, 46, 0];
const f_init_a = 0;


const speed = [0, 1418, 1337, 1210, 1155, 1070, 1046];
const dc_gen_op_i = [0, 0, 0.9, 1.58, 2.17, 2.65, 3.1];
const dc_gen_op_v = [0, 217, 175, 162, 152, 140, 130];
const w2 = [0, 328, 432, 520, 600, 680, 760];
const w1 = [0, -32, 32, 80, 140, 220, 260];
const stator_voltage = 400;
const stator_current = [0, 1.1, 1.35, 1.52, 1.8, 2, 2.25];

function rotaronoff() {

    if (mcboffstate == false) {
        if (rotoroffstate == true) {
            rangeMeter1.disabled = false;
            rangeMeter3.disabled = false;
            rangeMeter1.value = 1;
            rangeMeter3.value = 0;
            rangeChange1();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

function rangeChange1() {
    const val = rangeMeter1.value;
    document.getElementById('cirmover').style.animation=`rotation ${(1500 - init_speed[4-val]) / 100}s infinite linear`;
    meterShow1.value = val;
    rangeShow.value = init_speed[4-val];

    rangeShow1.value = init_a[4-val];
    rangeClock1.style.transform = 'rotate(' + (-62 + (((init_a[4-val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow2.value = init_v[4-val];
    rangeClock2.style.transform = 'rotate(' + (-62 + (((init_v[4-val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow3.value = init_w1[4-val];
    rangeClock3.style.transform = 'rotate(' + (-62 + (((init_w1[4-val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow4.value = init_w2[4-val];
    rangeClock4.style.transform = 'rotate(' + (-62 + (((init_w2[4-val] / 40) * 1000) / 150)) + 'deg)';
    if(val == 4) {
        document.querySelector("#range1").disabled = true;
        setTimeout(function () {
            alert("𝐍𝐨𝐰 𝐭𝐮𝐫𝐧 𝐨𝐧 𝐃𝐂 𝐬𝐮𝐩𝐩𝐥𝐲");
        }, 1000);
    }
}
rangeMeter1.addEventListener('input', rangeChange1);

function dcswitchonoff() {
    if (rightconnection == true) {

        if (mcboffstate == false && dcswitchoffstate == true) {
            dcswitchoffstate = false;
            document.getElementById('dc-switch').src = '/static/images/switchon.png';
            
            rangeMeter2.disabled = false;
            rangeMeter4.disabled = false;
            rangeMeter2.value = 1;
            rangeMeter4.value = 0;
            rangeChange2();
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}

function rangeChange2() {
    const val = rangeMeter2.value;
    
    meterShow2.value = val;
    
    rangeShow5.value = f_init_a;
    rangeClock5.style.transform = 'rotate(' + (-62 + (((f_init_a / 20) * 1000) / 150)) + 'deg)';
    rangeShow6.value = f_init_v[4-val];
    rangeClock6.style.transform = 'rotate(' + (-62 + (((f_init_v[4-val] / 20) * 1000) / 150)) + 'deg)';
    if(val == 4) {
        document.querySelector("#range2").disabled = true;
        rangeMeter4.value = 1;
        rangeChange3();
        setTimeout(function () {
            alert("𝐍𝐨𝐰 𝐜𝐡𝐚𝐧𝐠𝐞 𝐑𝐞𝐬𝐢𝐬𝐭𝐢𝐯𝐞 𝐋𝐨𝐚𝐝 𝐁𝐨𝐱 𝐯𝐚𝐥𝐮𝐞");
        }, 1000);
    }
}
rangeMeter2.addEventListener('input', rangeChange2);



var clickCounter = 0;
function rangeChange3() {

    const val = rangeMeter4.value;

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
    var cell5 = y.insertCell(4);
    cell5.setAttribute('style', 'text-align: center;');
    var cell6 = y.insertCell(5);
    cell6.setAttribute('style', 'text-align: center;');
    var cell7 = y.insertCell(6);
    cell7.setAttribute('style', 'text-align: center;');
    var cell8 = y.insertCell(7);
    cell8.setAttribute('style', 'text-align: center;');
    
    cell1.innerHTML = clickCounter;

    document.getElementById('cirmover').style.animation=`rotation ${(1500 - speed[val]) / 100}s infinite linear`;
    
    
    meterShow4.value = val;

    rangeShow1.value = cell2.innerHTML = stator_current[val];
    rangeClock1.style.transform = 'rotate(' + (-62 + (((stator_current[val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow2.value = cell3.innerHTML = stator_voltage;
    rangeClock2.style.transform = 'rotate(' + (-62 + (((stator_voltage / 20) * 1000) / 150)) + 'deg)';
    rangeShow3.value = cell4.innerHTML = w1[val];
    rangeClock3.style.transform = 'rotate(' + (-62 + (((w1[val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow4.value = cell5.innerHTML = w2[val];
    rangeClock4.style.transform = 'rotate(' + (-62 + (((w2[val] / 40) * 1000) / 150)) + 'deg)';
    rangeShow5.value = cell7.innerHTML = dc_gen_op_i[val];
    rangeClock5.style.transform = 'rotate(' + (-62 + (((dc_gen_op_i[val] / 20) * 1000) / 150)) + 'deg)';
    rangeShow6.value = cell6.innerHTML = dc_gen_op_v[val];
    rangeClock6.style.transform = 'rotate(' + (-62 + (((dc_gen_op_v[val] / 20) * 1000) / 150)) + 'deg)';

    rangeShow.value = cell8.innerHTML = speed[val];

    if(val == 6){
        document.querySelector("#range4").disabled = true;
    }
}
rangeMeter4.addEventListener('input', rangeChange3);

