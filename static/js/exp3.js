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
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "/static/images/littledot.png" } ],
        Connector: [ "Bezier", { curviness: +90 } ],
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
        e11 = prepare3("ld11"),
        e12 = prepare1("ld12"),
        e13 = prepare2("ld13"),
        e14 = prepare3("ld14"),
        e15 = prepare1("ld15"),
        e16 = prepare3("ld16"),
        e17 = prepare2("ld17"),
        e18 = prepare1("ld18"),
        e19 = prepare2("ld19"),
        e20 = prepare1("ld20"),
        e21 = prepare2("ld21"),
        e22 = prepare3("ld22"),
        e23 = prepare2("ld23"),
        e24 = prepare1("ld24"),
        e25 = prepare1("ld25"),
        e26 = prepare3("ld26"),
        e27 = prepare1("ld27"),
        e28 = prepare2("ld28"),
        e29 = prepare2("ld29"),
        e30 = prepare3("ld30"),
        e31 = prepare3("ld31"),
        e32 = prepare3("ld32"),
        e33 = prepare3("ld33"),
        e34 = prepare1("ld34"),
        e35 = prepare1("ld35"),
        e36 = prepare2("ld36"),

            
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
        var correct_connections_1_4 = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld1"
            }
        ];

        var correct_connections_2_5 = [
            {
                "source": "ld2",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld2"
            }
        ];
        var correct_connections_3_6 = [
            {
                "source": "ld6",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld6"
            }
        ];
        var correct_connections_7_9 = [
            {
                "source": "ld9",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
                "target": "ld9"
            }
        ];
        var correct_connections_7_35 = [
            {
                "source": "ld7",
                "target": "ld35"
            },
    
            {
                "source": "ld35",
                "target": "ld7"
            }
        ];
        var correct_connections_8_10 = [
            {
                "source": "ld8",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld8"
            }
        ];
        var correct_connections_8_36 = [
            {
                "source": "ld8",
                "target": "ld36"
            },
    
            {
                "source": "ld36",
                "target": "ld8"
            }
        ];
        var correct_connections_9_11 = [
            {
                "source": "ld9",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld9"
            }
        ];
        var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
        var correct_connections_13_33 = [
            {
                "source": "ld13",
                "target": "ld33"
            },
    
            {
                "source": "ld33",
                "target": "ld13"
            }
        ];
        var correct_connections_14_34 = [
            {
                "source": "ld14",
                "target": "ld34"
            },
    
            {
                "source": "ld34",
                "target": "ld14"
            }
        ];
        var correct_connections_15_24 = [
            {
                "source": "ld15",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld15"
            }
        ];
        var correct_connections_16_23 = [
            {
                "source": "ld16",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld16"
            }
        ];
        var correct_connections_16_26 = [
            {
                "source": "ld16",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld16"
            }
        ];
        var correct_connections_17_25 = [
            {
                "source": "ld17",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld17"
            }
        ];
        var correct_connections_18_29 = [
            {
                "source": "ld18",
                "target": "ld29"
            },
    
            {
                "source": "ld29",
                "target": "ld18"
            }
        ];
        var correct_connections_19_28 = [
            {
                "source": "ld19",
                "target": "ld28"
            },
    
            {
                "source": "ld28",
                "target": "ld19"
            }
        ];
        var correct_connections_20_25 = [
            {
                "source": "ld20",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld20"
            }
        ];
        var correct_connections_21_23 = [
            {
                "source": "ld21",
                "target": "ld23"
            },
    
            {
                "source": "ld23",
                "target": "ld21"
            }
        ];
        var correct_connections_21_26 = [
            {
                "source": "ld21",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld21"
            }
        ];
        var correct_connections_22_24 = [
            {
                "source": "ld22",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld22"
            }
        ];
        var correct_connections_27_30 = [
            {
                "source": "ld27",
                "target": "ld30"
            },
    
            {
                "source": "ld30",
                "target": "ld27"
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
                "source": "ld6",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld6"
            },
            
                {
                    "source": "ld9",
                    "target": "ld7"
                },
        
                {
                    "source": "ld7",
                    "target": "ld9"
                },
            
                {
                    "source": "ld7",
                    "target": "ld35"
                },
        
                {
                    "source": "ld35",
                    "target": "ld7"
                },
           
                {
                    "source": "ld8",
                    "target": "ld10"
                },
        
                {
                    "source": "ld10",
                    "target": "ld8"
                },
            
                {
                    "source": "ld8",
                    "target": "ld36"
                },
        
                {
                    "source": "ld36",
                    "target": "ld8"
                },
        
                {
                    "source": "ld9",
                    "target": "ld11"
                },
        
                {
                    "source": "ld11",
                    "target": "ld9"
                },
            
                {
                    "source": "ld10",
                    "target": "ld12"
                },
        
                {
                    "source": "ld12",
                    "target": "ld10"
                },
            
                {
                    "source": "ld13",
                    "target": "ld33"
                },
        
                {
                    "source": "ld33",
                    "target": "ld13"
                },
           
                {
                    "source": "ld14",
                    "target": "ld34"
                },
        
                {
                    "source": "ld34",
                    "target": "ld14"
                },
           
                {
                    "source": "ld15",
                    "target": "ld24"
                },
        
                {
                    "source": "ld24",
                    "target": "ld15"
                },
           
                {
                    "source": "ld16",
                    "target": "ld23"
                },
        
                {
                    "source": "ld23",
                    "target": "ld16"
                },
            
                {
                    "source": "ld16",
                    "target": "ld26"
                },
        
                {
                    "source": "ld26",
                    "target": "ld16"
                },
           
                {
                    "source": "ld17",
                    "target": "ld25"
                },
        
                {
                    "source": "ld25",
                    "target": "ld17"
                },
           
                {
                    "source": "ld18",
                    "target": "ld29"
                },
        
                {
                    "source": "ld29",
                    "target": "ld18"
                },
           
                {
                    "source": "ld19",
                    "target": "ld28"
                },
        
                {
                    "source": "ld28",
                    "target": "ld19"
                },
           
                {
                    "source": "ld20",
                    "target": "ld25"
                },
        
                {
                    "source": "ld25",
                    "target": "ld20"
                },
          
                {
                    "source": "ld21",
                    "target": "ld23"
                },
        
                {
                    "source": "ld23",
                    "target": "ld21"
                },
           
                {
                    "source": "ld21",
                    "target": "ld26"
                },
        
                {
                    "source": "ld26",
                    "target": "ld21"
                },
           
                {
                    "source": "ld22",
                    "target": "ld24"
                },
        
                {
                    "source": "ld24",
                    "target": "ld22"
                },
           
                {
                    "source": "ld27",
                    "target": "ld30"
                },
        
                {
                    "source": "ld30",
                    "target": "ld27"
                }
        
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_4= false;
        var is_connected_2_5 = false;
        var is_connected_3_6 = false;
        var is_connected_7_9 = false;
        var is_connected_7_35= false;
        var is_connected_8_10 = false;
        var is_connected_8_36 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var is_connected_13_33= false;
        var is_connected_14_34 = false;
        var is_connected_15_24 = false;
        var is_connected_16_23 = false;
        var is_connected_16_26 = false;
        var is_connected_17_25 = false;
        var is_connected_18_29 = false;
        var is_connected_19_28 = false;
        var is_connected_20_25 = false;
        var is_connected_21_23 = false;
        var is_connected_21_26 = false;
        var is_connected_22_24 = false;
        var is_connected_27_30 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
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

            if(!is_connected_7_9){
                is_connected_7_9 = correct_connections_7_9.find(function (conn) {
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

            if(!is_connected_7_35){
                is_connected_7_35 = correct_connections_7_35.find(function (conn) {
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

            if(!is_connected_8_10){
                is_connected_8_10= correct_connections_8_10.find(function (conn) {
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

            if(!is_connected_8_36){
                is_connected_8_36 = correct_connections_8_36.find(function (conn) {
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

            if(!is_connected_9_11){
                is_connected_9_11 = correct_connections_9_11.find(function (conn) {
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
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_13_33){
                is_connected_13_33 = correct_connections_13_33.find(function (conn) {
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

            if(!is_connected_14_34){
                is_connected_14_34 = correct_connections_14_34.find(function (conn) {
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

            if(!is_connected_15_24){
                is_connected_15_24 = correct_connections_15_24.find(function (conn) {
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

            if(!is_connected_16_23){
                is_connected_16_23 = correct_connections_16_23.find(function (conn) {
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

            if(!is_connected_16_26){
                is_connected_16_26 = correct_connections_16_26.find(function (conn) {
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

            if(!is_connected_17_25){
                is_connected_17_25 = correct_connections_17_25.find(function (conn) {
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

            if(!is_connected_18_29){
                is_connected_18_29 = correct_connections_18_29.find(function (conn) {
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

            if(!is_connected_19_28){
                is_connected_19_28 = correct_connections_19_28.find(function (conn) {
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

            if(!is_connected_20_25){
                is_connected_20_25 = correct_connections_20_25.find(function (conn) {
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

            if(!is_connected_21_23){
                is_connected_21_23 = correct_connections_21_23.find(function (conn) {
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

            if(!is_connected_21_26){
                is_connected_21_26 = correct_connections_21_26.find(function (conn) {
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

            if(!is_connected_22_24){
                is_connected_22_24 = correct_connections_22_24.find(function (conn) {
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

            if(!is_connected_27_30){
                is_connected_27_30 = correct_connections_27_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        //is_connected_2_5 && is_connected_3_6 && is_connected_7_10 && is_connected_7_35 && is_connected_9_16 && is_connected_11_15 && is_connected_10_12 && is_connected_13_14 &&
        //short cut can be used for debugging
        if ( is_connected_27_30 && !unallowed_connection_present) 
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
        Endpoint: [ "Image", { url: "/static/images/littledot.png" } ],
        Connector: [ "Bezier", { curviness: +90 } ],
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
        e17 = prepare3("ld17"),
        e18 = prepare3("ld18"),
        e19 = prepare3("ld19"),
        e20 = prepare3("ld20"),
        e21 = prepare3("ld21"),
        e22 = prepare3("ld22"),
        e23 = prepare2("ld23"),
        e24 = prepare1("ld24"),
        e25 = prepare1("ld25"),
        e26 = prepare3("ld26"),
        e27 = prepare1("ld27"),
        e28 = prepare2("ld28"),
        e29 = prepare2("ld29"),
        e30 = prepare3("ld30"),
        e31 = prepare3("ld31"),
        e32 = prepare3("ld32"),
        e33 = prepare3("ld33"),
        e34 = prepare3("ld34"),
        e35 = prepare3("ld35"),
        e36 = prepare3("ld36"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");
    });
 });
}



var isrotating=false;
var rotoroffstate=true;
var mcboffstate=true;
var were=270;
function mcbonoff()
{   
   if(rightconnection==true)
    {
        if (mcboffstate==true)
        {
            
            mcboffstate=false;
            document.getElementById('myimage').src='/static/images/mcbon.png';
            document.getElementById('myimage1').src='/static/images/push2.png';
            document.getElementById('myimage2').src='/static/images/push2.png';
            document.getElementById('myimage3').src='/static/images/push2.png';            
        }
        else{
            return;
        }
    }   
    else{
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}



function rotaronoff()
{   
    
    if(mcboffstate==false)
    {
        if(isrotating==false)
        {
            isrotating=true;
            rotoroffstate=false;
            document.getElementById('cirmover2').style.animation="rotation 3s infinite linear";
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
                were++;
            },15);
            rangeMeter.value=1;
            rangeChange();
        }
        else
        {
            return;
        } 
    }  
    else{
        return;
    }
}

    var xx = [];
    var yy = [];
    var zz =[];
    var rangeMeter = document.querySelector('#range');

    var rangeShow = document.querySelector("#show");
    var rangeShow2 = document.querySelector("#show2");
    var rangeShow3 = document.querySelector("#show3");
    var rangeShow4 = document.querySelector("#show4");
    var rangeShow5 = document.querySelector("#show5");

    var rangeClock =  document.querySelector('#meter');
    var rangeClock2 =  document.querySelector('#meter2');

    var addToTable1 = document.querySelector('#addToTable');

    var table = document.querySelector('#table');


      // console.log(values[i]);
    for (var i = 0; i < 100; i++) {
      function rangeChange() {
        var rotateClock =  rangeMeter.value;
        
        rangeClock.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 70)) + 'deg)';
        if(rotateClock == 1){
            rangeClock2.style.transform = 'rotate(' + (-62 + ((9 * 1000) / 102)) + 'deg)';
        }
        else{
            rangeClock2.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 102)) + 'deg)';
        }
        
        
        // rangeShow.value = rotateClock;
          if(rangeMeter.value <= 8) {
            rangeShow.value = 400;
            rangeShow2.value = 2.3;
            rangeShow3.value = 1498;
            rangeShow4.value=rangeMeter.value;
            rangeShow5.value= "400 V";
            document.getElementById('cirmover2').style.animation="rotation 0.5s infinite linear";
            if (rangeMeter.value <= 7) {
              rangeShow.value = 350;
              rangeShow2.value = 1.8;
              rangeShow3.value = 1497;
              rangeShow4.value=rangeMeter.value;
              rangeShow5.value= "350 V";
              document.getElementById('cirmover2').style.animation="rotation 1s infinite linear";
              if (rangeMeter.value <= 6) {
                rangeShow.value = 300;
                rangeShow2.value = 1.5;
                rangeShow3.value = 1496;
                rangeShow4.value=rangeMeter.value;
                rangeShow5.value= "300 V";
                document.getElementById('cirmover2').style.animation="rotation 1.4s infinite linear";
                if (rangeMeter.value <= 5) {
                  rangeShow.value = 250;
                  rangeShow2.value = 1.2;
                  rangeShow3.value = 1495;
                  rangeShow4.value=rangeMeter.value;
                  rangeShow5.value= "250 V";
                  document.getElementById('cirmover2').style.animation="rotation 1.7s infinite linear";
                  if (rangeMeter.value <= 4) {
                    rangeShow.value = 200;
                    rangeShow2.value = 1;
                    rangeShow3.value = 1494;
                    rangeShow4.value=rangeMeter.value;
                    rangeShow5.value= "200 V";
                    document.getElementById('cirmover2').style.animation="rotation 2s infinite linear";
                    if (rangeMeter.value <= 3) {
                      rangeShow.value = 150;
                      rangeShow2.value = 0.8;
                      rangeShow3.value = 1490;
                      rangeShow4.value=rangeMeter.value;
                      rangeShow5.value= "150 V";
                      document.getElementById('cirmover2').style.animation="rotation 2.4s infinite linear";;
                      if (rangeMeter.value <= 2) {
                        rangeShow.value = 100;
                        rangeShow2.value = 0.6;
                        rangeShow3.value = 1480;
                        rangeShow4.value=rangeMeter.value;
                        rangeShow5.value= "100 V";
                        document.getElementById('cirmover2').style.animation="rotation 2.7s infinite linear";
                        if (rangeMeter.value <= 1) {
                          rangeShow.value = 50;
                          rangeShow2.value = 2.8;
                          rangeShow3.value = 0;
                          rangeShow4.value=rangeMeter.value;
                          rangeShow5.value= "50 V";
                          document.getElementById('cirmover2').style.animation="rotation 3s infinite linear";
                          if (rangeMeter.value <= 0) {
                            document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
                            rangeShow.value = 0;
                            rangeShow2.value = 0;
                            rangeShow3.value = 0;
                            rangeShow4.value=rangeMeter.value;
                            rangeShow5.value= "0 V";
                           
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }     
      rangeMeter.addEventListener('input', rangeChange);
    
    
    var clickcounter=0;
    var count = 1;
    var trace = {
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
          cell2.innerHTML = "Supply Voltage (V)";
          cell3.innerHTML = "Current (A)";
          cell4.innerHTML = "Speed (RPM)";

          cell1.innerHTML = count++;
          cell2.innerHTML = rangeShow.value;
          cell3.innerHTML = rangeShow2.value;
          cell4.innerHTML = rangeShow3.value
        }
        else
        {
          alert("Only maximum 10 readings are allowed.");
        } 
        if(clickcounter!=1){
        trace.y.push(cell4.innerHTML);
        trace.x.push(cell2.innerHTML);
        }
       })




   function drawgraph(){

     if(clickcounter<8)
     {
        alert("Alert ! Please take atleast 8 readings.");
     }
     else
     {
        var data = [trace];
        var layout={
            xaxis:{
                title:{
                    text:'Torque',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#ff0000'
                    }
                },
            },
            yaxis:{
                title:{
                    text:'Speed',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#ff0000'
                    }
                },
            }
        };

        Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
     }
   }