$(document).ready(function() {
    $("#formOne").submit(function(event) {
        // var flavors = ["f1", "f2", "f3", "f4", "f5", "f6"];
        event.preventDefault();

        var form = $("#formOne").hide();
        var lists = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];

        var upper = lists.map(function(list) {
            return list.toUpperCase();
        });

        upper = list.sort();

        upper.forEach(function(list) {
            $("#finalList").append("<li>" + list + "</li>");
        });

       $(".result").show();
  
      });
  });