var rightconnection=false;
var datapoints1 = [];
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
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
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
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: +90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            
           
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
        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

        var correct_connections_2_13 = [
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            }
        ];
        var correct_connections_3_14 = [
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            }
        ];
        var correct_connections_4_18 = [
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            }
        ];
        var correct_connections_5_19 = [
            {
                "source": "ld19",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld19"
            }
        ];

        var correct_connections_6_18 = [
            {
                "source": "ld6",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld6"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld7"
            }
        ];
        var correct_connections_9_15 = [
            {
                "source": "ld9",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld9"
            }
        ];
        var correct_connections_10_18 = [
            {
                "source": "ld10",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld10"
            }
        ];
        var correct_connections_11_17 = [
            {
                "source": "ld17",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld17"
            }
        ];
        var correct_connections_16_19 = [
            {
                "source": "ld16",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld16"
            }
        ];
        var correct_connections_17_20 = [
            {
                "source": "ld17",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld17"
            }
        ];
        var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            }
        ];
        var correct_connections_22_25 = [
            {
                "source": "ld22",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld22"
            }
        ];
        var correct_connections_23_26 = [
            {
                "source": "ld23",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld23"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            },
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            },
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            },
            {
                "source": "ld19",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld19"
            },
            {
                "source": "ld6",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld7"
            },
            {
                "source": "ld9",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },
            {
                "source": "ld17",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld17"
            },
            {
                "source": "ld16",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld16"
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
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_12= false;
        var is_connected_2_13 = false;
        var is_connected_3_14 = false;
        var is_connected_4_18 = false;
        var is_connected_5_19 = false;
        var is_connected_6_18= false;
        var is_connected_7_8 = false;
        var is_connected_9_15 = false;
        var is_connected_10_18 = false;
        var is_connected_11_17 = false;
        var is_connected_16_19 = false;
        var is_connected_17_20= false;
        var is_connected_21_24 = false;
        var is_connected_22_25 = false;
        var is_connected_23_26 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
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

            if(!is_connected_2_13){
                is_connected_2_13 = correct_connections_2_13.find(function (conn) {
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

            if(!is_connected_3_14){
                is_connected_3_14 = correct_connections_3_14.find(function (conn) {
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

            if(!is_connected_4_18){
                is_connected_4_18 = correct_connections_4_18.find(function (conn) {
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

            if(!is_connected_5_19){
                is_connected_5_19= correct_connections_5_19.find(function (conn) {
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

            if(!is_connected_6_18){
                is_connected_6_18 = correct_connections_6_18.find(function (conn) {
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

            if(!is_connected_7_8){
                is_connected_7_8= correct_connections_7_8.find(function (conn) {
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

            if(!is_connected_9_15){
                is_connected_9_15= correct_connections_9_15.find(function (conn) {
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

            if(!is_connected_10_18){
                is_connected_10_18 = correct_connections_10_18.find(function (conn) {
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

            if(!is_connected_11_17){
                is_connected_11_17= correct_connections_11_17.find(function (conn) {
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

            if(!is_connected_16_19){
                is_connected_16_19 = correct_connections_16_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_20){
                is_connected_17_20 = correct_connections_17_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_25){
                is_connected_22_25 = correct_connections_22_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_26){
                is_connected_23_26 = correct_connections_23_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

//&& is_connected_2_13 && is_connected_3_14 && is_connected_4_18 && is_connected_5_19 && is_connected_6_18 && is_connected_7_8 && is_connected_9_15 && is_connected_10_18 && is_connected_11_17 && is_connected_16_19 &&is_connected_17_20 &&is_connected_21_24 &&is_connected_22_25 && is_connected_23_26 
        if ( is_connected_1_12 && !unallowed_connection_present) 
        {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled=true;
            rightconnection=true;
            disable_all();
            return;
        } 
        else 
        {
            alert("Alert ! Incorrect connection.");
            
            return;
        } 
    });
});




function disable_all()
{
    var rightconnection=false;
var datapoints1 = [];
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
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
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
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: +90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            
           
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
        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

        var correct_connections_2_13 = [
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            }
        ];
        var correct_connections_3_14 = [
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            }
        ];
        var correct_connections_4_18 = [
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            }
        ];
        var correct_connections_5_19 = [
            {
                "source": "ld19",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld19"
            }
        ];

        var correct_connections_6_18 = [
            {
                "source": "ld6",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld6"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld7"
            }
        ];
        var correct_connections_9_15 = [
            {
                "source": "ld9",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld9"
            }
        ];
        var correct_connections_10_18 = [
            {
                "source": "ld10",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld10"
            }
        ];
        var correct_connections_11_17 = [
            {
                "source": "ld17",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld17"
            }
        ];
        var correct_connections_16_19 = [
            {
                "source": "ld16",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld16"
            }
        ];
        var correct_connections_17_20 = [
            {
                "source": "ld17",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld17"
            }
        ];
        var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            }
        ];
        var correct_connections_22_25 = [
            {
                "source": "ld22",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld22"
            }
        ];
        var correct_connections_23_26 = [
            {
                "source": "ld23",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld23"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            },
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            },
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            },
            {
                "source": "ld19",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld19"
            },
            {
                "source": "ld6",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld7"
            },
            {
                "source": "ld9",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },
            {
                "source": "ld17",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld17"
            },
            {
                "source": "ld16",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld16"
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
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_12= false;
        var is_connected_2_13 = false;
        var is_connected_3_14 = false;
        var is_connected_4_18 = false;
        var is_connected_5_19 = false;
        var is_connected_6_18= false;
        var is_connected_7_8 = false;
        var is_connected_9_15 = false;
        var is_connected_10_18 = false;
        var is_connected_11_17 = false;
        var is_connected_16_19 = false;
        var is_connected_17_20= false;
        var is_connected_21_24 = false;
        var is_connected_22_25 = false;
        var is_connected_23_26 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
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

            if(!is_connected_2_13){
                is_connected_2_13 = correct_connections_2_13.find(function (conn) {
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

            if(!is_connected_3_14){
                is_connected_3_14 = correct_connections_3_14.find(function (conn) {
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

            if(!is_connected_4_18){
                is_connected_4_18 = correct_connections_4_18.find(function (conn) {
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

            if(!is_connected_5_19){
                is_connected_5_19= correct_connections_5_19.find(function (conn) {
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

            if(!is_connected_6_18){
                is_connected_6_18 = correct_connections_6_18.find(function (conn) {
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

            if(!is_connected_7_8){
                is_connected_7_8= correct_connections_7_8.find(function (conn) {
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

            if(!is_connected_9_15){
                is_connected_9_15= correct_connections_9_15.find(function (conn) {
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

            if(!is_connected_10_18){
                is_connected_10_18 = correct_connections_10_18.find(function (conn) {
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

            if(!is_connected_11_17){
                is_connected_11_17= correct_connections_11_17.find(function (conn) {
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

            if(!is_connected_16_19){
                is_connected_16_19 = correct_connections_16_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_20){
                is_connected_17_20 = correct_connections_17_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_25){
                is_connected_22_25 = correct_connections_22_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_26){
                is_connected_23_26 = correct_connections_23_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

//&& is_connected_2_13 && is_connected_3_14 && is_connected_4_18 && is_connected_5_19 && is_connected_6_18 && is_connected_7_8 && is_connected_9_15 && is_connected_10_18 && is_connected_11_17 && is_connected_16_19 &&is_connected_17_20 &&is_connected_21_24 &&is_connected_22_25 && is_connected_23_26 
        if ( is_connected_1_12 && !unallowed_connection_present) 
        {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled=true;
            rightconnection=true;
            return;
        } 
        else 
        {
            alert("Alert ! Incorrect connection.");
            
            return;
        } 
    });
});
}
var rotoroffstate=true;
var mcboffstate=true;
var were=270;
function mcbonoff()
{   
    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
    else
    {
        if (mcboffstate==true)
        {
            
            mcboffstate=false;
            document.getElementById('myimage').src='mcbon.png';
            document.getElementById('myimage1').src='push2.png';
            document.getElementById('myimage2').src='push2.png';
            document.getElementById('myimage3').src='push2.png';            
        }
        else
        {
            if(rotoroffstate==false)
            {
                rotaronoff();
                rangeShow.value = 0;
                rangeClock.style.transform = 'rotate(' + 295+ 'deg)';
                
                document.getElementById('myimage').src='mcboff.png';
                document.getElementById('myimage1').src='push1.png';
                document.getElementById('myimage2').src='push1.png';
                document.getElementById('myimage3').src='push1.png';
                mcboffstate=true;
            }
            else
            {

                mcboffstate=true;
                rangeShow.value = 0;
                rangeClock.style.transform = 'rotate(' + 295+ 'deg)';
                document.getElementById('myimage').src='mcboff.png';
                document.getElementById('myimage1').src='Push1.png'; 
                document.getElementById('myimage2').src='push1.png';
                document.getElementById('myimage3').src='push1.png';
            }
            
        }
    }   
}
var isrotating=false;
function rotaronoff()
{   
    if(mcboffstate==true)
    {
        alert("Alert ! Either please complete the connection first or set mcb to on.");
    }
    else
    {
        if(isrotating==false)
        {
            if (rotoroffstate==true)
            {
            isrotating=true;
            rotoroffstate=false;
            document.getElementById('cirmover2').style.animation="rotation 1s infinite linear";
            document.getElementById("graph").disabled=false;
            document.getElementById("addToTable").disabled=false;
            document.getElementById("range").disabled=false;
            var intervalId=setInterval(function()
            {
                if(were===390)
                {
                    clearInterval(intervalId);
                    were=400;
                    isrotating=false;
                }
                document.getElementById('cirmover1').style.transform="rotate("+were+"deg)";
                were++;
            },15);
            rangeMeter.value=1;
            rangeChange();
            }
            else
            {   
                isrotating=true;
                rotoroffstate=true;
                document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
                document.getElementById("graph").disabled=true;
                document.getElementById("addToTable").disabled=true;
                document.getElementById("range").disabled=true;
                var intervalId=setInterval(function()
                    {
                        if(were===270)
                        {
                            clearInterval(intervalId);
                            were=270;
                            isrotating=false;
                        }
                        document.getElementById('cirmover1').style.transform="rotate("+were+"deg)";
                        were--;
                    },15);
                rangeMeter.value=0;  
                rangeChange();
            }
        }
        else
        {
            return;
        }
        
    }
    
    
}
   




var xx = [];
    var yy = [];
    var zz =[];
    var rangeMeter = document.querySelector('#range');
    var rangeShow = document.querySelector("#show");
    var rangeClock =  document.querySelector('.meter-clock');
    var meterColor = document.querySelector('.meter-shape');
    var rangeShow2 = document.querySelector("#show2");
    var rangeClock2 =  document.querySelector('.meter-clock2');
    var meterColor2 = document.querySelector('.meter-shape2');
    var rangeShow3 = document.querySelector("#show3");
    var rangeShow4 = document.querySelector("#show4");
    var rangeClock3 =  document.querySelector('.meter-clock3');
    var meterColor3 = document.querySelector('.meter-shape3');
    var addToTable = document.querySelector('#addToTable');
    var table = document.querySelector('table');




      // console.log(values[i]);
    for (var i = 0; i < 100; i++) {
      function rangeChange() {
        var rotateClock =  rangeMeter.value;
        
        rangeClock.style.transform = 'rotate(' + 30+ 'deg)';
        rangeClock2.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 102)) + 'deg)';
         rangeClock3.style.transform = 'rotate(' + (-62 + ((rotateClock * 1150) / 100)) + 'deg)';
        
        // rangeShow.value = rotateClock;
        if (rangeMeter.value <= 9) {
          rangeShow.value = 400;
          rangeShow2.value = 8.0;
          rangeShow3.value = 1200;
          rangeShow4.value=1250;
          document.getElementById('cirmover2').style.animation="rotation 4.5s infinite linear";
          if(rangeMeter.value <= 8) {
            rangeShow.value = 400;
            rangeShow2.value = 7.5;
            rangeShow3.value = 1160;
            rangeShow4.value=1278;
            document.getElementById('cirmover2').style.animation="rotation 4s infinite linear";
            if (rangeMeter.value <= 7) {
              rangeShow.value = 400;
              rangeShow2.value = 6.9;
              rangeShow3.value = 1100;
              rangeShow4.value=1300;
              document.getElementById('cirmover2').style.animation="rotation 3.5s infinite linear";
              if (rangeMeter.value <= 6) {
                rangeShow.value = 400;
                rangeShow2.value = 6.4;
                rangeShow3.value = 1040;
                rangeShow4.value=1334;
                document.getElementById('cirmover2').style.animation="rotation 3s infinite linear";
                if (rangeMeter.value <= 5) {
                  rangeShow.value = 400;
                  rangeShow2.value = 6.1;
                  rangeShow3.value = 940;
                  rangeShow4.value=1352;
                  document.getElementById('cirmover2').style.animation="rotation 2.5s infinite linear";
                  if (rangeMeter.value <= 4) {
                    rangeShow.value = 400;
                    rangeShow2.value = 5.5;
                    rangeShow3.value = 820;
                    rangeShow4.value=1364;
                    document.getElementById('cirmover2').style.animation="rotation 2s infinite linear";
                    if (rangeMeter.value <= 3) {
                      rangeShow.value = 400;
                      rangeShow2.value = 4.8;
                      rangeShow3.value = 680;
                      rangeShow4.value=1388;
                      document.getElementById('cirmover2').style.animation="rotation 1.5s infinite linear";;
                      if (rangeMeter.value <= 2) {
                        rangeShow.value = 400;
                        rangeShow2.value = 2.9;
                        rangeShow3.value = 140;
                        rangeShow4.value=1454;
                        document.getElementById('cirmover2').style.animation="rotation 1s infinite linear";
                        if (rangeMeter.value <= 1) {
                          rangeShow.value = 400;
                          rangeShow2.value = 2.6;
                          rangeShow3.value = 40;
                          rangeShow4.value=1474;
                          document.getElementById('cirmover2').style.animation="rotation 0.5s infinite linear";
                          if (rangeMeter.value <= 0) {
                            document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
                            rangeShow.value = 400;
                            rangeShow2.value = 0;
                            rangeShow3.value = 0;
                            rangeShow4.value=0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          // if(rangeMeter.value <= 10) {
          //   rangeShow.value = values[0];
          // }
        }

        // else if (10 < rangeMeter.value <= 20) {
        //   rangeShow.value = values[1];
        // }
        
        // else if (20 < rangeMeter.value <= 30) {
        //   rangeShow.value = values[2];
        // }
        // rangeShow.value = values[i];
        
      }     
      rangeMeter.addEventListener('input', rangeChange);
    }  
    var clickcounter=0;
    var count = 1;
    var x = table.insertRow(1);

    var cell1 = x.insertCell(0);
    var cell2 = x.insertCell(1);
    var cell3 = x.insertCell(2);
    var cell4 = x.insertCell(3);

    

    var trace1 = {
        x: [],
        y: [],
        z: [],
        type: 'scatter'
      };
      var resistance=0;
    addToTable.addEventListener('click', () => {
      clickcounter++;

      if(clickcounter<=10)
      {
        var y = table.insertRow(clickcounter);
        var cell1 = y.insertCell(0);
        var cell2 = y.insertCell(1);
        var cell3 = y.insertCell(2);
        var cell4 = y.insertCell(3);
        cell1.innerHTML = "SN";
        cell2.innerHTML = "Ammeter";
        cell3.innerHTML = "Wattmeter"
        cell4.innerHTML = "Speed";
        cell1.innerHTML = count++;
        cell2.innerHTML = rangeShow2.value;
        cell3.innerHTML = rangeShow3.value;
        if(rangeMeter.value==0)
        {
          resistance=0;
          cell4.innerHTML = 0;
        }
        else if(rangeMeter.value==1)
        {
          resistance=1;
          cell4.innerHTML = 1474;
        }
        else if(rangeMeter.value==2)
        {
          resistance=2;
          cell4.innerHTML = 1454;
        }
        else if(rangeMeter.value==3)
        {
          resistance=3;
          cell4.innerHTML = 1388;
        }
        else if(rangeMeter.value==4)
        {
          resistance=4;
          cell4.innerHTML = 1363;
        }
        else if(rangeMeter.value==5)
        {
          resistance=5;
          cell4.innerHTML = 1352;
        }
        else if(rangeMeter.value==6)
        {
          resistance=6;
          cell4.innerHTML = 1334;
        }
        else if(rangeMeter.value==7)
        {
          resistance=7;
          cell4.innerHTML = 1300;
        }
        else if(rangeMeter.value==8)
        {
          resistance=8;
          cell4.innerHTML = 1278;
        }
        else if(rangeMeter.value==9)
        {
          resistance=9;
          cell4.innerHTML = 1250;
        }
      }
      else
      {
        alert("Only maximum 10 readings are allowed.");
      }
      
      trace1.x.push(cell4.innerHTML);
      trace1.y.push(resistance);
      

     })
   function drawgraph()
   {
     if(clickcounter<6)
     {
        alert("Alert ! Please take atleast 6 readings.");
     }
     else
     {
        var data = [trace1];
        var layout={
            xaxis:{
                title:{
                    text:'Speed',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#7f7f7f'
                    }
                },
            },
            yaxis:{
                title:{
                    text:'Resistance',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#7f7f7f'
                    }
                },
            }
        };

        Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
     }
   }
