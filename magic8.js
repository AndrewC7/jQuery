$(document).ready(function() {

  $("#submit").on("click", function() {
    alert($("#question").val());
  });

  $("#submit").on("click", function answer() {
    var random = Math.floor(Math.random()*4);
    if (random === 0){
      $("#answer").text("YASSSSSS. ").append($("#question").val());

    }
    if (random === 1){
      $("#answer").text("NEVER. ").append($("#question").val());
    }
    if (random === 2){
      $("#answer").text("Google it, loser. ").append($("#question").val());
    }
    if (random === 3){
      $("#answer").text("There is no hope. ").append($("#question").val());;
    }
  })

  $("#submit").on("click", function answer() {
    $("#question").val("");
  });
});
