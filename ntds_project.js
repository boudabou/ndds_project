function load_data(path){
    return new Promise((resolve, reject) => {
        data= $.getJSON(path, function(data) {
            console.log("data loaded successfully");
            resolve();
        });
});
}

function redrawAll() {
    return new Promise((resolve, reject) => {
        var container = document.getElementById('mynetwork');
        var options = {
        nodes: {
            shape: 'dot',
            scaling: {
                min: 10,
                max: 30
            },
            font: {
                size: 12,
                face: 'Tahoma'
            }
        },
        /*edges: {
          color:{inherit:true},
          width: 0.15,
          smooth: {
            type: 'continuous'
          }
        },*/
        interaction: {
            hideEdgesOnDrag: true,
            tooltipDelay: 200
        },
        configure: {
            filter: function (option, path) {
                //if (option === 'inherit') {return true;}
                //if (option === 'type' && path.indexOf("smooth") !== -1) {return true;}
                //if (option === 'roundness') {return true;}
                if (option === 'hideEdgesOnDrag') {return true;}
                if (option === 'hideNodesOnDrag') {return true;}
                return false;
            },
            container: document.getElementById('optionsContainer'),
            showButton: false
        },
        physics: false
    };


    /*
        var data = load_data("./graphTest.json");
        var data = {nodes:nodes, edges:edges};
        Note: data is coming from ./data/WorldCup2014.js
    */
        //var graph = load_data("./graphTest.json");
        var dataCorrect = {nodes:nodes, edges:edges};
        var dataIncorrect = {nodes:data.nodes, edges:data.edges};
        console.log(dataCorrect);
        console.log(dataIncorrect);
        //console.log(graph);
        //window.alert(data["nodes"]);
        network = new vis.Network(container, dataIncorrect, options);
        resolve();
});
}

function loadAndDrawGraph(path){
    load_data(path).then(
        // On affiche un message avec la valeur
        function(val) {
            var container = document.getElementById('mynetwork');
            var options = {
                nodes: {
                    shape: 'dot',
                    scaling: {
                        min: 10,
                        max: 30
                    },
                    font: {
                        size: 12,
                        face: 'Tahoma'
                    }
                },
                /*edges: {
                  color:{inherit:true},
                  width: 0.15,
                  smooth: {
                    type: 'continuous'
                  }
                },*/
                interaction: {
                    hideEdgesOnDrag: true,
                    tooltipDelay: 200
                },
                configure: {
                    filter: function (option, path) {
                        //if (option === 'inherit') {return true;}
                        //if (option === 'type' && path.indexOf("smooth") !== -1) {return true;}
                        //if (option === 'roundness') {return true;}
                        if (option === 'hideEdgesOnDrag') {return true;}
                        if (option === 'hideNodesOnDrag') {return true;}
                        return false;
                    },
                    container: document.getElementById('optionsContainer'),
                    showButton: false
                },
                physics: false
            };
            console.log(data);
            network = new vis.Network(container, data.responseJSON, options);
        }).catch(
        // Promesse rejetée
        function() {
            console.log("promesse rompue");
        });
}


