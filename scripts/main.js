//Create table and fetch data from JSON.
$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("/files/json/pokemon.json", function(data) {
            json_obj2 = data;
        
            var k = 0;
            var table_body = '';
            
            for(i =0;i<json_obj2.length;i++){
                    table_body+='<tr>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["#"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["Name"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["Type 1"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["Type 2"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["Generation"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=json_obj2[k]["Legendary"];
                    table_body +='</td>';
                
                    table_body+='</tr>';
                    k++;
                    $('#tableDiv').html("<h2>Carregando...</h2>");
            }

            $('#tableDiv').html(table_body);
            //display data..........
        }); 
   
        
    });

    // for search function.................................. only............................
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function(index) {
            if(index>0){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            }
        });
    });
    //=================End=========================End===============================
});