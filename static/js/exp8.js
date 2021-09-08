var rightconnection = false;
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
        var correct_connections_7_22 = [
            {
                "source": "ld7",
                "target": "ld22"
            },

            {
                "source": "ld22",
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
        var correct_connections_8_23 = [
            {
                "source": "ld8",
                "target": "ld23"
            },

            {
                "source": "ld23",
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
        var correct_connections_13_20 = [
            {
                "source": "ld13",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld13"
            }
        ];
        var correct_connections_14_21 = [
            {
                "source": "ld14",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld14"
            }
        ];
        var correct_connections_15_26 = [
            {
                "source": "ld15",
                "target": "ld26"
            },

            {
                "source": "ld26",
                "target": "ld15"
            }
        ];
        var correct_connections_16_29 = [
            {
                "source": "ld16",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld16"
            }
        ];
        var correct_connections_17_32 = [
            {
                "source": "ld17",
                "target": "ld32"
            },

            {
                "source": "ld32",
                "target": "ld17"
            }
        ];
        var correct_connections_18_24 = [
            {
                "source": "ld18",
                "target": "ld24"
            },

            {
                "source": "ld24",
                "target": "ld18"
            }
        ];
        var correct_connections_19_25 = [
            {
                "source": "ld19",
                "target": "ld25"
            },

            {
                "source": "ld25",
                "target": "ld19"
            }
        ];
        var correct_connections_27_28 = [
            {
                "source": "ld27",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld27"
            }
        ];
        var correct_connections_28_30 = [
            {
                "source": "ld28",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld28"
            }
        ];
        var correct_connections_29_31 = [
            {
                "source": "ld29",
                "target": "ld31"
            },

            {
                "source": "ld31",
                "target": "ld29"
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
                "target": "ld22"
            },

            {
                "source": "ld22",
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
                "target": "ld23"
            },

            {
                "source": "ld23",
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
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld13"
            },

            {
                "source": "ld14",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld14"
            },

            {
                "source": "ld15",
                "target": "ld26"
            },

            {
                "source": "ld26",
                "target": "ld15"
            },

            {
                "source": "ld16",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld16"
            },

            {
                "source": "ld17",
                "target": "ld32"
            },

            {
                "source": "ld32",
                "target": "ld17"
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
                "source": "ld19",
                "target": "ld25"
            },

            {
                "source": "ld25",
                "target": "ld19"
            },


            {
                "source": "ld16",
                "target": "ld31"
            },

            {
                "source": "ld16",
                "target": "ld31"
            },

            {
                "source": "ld30",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld30"
            },
            {
                "source": "ld28",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld28"
            },
            {
                "source": "ld29",
                "target": "ld31"
            },

            {
                "source": "ld29",
                "target": "ld31"
            }

        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_4 = false;
        var is_connected_2_5 = false;
        var is_connected_3_6 = false;
        var is_connected_7_9 = false;
        var is_connected_7_22 = false;
        var is_connected_8_10 = false;
        var is_connected_8_23 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var is_connected_13_20 = false;
        var is_connected_14_21 = false;
        var is_connected_15_26 = false;
        var is_connected_16_29 = false;
        var is_connected_17_32 = false;
        var is_connected_18_24 = false;
        var is_connected_19_25 = false;
        var is_connected_27_28 = false;
        var is_connected_28_30 = false;
        var is_connected_29_31 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_4) {
                is_connected_1_4 = correct_connections_1_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_2_5) {
                is_connected_2_5 = correct_connections_2_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_3_6) {
                is_connected_3_6 = correct_connections_3_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_7_9) {
                is_connected_7_9 = correct_connections_7_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_7_22) {
                is_connected_7_22 = correct_connections_7_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
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

            if (!is_connected_8_10) {
                is_connected_8_10 = correct_connections_8_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_8_23) {
                is_connected_8_23 = correct_connections_8_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_9_11) {
                is_connected_9_11 = correct_connections_9_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_10_12) {
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_13_20) {
                is_connected_13_20 = correct_connections_13_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_14_21) {
                is_connected_14_21 = correct_connections_14_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_15_26) {
                is_connected_15_26 = correct_connections_15_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_16_29) {
                is_connected_16_29 = correct_connections_16_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_17_32) {
                is_connected_17_32 = correct_connections_17_32.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_18_24) {
                is_connected_18_24 = correct_connections_18_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_19_25) {
                is_connected_19_25 = correct_connections_19_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_27_28) {
                is_connected_27_28 = correct_connections_27_28.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_28_30) {
                is_connected_28_30 = correct_connections_28_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
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

            if (!is_connected_29_31) {
                is_connected_29_31 = correct_connections_29_31.find(function (conn) {
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

        if (is_connected_29_31 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.querySelector("#connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            return;
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
                e32 = prepare3("ld32");

        });
    });
}


var rangeMeter = document.querySelector('#range1');
var rangeMeter2 = document.querySelector('#range2');
var rangeMeter3 = document.querySelector('#range3');
var rangeMeter4 = document.querySelector('#range4');
var rangeMeter5 = document.querySelector('#range5');


var rangeShow = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");
var rangeShow3 = document.querySelector("#show3");
var rangeShow4 = document.querySelector("#show4");
var rangeShow5 = document.querySelector("#show5");
var rangeShow6 = document.querySelector("#show6");
var rangeShow7 = document.querySelector("#show7");
var rangeShow8 = document.querySelector("#show8");
var rangeShow9 = document.querySelector("#show9");
var rpm = 0;

var rangeClock = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');
var rangeClock3 = document.querySelector('#meter3');
var rangeClock4 = document.querySelector('#meter4');


var mcboffstate = true;
function mcbonoff() {
    if (rightconnection == true) {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';
            document.getElementById("range1").disabled = false;
            rangeClock.style.transform = 'rotate(' + (-62 + (1000 / 70)) + 'deg)';
            rangeMeter.value = 1;

            rangeShow.value = rangeMeter.value;
            rangeShow2.value = "1200 RPM";

            var y = table1.insertRow(1);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            cell1.innerHTML = 1200;

            document.getElementById("check-button").disabled = true;
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}




rangeMeter.addEventListener('input', rangeChange);

rangeMeter3.addEventListener('input', rangeChange2);
rangeMeter4.addEventListener('input', rangeChange2);
rangeMeter5.addEventListener('input', rangeChange2);

rangeMeter2.addEventListener('input', rangeChange3);


var ocCounter = 1;
var rpm = 0;

function rangeChange() {
    var rotateClock = rangeMeter.value;
    rangeShow.value = rangeMeter.value;
    rangeShow3.value = rangeMeter2.value;

    rangeClock.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 70)) + 'deg)';

    if (rpm == 1450) {
        rpm += 41;
    }
    else {
        rpm = 1150 + (rangeMeter.value * 50) + (rangeMeter2.value * 50);
    }
    rangeShow2.value = String(rpm) + " RPM";

    ocCounter++;
    var y = table1.insertRow(ocCounter);
    var cell1 = y.insertCell(0);
    cell1.setAttribute('style', 'text-align: center;');
    cell1.innerHTML = rpm;

    if (rpm == 1491) {
        document.getElementById("range1").disabled = true;
        document.getElementById("range3").disabled = false;
        document.getElementById("range4").disabled = false;
        document.getElementById("range5").disabled = false;
        setTimeout(function () {
            alert("Now turn on 3 phase variac");
        }, 500);
    }

}

function rangeChange2() {

    rangeMeter3.value = 1;
    rangeMeter4.value = 1;
    rangeMeter5.value = 1;
    document.getElementById("range3").disabled = true;
    document.getElementById("range4").disabled = true;
    document.getElementById("range5").disabled = true;

    rangeShow3.value = "15%";
    rangeShow4.value = "15%";
    rangeShow5.value = "15%";

    document.getElementById("range2").disabled = false;

    flucFunc(0.55, 0.2, 16.8, 14.2, 60, 48.49, 19.9);
    setTimeout(function () {
        alert("Start changing Field value of DC Motor");
    }, 2500);

}


function rangeChange3() {
    rangeShow6.value = rangeMeter2.value;
    if (rangeMeter2.value == 1) {
        rpm = 1494;
        rangeShow2.value = String(rpm) + " RPM";
        ocCounter++;
        var y = table1.insertRow(ocCounter);
        var cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = rpm;
        flucFunc(0.54, 0.15, 16.8, 14.4, 65, 64.66, 15.39);
    }
    else if (rangeMeter2.value == 2) {
        rpm = 1505;
        rangeShow2.value = String(rpm) + " RPM";
        ocCounter++;
        var y = table1.insertRow(ocCounter);
        var cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = rpm;
        flucFunc(0.50, 0.2, 16.8, 15.0, 70, 48.49, 17.33);
        document.getElementById("range2").disabled = true;
    }
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
count = 1;
function flucFunc(acma, acmi, avma, avmi, mf, xd, xq) {
    var y = table2.insertRow(count);
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
    cell1.innerHTML = count;
    cell2.innerHTML = acma;
    cell3.innerHTML = acmi;
    cell4.innerHTML = avma;
    cell5.innerHTML = avmi;
    cell6.innerHTML = xd;
    cell7.innerHTML = xq;
    var x = table3.insertRow(count);
    var cell1 = x.insertCell(0);
    cell1.setAttribute('style', 'text-align: center;');
    var cell2 = x.insertCell(1);
    cell2.setAttribute('style', 'text-align: center;');
    var cell3 = x.insertCell(2);
    cell3.setAttribute('style', 'text-align: center;');
    cell1.innerHTML = count;
    cell2.innerHTML = mf;
    cell3.innerHTML = -mf;
    fluc2(acma, acmi, avma, avmi, mf);
    count++;
}

async function fluc2(acma, acmi, avma, avmi, mf) {
    var loopVal = rangeMeter2.value;
    while (rangeMeter2.value == loopVal) {
        rangeShow7.value = mf;
        rangeClock2.style.transform = 'rotate(' + (-120 + (((mf / 10) * 1000) / 90)) + 'deg)';
        rangeShow8.value = acma;
        rangeClock3.style.transform = 'rotate(' + (-62 + (((acma + 3) * 1000) / 90)) + 'deg)';
        rangeShow9.value = avmi;
        rangeClock4.style.transform = 'rotate(' + (-62 + ((((avma / 10) + 0.5) * 1000) / 90)) + 'deg)';
        await sleep(1500);

        rangeShow7.value = -mf;
        rangeClock2.style.transform = 'rotate(' + (-120 + (((mf / 20) * 1000) / 90)) + 'deg)';
        rangeShow8.value = acmi;
        rangeClock3.style.transform = 'rotate(' + (-62 + (((acma + 1) * 1000) / 90)) + 'deg)';
        rangeShow9.value = avma;
        rangeClock4.style.transform = 'rotate(' + (-62 + ((((avma / 10) + 2.5) * 1000) / 90)) + 'deg)';
        await sleep(1500);
    }
}



