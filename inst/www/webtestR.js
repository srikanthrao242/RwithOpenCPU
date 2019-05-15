"use strict";
ocpu.seturl("http://localhost:5003/ocpu/library/Hiddime0.0.2/R")
//ocpu.seturl("http://localhost:5003/ocpu/library/Hiddime0.0.2/R")
$("#rsubmit").click(function()
{
  var myheader = $("#header").val() == "true";

  var myfile = $("#csvfile")[0].files;

  console.log(myfile)

  var nooffiles = ($("#csvfile")[0].files).length;

  var loc = window.location.pathname;

  var dir = loc.substring(0, loc.lastIndexOf('/'));

  console.log(nooffiles,loc,dir);

  for(var i =0;i<nooffiles;i++)
  {
    if(!myfile[i])
    {
          alert("No file selected.")
    }

    var req = ocpu.rpc("returncNames",
    {
          "file1" :myfile[i]

    }, function(output)
    {
        var dynamicdiv = document.createElement('div'),options,select;

        dynamicdiv.setAttribute("id","findingkeys"+"_"+i);

        //dynamicdiv.setAttribute("class","sidebyside");

        var outputdata = output[0];

        for(var key in outputdata)
        {
          var a = outputdata[key];

          options  = options+"<option value="+a+" style = 'font-size: 8pt; color: blue'>"+a+"</option>";
        }
        if(i == 1)
        select = "<h3>Finding keys</h3><br><select multiple name='type_of_common' id='findingkeys"+i+"' style='width:20%;height:20%;'>"+options+"</select><br><br>";
        else
        select = "<select multiple name='type_of_common' id='findingkeys"+i+"' style='width:20%;height:20%;'>"+options+"</select><br><br>";
        dynamicdiv.innerHTML = select;

        var resultdiv = document.getElementById("rResult1");

        resultdiv.appendChild(dynamicdiv);

        //resultdiv.appendChild("<br><br>");

        //$("#rResult").text((output));


    });

      //if R returns an error, alert the error message
    req.fail(function()
    {
        alert("Server error: " + req.responseText);
    });
  }

});
