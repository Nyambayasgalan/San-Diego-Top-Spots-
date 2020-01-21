  
$(document).ready(function() {
    $.getJSON("data.json", function(data){
        $.each(data, function(index){
            $("table").append("<tr><td>" 
            + data[index].name + "</td><td>" 
            + data[index].description + "</td><td><a href=https://www.google.com/maps?q=" 
            + data[index].location + ">Open in Google Maps</a></tr></td>");
        });
    });
});