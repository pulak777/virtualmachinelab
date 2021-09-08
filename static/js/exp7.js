var sctest = false;

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
            e33 = prepare3("ld33"),
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
        var correct_connections_7_32 = [
            {
                "source": "ld7",
                "target": "ld32"
            },

            {
                "source": "ld32",
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
        var correct_connections_8_33 = [
            {
                "source": "ld8",
                "target": "ld33"
            },

            {
                "source": "ld33",
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
        var correct_connections_13_30 = [
            {
                "source": "ld13",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld13"
            }
        ];
        var correct_connections_14_31 = [
            {
                "source": "ld14",
                "target": "ld31"
            },

            {
                "source": "ld31",
                "target": "ld14"
            }
        ];
        var correct_connections_15_21 = [
            {
                "source": "ld15",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld15"
            }
        ];
        var correct_connections_15_23 = [
            {
                "source": "ld15",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld15"
            }
        ];
        var correct_connections_16_20 = [
            {
                "source": "ld16",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld16"
            }
        ];
        var correct_connections_16_22 = [
            {
                "source": "ld16",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld16"
            }
        ];

        var correct_connections_17_16 = [
            {
                "source": "ld17",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld17"
            }
        ];
        var correct_connections_18_26 = [
            {
                "source": "ld18",
                "target": "ld26"
            },

            {
                "source": "ld26",
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
        var correct_connections_24_27 = [
            {
                "source": "ld24",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld24"
            }
        ];
        var correct_connections_32_28 = [
            {
                "source": "ld32",
                "target": "ld28"
            },

            {
                "source": "ld28",
                "target": "ld32"
            }
        ];
        var correct_connections_33_29 = [
            {
                "source": "ld33",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld33"
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
                "target": "ld32"
            },

            {
                "source": "ld32",
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
                "target": "ld33"
            },

            {
                "source": "ld33",
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
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld13"
            },

            {
                "source": "ld14",
                "target": "ld31"
            },

            {
                "source": "ld31",
                "target": "ld14"
            },

            {
                "source": "ld15",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld15"
            },

            {
                "source": "ld16",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld16"
            },
            {
                "source": "ld17",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld17"
            },


            {
                "source": "ld18",
                "target": "ld26"
            },

            {
                "source": "ld26",
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
                "source": "ld24",
                "target": "ld27"
            },

            {
                "source": "ld27",
                "target": "ld24"
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
                "source": "ld33",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld33"
            }

        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_4 = false;
        var is_connected_2_5 = false;
        var is_connected_3_6 = false;
        var is_connected_7_9 = false;
        var is_connected_7_32 = false;
        var is_connected_8_10 = false;
        var is_connected_8_33 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var is_connected_13_30 = false;
        var is_connected_14_31 = false;
        var is_connected_15_21 = false;
        var is_connected_15_23 = false;
        var is_connected_16_20 = false;
        var is_connected_16_22 = false;
        var is_connected_17_16 = false;
        var is_connected_18_26 = false;
        var is_connected_19_25 = false;
        var is_connected_24_27 = false;
        var is_connected_32_28 = false;
        var is_connected_33_29 = false;
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

            if (!is_connected_7_32) {
                is_connected_7_32 = correct_connections_7_32.find(function (conn) {
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

            if (!is_connected_8_33) {
                is_connected_8_33 = correct_connections_8_33.find(function (conn) {
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

            if (!is_connected_13_30) {
                is_connected_13_30 = correct_connections_13_30.find(function (conn) {
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

            if (!is_connected_14_31) {
                is_connected_14_31 = correct_connections_14_31.find(function (conn) {
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

            if (!is_connected_15_21) {
                is_connected_15_21 = correct_connections_15_21.find(function (conn) {
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

            if (!is_connected_15_23) {
                is_connected_15_23 = correct_connections_15_23.find(function (conn) {
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

            if (!is_connected_16_20) {
                is_connected_16_20 = correct_connections_16_20.find(function (conn) {
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

            if (!is_connected_16_22) {
                is_connected_16_22 = correct_connections_16_22.find(function (conn) {
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

            if (!is_connected_17_16) {
                is_connected_17_16 = correct_connections_17_16.find(function (conn) {
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

            if (!is_connected_18_26) {
                is_connected_18_26 = correct_connections_18_26.find(function (conn) {
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

            if (!is_connected_24_27) {
                is_connected_24_27 = correct_connections_24_27.find(function (conn) {
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

            if (!is_connected_32_28) {
                is_connected_32_28 = correct_connections_32_28.find(function (conn) {
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

            if (!is_connected_33_29) {
                is_connected_33_29 = correct_connections_33_29.find(function (conn) {
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
        if (sctest == false) {
            if (is_connected_33_29 && !is_connected_15_23 && !is_connected_16_22 && !is_connected_17_16 && !unallowed_connection_present) {
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
        }
        else {
            if (is_connected_33_29 && !is_connected_15_21 && !is_connected_16_20 && !unallowed_connection_present) {
                alert("Alert ! Correct connection proceed to take reading.");
                document.getElementById("check-button").disabled = true;
                document.querySelector("#connection-table").innerHTML = "";
                rightconnection = true;
                disable_all_final();
                return;
            }
            else {
                alert("Alert ! Incorrect connection.");

                return;
            }
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
                //e15 = prepare3("ld15"),
                //e16 = prepare3("ld16"),
                //e17 = prepare3("ld17"),
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
                e33 = prepare3("ld33");

        });
    });
}

function disable_all_final() {
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
                e32 = prepare3("ld32"),
                e33 = prepare3("ld33");

        });
    });
}


var mcboffstate = true;
var isalternatoron = false;
var alternatoroffstate = true;
function mcbonoff() {
    if (rightconnection == true) {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';
            document.getElementById("range").disabled = false;
            rangeClock.style.transform = 'rotate(' + (-62 + (1000 / 70)) + 'deg)';
            rangeMeter.value = 1;

            rangeShow.value = rangeMeter.value;
            rangeShow2.value = "1200 RPM";
            if (sctest == false) {
                var y = table1.insertRow(1);
                var cell1 = y.insertCell(0);
                cell1.setAttribute('style', 'text-align: center;');
                cell1.innerHTML = 1200;
                document.getElementById("show6").style.color = "white";
            }
            else {
                var y = table2.insertRow(1);
                var cell1 = y.insertCell(0);
                cell1.setAttribute('style', 'text-align: center;');
                cell1.innerHTML = 1200;
                document.getElementById("show6").style.color = "black";
                document.getElementById("show7").style.color = "white";
            }

            document.getElementById("check-button").disabled = true;
        }
        else if (mcboffstate == false && sctest == false && alternatoroffstate == false) {
            rightconnection = false;
            mcboffstate = true;
            isalternatoron = false;
            sctest = true;
            document.getElementById('myimage').src = '/static/images/mcboff.png';
            document.getElementById('myimage1').src = '/static/images/push1.png';
            document.getElementById('myimage2').src = '/static/images/push1.png';
            document.getElementById('myimage3').src = '/static/images/push1.png';
            document.getElementById('altonoff').src = '/static/images/switchoff.png';

            document.getElementById("show6").style.color = "black";

            rangeMeter.value = 0;
            rangeMeter2.value = 0;
            rangeMeter3.value = 0;

            rangeShow.value = 0;
            rangeShow2.value = 0;
            rangeShow3.value = 0;
            rangeShow4.value = 0;
            rangeShow5.value = 0;
            rangeShow6.value = 0;
            rangeShow7.value = 0;

            rangeClock.style.transform = 'rotate(' + (-62) + 'deg)';
            rangeClock2.style.transform = 'rotate(' + (-62) + 'deg)';
            rangeClock4.style.transform = 'rotate(' + (-62) + 'deg)';

            document.getElementById("graph").disabled = true;
            document.getElementById("addToTable").disabled = true;

            document.getElementById("check-button").disabled = false;
            document.getElementById("range3").disabled = true;
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

function alternatoronoff() {
    if (mcboffstate == false) {
        if (isalternatoron == false && rpm == 1500) {
            if (sctest == false) {
                isalternatoron = true;
                alternatoroffstate = false;
                document.getElementById('altonoff').src = '/static/images/switchon.png';
                document.getElementById("graph").disabled = true;
                document.getElementById("addToTable").disabled = false;
                document.getElementById("range").disabled = true;
                document.getElementById("range2").disabled = true;
                document.getElementById("range3").disabled = false;

                rangeMeter3.value = 1;

                rangeShow4.value = 1;
                rangeShow5.value = 0.4;
                rangeShow7.value = 150;

                rangeClock2.style.transform = 'rotate(' + (-62 + (1000 / 90)) + 'deg)';
                rangeClock4.style.transform = 'rotate(' + (-62 + (1000 / 70)) + 'deg)';
                setTimeout(function () {
                    alert("Start taking readings by clicking 'Add to table' button");
                }, 500);

                rpm = 0;
            }
            else {
                isalternatoron = true;
                alternatoroffstate = false;
                document.getElementById('altonoff').src = '/static/images/switchon.png';
                document.getElementById("graph").disabled = false;
                document.getElementById("addToTable").disabled = false;
                document.getElementById("range").disabled = true;
                document.getElementById("range2").disabled = true;
                document.getElementById("range3").disabled = false;

                rangeMeter3.value = 1;

                rangeShow4.value = 1;
                rangeShow5.value = 0.4;
                rangeShow6.value = 0.5;

                rangeClock2.style.transform = 'rotate(' + (-62 + (1000 / 90)) + 'deg)';
                rangeClock3.style.transform = 'rotate(' + (-62 + (1000 / 70)) + 'deg)';
                setTimeout(function () {
                    alert("Start taking readings by clicking 'Add to table' button");
                }, 500);

            }

        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

var rangeMeter = document.querySelector('#range');
var rangeMeter2 = document.querySelector('#range2');
var rangeMeter3 = document.querySelector('#range3');

var rangeShow = document.querySelector("#show");
var rangeShow2 = document.querySelector("#show2");
var rangeShow3 = document.querySelector("#show3");
var rangeShow4 = document.querySelector("#show4");
var rangeShow5 = document.querySelector("#show5");
var rangeShow6 = document.querySelector("#show6");
var rangeShow7 = document.querySelector("#show7");
var rpm = 0;

var rangeClock = document.querySelector('#meter');
var rangeClock2 = document.querySelector('#meter2');
var rangeClock3 = document.querySelector('#meter3');
var rangeClock4 = document.querySelector('#meter4');

rangeMeter.addEventListener('input', rangeChange);
rangeMeter2.addEventListener('input', rangeChange);

rangeMeter3.addEventListener('input', function () {
    if (sctest == false) {
        rangeChange2();
    }
    else {
        rangeChange3();
    }

});
var ocCounter = 1;
var scCounter = 1;
var rpm = 0;

function rangeChange() {
    var rotateClock = rangeMeter.value;
    rangeShow.value = rangeMeter.value;
    rangeShow3.value = rangeMeter2.value;

    rangeClock.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 70)) + 'deg)';

    rpm = 1150 + (rangeMeter.value * 50) + (rangeMeter2.value * 50);
    rangeShow2.value = String(rpm) + " RPM";

    if (rpm == 1450 && isalternatoron == false) {
        document.getElementById("range").disabled = true;
        document.getElementById("range2").disabled = false;
        setTimeout(function () {
            alert("Now increase DC Motor Field value");
        }, 500);
        rangeShow2.value = String(rpm) + " RPM";
    }
    if (rpm == 1500 && isalternatoron == false) {
        document.getElementById("range").disabled = true;
        document.getElementById("range2").disabled = true;
        setTimeout(function () {
            alert("Required speed achived! Turn on the alternator by clicking on the red switch!");
        }, 500);
    }
    if (sctest == false) {
        ocCounter++;
        var y = table1.insertRow(ocCounter);
        var cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = rpm;
    }
    else {
        scCounter++;
        var y = table2.insertRow(scCounter);
        var cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = rpm;
    }

}

function rangeChange2() {

    var rotateClock = rangeMeter3.value;
    rangeShow4.value = rangeMeter3.value;

    rangeClock2.style.transform = 'rotate(' + (-62 + (((rotateClock) * 1000) / 90)) + 'deg)';
    rangeClock4.style.transform = 'rotate(' + (-62 + (((rotateClock) * 1000) / 70)) + 'deg)';

    // rangeShow.value = rotateClock;
    if (rangeMeter3.value == 8) {
        rangeShow5.value = 3.2;
        rangeShow7.value = 390;
    }
    else if (rangeMeter3.value == 7) {
        rangeShow5.value = 2.8;
        rangeShow7.value = 375;
    }
    else if (rangeMeter3.value == 6) {
        rangeShow5.value = 2.4;
        rangeShow7.value = 360;
    }
    else if (rangeMeter3.value == 5) {
        rangeShow5.value = 2.0;
        rangeShow7.value = 345;
    }
    else if (rangeMeter3.value == 4) {
        rangeShow5.value = 1.6;
        rangeShow7.value = 330;
    }
    else if (rangeMeter3.value == 3) {
        rangeShow5.value = 1.2;
        rangeShow7.value = 300;
    }
    else if (rangeMeter3.value == 2) {
        rangeShow5.value = 0.8;
        rangeShow7.value = 255;
    }
    else if (rangeMeter3.value == 1) {
        rangeShow5.value = 0.4;
        rangeShow7.value = 150;
    }
    else {
        rangeShow5.value = 0;
        rangeShow7.value = 0;
    }
}

function rangeChange3() {
    var rotateClock = rangeMeter3.value;
    rangeShow4.value = rangeMeter3.value;

    rangeClock2.style.transform = 'rotate(' + (-62 + (((rotateClock) * 1000) / 90)) + 'deg)';
    rangeClock3.style.transform = 'rotate(' + (-62 + (((rotateClock) * 1000) / 70)) + 'deg)';

    if (rangeMeter3.value == 8) {
        rangeShow5.value = 3.2;
        rangeShow6.value = 9.2;
    }
    else if (rangeMeter3.value == 7) {
        rangeShow5.value = 2.8;
        rangeShow6.value = 8.3;
    }
    else if (rangeMeter3.value == 6) {
        rangeShow5.value = 2.4;
        rangeShow6.value = 6.6;
    }
    else if (rangeMeter3.value == 5) {
        rangeShow5.value = 2.0;
        rangeShow6.value = 6.0;
    }
    else if (rangeMeter3.value == 4) {
        rangeShow5.value = 1.6;
        rangeShow6.value = 4.4;
    }
    else if (rangeMeter3.value == 3) {
        rangeShow5.value = 1.2;
        rangeShow6.value = 3.2;
    }
    else if (rangeMeter3.value == 2) {
        rangeShow5.value = 0.8;
        rangeShow6.value = 2.1;
    }
    else if (rangeMeter3.value == 1) {
        rangeShow5.value = 0.4;
        rangeShow6.value = 0.5;
    }
    else {
        rangeShow5.value = 0;
        rangeShow6.value = 0;
    }
}



var clickcounteroc = 0;
var clickcountersc = 0;
var count = 1;
var count2 = 1;
var trace1 = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
};

var trace2 = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
}

var resistance = 0;
addToTable.addEventListener('click', () => {
    if (sctest == false) {
        clickcounteroc++;
        if (clickcounteroc <= 8) {
            var y = table3.insertRow(clickcounteroc);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count++;
            cell2.innerHTML = 1500;
            cell3.innerHTML = rangeShow5.value;
            cell4.innerHTML = rangeShow7.value;
        }
        else {
            alert("Only 8 readings are allowed.");

        }
        if (clickcounteroc != 1) {
            trace1.y.push(cell4.innerHTML);
            trace1.x.push(cell3.innerHTML);
        }
        if (clickcounteroc == 8) {
            setTimeout(function () {
                alert("Now turn off the MCB and make new connection for short circuit test. \n Click on number '20' and '21' to remove these connections. And then follow further instructions");
            }, 500);
            document.querySelector("#connection-table").innerHTML = `<b>For Short Circuit Test</b>
                <table>
                  <tr>
                    <td><B>From</B></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>7</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>13</td>
                    <td>14</td>
                    <td><b>15</b></td>
                    <td><b>16</b></td>
                    <td><b>17</b></td>
                    <td>18</td>
                    <td>19</td>
                    <td>24</td>
                    <td>32</td>
                    <td>33</td>
                  </tr>
                  <tr>
                    <td><B>To</B></td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>9</td>
                    <td>10</td>
                    <td>32</td>
                    <td>33</td>
                    <td>11</td>
                    <td>12</td>
                    <td>30</td>
                    <td>31</td>
                    <td><b>23</b></td>
                    <td><b>22</b></td>
                    <td><b>16</b></td>
                    <td>26</td>
                    <td>25</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                  </tr>
                </table>`;
        }
    }
    else {
        clickcountersc++;
        if (clickcountersc <= 8) {
            var y = table4.insertRow(clickcountersc);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count2++;
            cell2.innerHTML = 1500;
            cell3.innerHTML = rangeShow5.value;
            cell4.innerHTML = rangeShow6.value;
        }
        else {
            alert("Only 8 readings are allowed.");
        }
        if (clickcountersc != 1) {
            trace2.y.push(cell4.innerHTML);
            trace2.x.push(cell3.innerHTML);
        }
    }


})




function drawgraph() {

    if (clickcounteroc < 8 || clickcountersc < 8) {
        alert("Alert ! Please take 8 readings for each experiment.");
    }
    else {
        var data = [trace1];
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
                    text: 'Induced EMF',
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

        var data2 = [trace2];
        var layout2 = {
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
        Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });
    }
}