function load_data(path){
    return new Promise((resolve, reject) => {
        data= $.getJSON(path, function(data) {
            console.log("data loaded successfully");
            resolve();
        });
});
}

function loadAndDrawGraph(path){
    load_data(path).then(
        // On affiche un message avec la valeur
        function(val) {
            var container = document.getElementById('mynetwork');
            var options = {
                nodes: {
                    shapeProperties:{
                        size:30
                    },
                    shape: 'dot',
                    scaling: {
                        min: 20,
                        max: 30
                    },
                    font: {
                        size: 40,
                        face: 'Tahoma',
                        bold:true
                    },
                    size: 70
                },
                layout:{
                    improvedLayout:false
                },

                  edges: {
                  color:{
                      inherit:true,
                      opacity: 0.1
                  },
                  width: 0.15,
                  smooth: {
                    type: 'continuous'
                  }
                },
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


