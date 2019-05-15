//Go R button Click Event Handler
$("#run").click(function () {
  
    var resultsUrlPrefix = "http://localhost:5003",
        url = resultsUrlPrefix + "/ocpu/library/base/R/identity/save";
    
    var rCommands = $("#rCode").val();
    
    $.post(url,
    {
        x: rCommands
    },
    
    function (data) {
      
      var statResultsLink = resultsUrlPrefix + data.toString().match(/.+\/stdout/m),
          chartLink = resultsUrlPrefix + data.toString().match(/.+\/graphics\/[1]/m);
     
        //Add statistical (textual) results to results div
        $('#results').append("<br/>");
        $('<div/>', {
            id: 'statResults'
        }).appendTo('#results');
      
        $("#statResults").load(statResultsLink);

        //Add charts results to results div
        $('#results').append("<br/>");
          $('<img/>', {
              id: 'chartResults',
              src: chartLink
          }).appendTo('#results');

    })
    .error(function (jqXHR, status, error) {
        alert(jqXHR.responseText);
    });
});
