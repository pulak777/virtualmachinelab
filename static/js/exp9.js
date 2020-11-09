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
            e5 = prepare3("ld5"),
            e6 = prepare2("ld6"),
            e7 = prepare3("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare1("ld9"),
            e10 = prepare2("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            
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
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_2_4 = [
            {
                "source": "ld2",
                "target": "ld4"
            },
    
            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
        var correct_connections_3_12 = [
            {
                "source": "ld12",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld12"
            }
        ];
        var correct_connections_4_5 = [
            {
                "source": "ld4",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld4"
            }
        ];
        var correct_connections_6_7 = [
            {
                "source": "ld6",
                "target": "ld7"
            },
    
            {
                "source": "ld7",
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
                "source": "ld12",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld12"
            },
            {
                "source": "ld4",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld4"
            },
            {
                "source": "ld6",
                "target": "ld7"
            },
            {
                "source": "ld7",
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
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3= false;
        var is_connected_2_4 = false;
        var is_connected_3_12 = false;
        var is_connected_4_5 = false;
        var is_connected_6_7= false;
        var is_connected_7_8 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
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

            if(!is_connected_2_4){
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
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

            if(!is_connected_3_12){
                is_connected_3_12 = correct_connections_3_12.find(function (conn) {
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

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
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

            if(!is_connected_6_7){
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
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

            if(!is_connected_9_11){
                is_connected_9_11= correct_connections_9_11.find(function (conn) {
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
        //removed for faster debugging
        //is_connected_2_4 && is_connected_3_12 && is_connected_4_5 && is_connected_6_7 && is_connected_7_8 && is_connected_9_11 && is_connected_10_12 &&
        if ( is_connected_10_12 && !unallowed_connection_present) 
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
            e5 = prepare3("ld5"),
            e6 = prepare2("ld6"),
            e7 = prepare3("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare1("ld9"),
            e10 = prepare2("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),

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
            mcboffstate = false;
            document.getElementById('myimage').src='/static/images/mcbon.png';
            document.getElementById('myimage1').src='/static/images/push2.png';
            document.getElementById('myimage2').src='/static/images/push2.png';
            document.getElementById('myimage3').src='/static/images/push2.png';            
        }
        
    }   
}



function rotaronoff()
{   
    
    if(mcboffstate==true)
    {
        alert("Alert ! Please complete the connection first");
    }
    else
    {
        if(isrotating==false)
        {
            isrotating=true;
            rotoroffstate=false;
            document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
            document.getElementById("graph1").disabled=false;
            document.getElementById("graph2").disabled=false;
            document.getElementById("graph3").disabled=false;
            document.getElementById("addToTable1").disabled=false;
            document.getElementById("addToTable2").disabled=false;
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
    var rangeShow6 = document.querySelector("#show6");
    var rangeShow7 = document.querySelector("#show7");

    var rangeClock =  document.querySelector('.meter-clock');
    var rangeClock2 =  document.querySelector('.meter-clock2');
    var rangeClock3 =  document.querySelector('.meter-clock3');

    var meterColor = document.querySelector('.meter-shape');
    var meterColor2 = document.querySelector('.meter-shape2');
    var meterColor3 = document.querySelector('.meter-shape3');

    var addToTable1 = document.querySelector('#addToTable1');
    var addToTable2 = document.querySelector('#addToTable2');

    var table1 = document.querySelector('#table1');
    var table2 = document.querySelector('#table2');


      // console.log(values[i]);
    for (var i = 0; i < 100; i++) {
      function rangeChange() {
        var rotateClock =  rangeMeter.value;
        
        rangeClock.style.transform = 'rotate(' + -30+ 'deg)';
        if(rotateClock == 1){
            rangeClock2.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 50)) + 'deg)';
        }
        else{
            rangeClock2.style.transform = 'rotate(' + (-42 + ((rotateClock * 1000) / 200)) + 'deg)';
        }
        
        rangeClock3.style.transform = 'rotate(' + (-62 + ((rotateClock * 1150) / 90)) + 'deg)';
        
        // rangeShow.value = rotateClock;
        if (rangeMeter.value <= 9) {
          rangeShow.value = 200;
          rangeShow2.value = 10.4;
          rangeShow3.value = 1470;
          rangeShow4.value=1250;
          rangeShow5.value=4.3;
          rangeShow6.value=27;
          rangeShow7.value=9;
          document.getElementById('cirmover2').style.animation="rotation 2.1s infinite linear";
          if(rangeMeter.value <= 8) {
            rangeShow.value = 200;
            rangeShow2.value = 9.5;
            rangeShow3.value = 1390;
            rangeShow4.value=1330;
            rangeShow5.value=3.7;
          rangeShow6.value=21;
          rangeShow7.value=8;
            document.getElementById('cirmover2').style.animation="rotation 1.9s infinite linear";
            if (rangeMeter.value <= 7) {
              rangeShow.value = 200;
              rangeShow2.value = 8.4;
              rangeShow3.value = 1330;
              rangeShow4.value=1380;
              rangeShow5.value=3.1;
          rangeShow6.value=16;
          rangeShow7.value=7;
              document.getElementById('cirmover2').style.animation="rotation 1.7s infinite linear";
              if (rangeMeter.value <= 6) {
                rangeShow.value = 200;
                rangeShow2.value = 7.3;
                rangeShow3.value = 1240;
                rangeShow4.value=1415;
                rangeShow5.value=2.5;
                rangeShow6.value=12;
                rangeShow7.value=6;
                document.getElementById('cirmover2').style.animation="rotation 1.5s infinite linear";
                if (rangeMeter.value <= 5) {
                  rangeShow.value = 200;
                  rangeShow2.value = 5.8;
                  rangeShow3.value = 840;
                  rangeShow4.value=1440;
                  rangeShow5.value=2;
                  rangeShow6.value=8;
                  rangeShow7.value=5;
                  document.getElementById('cirmover2').style.animation="rotation 1.3s infinite linear";
                  if (rangeMeter.value <= 4) {
                    rangeShow.value = 200;
                    rangeShow2.value = 4.8;
                    rangeShow3.value = 600;
                    rangeShow4.value=1465;
                    rangeShow5.value=1.5;
                    rangeShow6.value=5;
                    rangeShow7.value=4;
                    document.getElementById('cirmover2').style.animation="rotation 1.1s infinite linear";
                    if (rangeMeter.value <= 3) {
                      rangeShow.value = 200;
                      rangeShow2.value = 4.5;
                      rangeShow3.value = 420;
                      rangeShow4.value=1475;
                      rangeShow5.value=1;
                      rangeShow6.value=3;
                      rangeShow7.value=3;
                      document.getElementById('cirmover2').style.animation="rotation 0.9s infinite linear";;
                      if (rangeMeter.value <= 2) {
                        rangeShow.value = 200;
                        rangeShow2.value = 4.2;
                        rangeShow3.value = 380;
                        rangeShow4.value=1480;
                        rangeShow5.value=0.5;
                        rangeShow6.value=2;
                        rangeShow7.value=2;
                        document.getElementById('cirmover2').style.animation="rotation 0.7s infinite linear";
                        if (rangeMeter.value <= 1) {
                          rangeShow.value = 200;
                          rangeShow2.value = 4.1;
                          rangeShow3.value = 224;
                          rangeShow4.value=1490;
                          rangeShow5.value=0.0;
                          rangeShow6.value=0.0;
                          rangeShow7.value=1;
                          document.getElementById('cirmover2').style.animation="rotation 0.5s infinite linear";
                          if (rangeMeter.value <= 0) {
                            document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
                            rangeShow.value = 200;
                            rangeShow2.value = 0;
                            rangeShow3.value = 0;
                            rangeShow4.value=0;
                            rangeShow5.value=0;
                            rangeShow6.value=0;
                            rangeShow7.value=0;
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
    } 
    
    
    var clickcounter1=0;
    var count1 = 1;
    var trace1 = {
        x: [],
        y: [],
        z: [],
        type: 'scatter'
      };

    var resistance=0;
    addToTable1.addEventListener('click', () => {
        clickcounter1++;
  
        if(clickcounter1<=10)
        {
          var y = table1.insertRow(clickcounter1);
          var cell1 = y.insertCell(0);
          var cell2 = y.insertCell(1);
          var cell3 = y.insertCell(2);
          var cell4 = y.insertCell(3);
          var cell5 = y.insertCell(4);
          var cell6 = y.insertCell(5);
          var cell7 = y.insertCell(6);
          cell1.innerHTML = "SN";
          cell2.innerHTML = "Voltmeter";
          cell3.innerHTML = "Ammeter";
          cell4.innerHTML = "Wattmeter";
          cell5.innerHTML = "Speed";
          cell6.innerHTML = "S1";
          cell7.innerHTML = "S2";

          cell1.innerHTML = count1++;
          cell2.innerHTML = rangeShow.value;
          cell3.innerHTML = rangeShow2.value;
          cell4.innerHTML = rangeShow3.value
          if(rangeMeter.value==0)
          {
            resistance=0;
            cell5.innerHTML = 0;
            cell6.innerHTML = 0;
            cell7.innerHTML = 0;
          }
          else if(rangeMeter.value==1)
          {
            resistance=1;
            cell5.innerHTML = 1490;
            cell6.innerHTML = 0;
            cell7.innerHTML = 0;
          }
          else if(rangeMeter.value==2)
          {
            resistance=2;
            cell5.innerHTML = 1480;
            cell6.innerHTML = 0.5;
          cell7.innerHTML = 2;
          }
          else if(rangeMeter.value==3)
          {
            resistance=3;
            cell5.innerHTML = 1475;
            cell6.innerHTML = 1;
            cell7.innerHTML = 3;
          }
          else if(rangeMeter.value==4)
          {
            resistance=4;
            cell5.innerHTML = 1465;
            cell6.innerHTML = 1.5;
            cell7.innerHTML = 5;
          }
          else if(rangeMeter.value==5)
          {
            resistance=5;
            cell5.innerHTML = 1440;
            cell6.innerHTML = 2;
            cell7.innerHTML = 8;
          }
          else if(rangeMeter.value==6)
          {
            resistance=6;
            cell5.innerHTML = 1415;
            cell6.innerHTML = 2.5;
            cell7.innerHTML = 12;
          }
          else if(rangeMeter.value==7)
          {
            resistance=7;
            cell5.innerHTML = 1380;
            cell6.innerHTML = 3.1;
            cell7.innerHTML = 16;
          }
          else if(rangeMeter.value==8)
          {
            resistance=8;
            cell5.innerHTML = 1330;
            cell6.innerHTML = 3.7;
            cell7.innerHTML = 21;
          }
          else if(rangeMeter.value==9)
          {
            resistance=9;
            cell5.innerHTML = 1250;
            cell6.innerHTML = 4.3;
            cell7.innerHTML = 27;
          }
        }
        else
        {
          alert("Only maximum 10 readings are allowed.");
        } 
        
        trace1.y.push(cell5.innerHTML);
  
       })



       var clickcounter2=0;
       var count2 = 1;
       var trace2 = {
           x: [],
           y: [],
           z: [],
           type: 'scatter'
         };

         var trace3 = {
            x: [],
            y: [],
            z: [],
            type: 'scatter'
          };

       addToTable2.addEventListener('click', () => {
        clickcounter2++;
  
        if(clickcounter2<=10)
        {
          var x = table2.insertRow(clickcounter2);
          var cell1 = x.insertCell(0);
          var cell2 = x.insertCell(1);
          var cell3 = x.insertCell(2);
          var cell4 = x.insertCell(3);
          var cell5 = x.insertCell(4);
          var cell6 = x.insertCell(5);

          cell1.innerHTML = "SN";
          cell2.innerHTML = "Torque";
          cell3.innerHTML = "Output Power";
          cell4.innerHTML = "Input Power";
          cell5.innerHTML = "Efficiency";
          cell6.innerHTML = "Power Factor";

          cell1.innerHTML = count2++;
          if(rangeMeter.value==0)
          {
            cell2.innerHTML = 0;
            cell3.innerHTML = 0;
            cell4.innerHTML = 0;
            cell5.innerHTML = 0;
            cell6.innerHTML = 0;
          }
          else if(rangeMeter.value==1)
          {
            cell2.innerHTML = 0;
            cell3.innerHTML = 0;
            cell4.innerHTML = 224;
            cell5.innerHTML = 0;
            cell6.innerHTML = 0.27;
          }
          else if(rangeMeter.value==2)
          {
            cell2.innerHTML = 1;
            cell3.innerHTML = 115.9;
            cell4.innerHTML = 380;
            cell5.innerHTML = 30.5;
            cell6.innerHTML = 0.45;
          }
          else if(rangeMeter.value==3)
          {
            cell2.innerHTML = 1.5;
            cell3.innerHTML = 154.5;
            cell4.innerHTML = 420;
            cell5.innerHTML = 36.78;
            cell6.innerHTML = 0.47;
          }
          else if(rangeMeter.value==4)
          {
            cell2.innerHTML = 1.75;
            cell3.innerHTML = 268.5;
            cell4.innerHTML = 600;
            cell5.innerHTML = 44.75;
            cell6.innerHTML = 0.625;
          }
          else if(rangeMeter.value==5)
          {
            cell2.innerHTML = 3;
            cell3.innerHTML = 452.4;
            cell4.innerHTML = 840;
            cell5.innerHTML = 53.8;
            cell6.innerHTML = 0.72;
          }
          else if(rangeMeter.value==6)
          {
            cell2.innerHTML = 4.75;
            cell3.innerHTML = 703.8;
            cell4.innerHTML = 1240;
            cell5.innerHTML = 56.7;
            cell6.innerHTML = 0.85;
          }
          else if(rangeMeter.value==7)
          {
            cell2.innerHTML = 5.91;
            cell3.innerHTML = 1000.5;
            cell4.innerHTML = 1570;
            cell5.innerHTML = 60.6;
            cell6.innerHTML = 0.91;
          }
          else if(rangeMeter.value==8)
          {
            cell2.innerHTML = 6.70;
            cell3.innerHTML = 1220.5;
            cell4.innerHTML = 1680;
            cell5.innerHTML = 63.7;
            cell6.innerHTML = 1.04;
          }
          else if(rangeMeter.value==9)
          {
            cell2.innerHTML = 7.3;
            cell3.innerHTML = 1430.8;
            cell4.innerHTML = 1810;
            cell5.innerHTML = 68.3;
            cell6.innerHTML = 1.15;
          }
        }
        else
        {
          alert("Only maximum 10 readings are allowed.");
        }
        trace1.x.push(cell2.innerHTML);

        trace2.x.push(cell2.innerHTML);
        trace2.y.push(cell6.innerHTML);

        trace3.x.push(cell2.innerHTML);
        trace3.y.push(cell5.innerHTML);

       })


   function drawgraph1(){

     if(clickcounter2<6)
     {
        alert("Alert ! Please take atleast 6 readings.");
     }
     else
     {
        var data = [trace1];
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

        Plotly.newPlot('myDiv1', data, layout, {showSendToCloud: true});
     }
   }

   function drawgraph2(){

    if(clickcounter2<6)
    {
       alert("Alert ! Please take atleast 6 readings.");
    }
    else
    {
       var data = [trace2];
       var layout={
           xaxis:{
               title:{
                   text:'Torque',
                   font:
                   {
                       family:'Courier New, monoscope',
                       size:18,
                       color:'#00ff00'
                   }
               },
           },
           yaxis:{
               title:{
                   text:'Power Factor',
                   font:
                   {
                       family:'Courier New, monoscope',
                       size:18,
                       color:'#00ff00'
                   }
               },
           }
       };

       Plotly.newPlot('myDiv2', data, layout, {showSendToCloud: true});
    }
  }

  function drawgraph3(){

    if(clickcounter2<6)
    {
       alert("Alert ! Please take atleast 6 readings.");
    }
    else
    {
       var data = [trace3];
       var layout={
           xaxis:{
               title:{
                   text:'Torque',
                   font:
                   {
                       family:'Courier New, monoscope',
                       size:18,
                       color:'#0000ff'
                   }
               },
           },
           yaxis:{
               title:{
                   text:'Efficiency',
                   font:
                   {
                       family:'Courier New, monoscope',
                       size:18,
                       color:'#0000ff'
                   }
               },
           }
       };

       Plotly.newPlot('myDiv3', data, layout, {showSendToCloud: true});
    }
  }
