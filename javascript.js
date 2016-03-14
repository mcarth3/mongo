$(document).ready(function(){

    $("#theForm").submit(function(){
        var theName = $("#name").val();
        if (theName == "") {
            theName = "Unknown";
        }

        var theComment = $("#comment").val();
        if (theComment == "") {
            theComment = "Nothing";
        }

        var myobj = {Name: theName, Comment: theComment};
        jobj = JSON.stringify(myobj);
        $("#json").text("JSON: " + jobj);
    
    	var url = "comment";
		$.ajax({
  			url:url,
  			type: "POST",
  			data: jobj,
  			contentType: "application/json; charset=utf-8",
  			success: function(data,textStatus) {
      				$("#result").html(textStatus + "!");
  			}
		});

        $("#name").val("");
        $("#comment").val("");

	});

    $("#getComments").click(function() {
        $.getJSON('comments', function(data) {
            console.log(data);
            $("#comments").html("");
            for(var comment in data) {
              var com = data[comment];
              var output = ""
              var output = "<li class='list-group-item'><span class='theComment'>\"" + com.Comment + "\"</span><br/><span>- " + com.Name + "</span></li>";
              $("#comments").prepend(output);
            }
        });
    });

});
