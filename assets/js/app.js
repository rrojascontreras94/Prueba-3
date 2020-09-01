$(document).ready(PokeID);{
    function PokeID(){
        var  pokedexnmr = $('#pokedexnmr').val();
        console.log(pokedexnmr);

        var pokeAPI = 'https://pokeapi.co/api/v2/pokemon/' + pokedexnmr;

        $.getJSON(pokeAPI).done(function(data){
            console.log(data);
            
            var array = []
            var i = 0;
            while(i<data.stats.length){
                array[i] = {y:data.stats[i].base_stat, label: data.stats[i].stat.name}
                i++;
            }

            $('#poke-img-front').attr('src', data.sprites.front_default);
            $('#poke-img-back').attr('src', data.sprites.back_default);
            $('#poke-shiny-img-front').attr('src', data.sprites.front_shiny);
            $('#poke-shiny-img-back').attr('src', data.sprites.back_shiny);
            $('#poke-name').text(data.species.name);
            $('#poke-nmr').text("#" + data.id);

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light1", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: "Stats Base"
                },
                axisY: {
                    title: "Value"
                },
                data: [{        
                    type: "column",  
                    showInLegend: true, 
                    legendMarkerColor: "black",
                    legendText: "Stats",
                    dataPoints: array
                }]
            });
            chart.render();
        });
        
    }
    
}