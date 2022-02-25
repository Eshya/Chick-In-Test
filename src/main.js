$(document).ready(function () {
  

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<< QUESTION  NUMBER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>
  $(document).on('click', '#buttonAns1', function () {
    let data = JSON.parse($('#input1').val());
    // console.log();
    $.ajax({
      type: "POST",
      contentType : "application/json",
      data: JSON.stringify(data),
      url: "http://localhost:5000/api/q1",
      success: function(result){
          result.forEach((value,index) => {
            $("#ans1").append(`[${value}]`);
            if(index<=result.length-2)$("#ans1").append(",");
          });
          // $("#ans1").html(result);             
          console.log(result);
      },
      dataType : "json"
      
      })
      
  });

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<< QUESTION  NUMBER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>
  $(document).on('click', '#buttonAns2', function () {
    let data = JSON.parse($('#input2').val());
    console.log(data);
    $.ajax({
      type: "POST",
      contentType : "application/json",
      data: JSON.stringify(data),
      url: "http://localhost:5000/api/q2",
      success: function(result){
          // result.forEach((value,index) => {
          //   $("#ans2").append(`[${value}]`);
          //   if(index<=result.length-2)$("#ans2").append(",");
          // });
          // $("#ans1").html(result);             
          console.log(result);
      },
      dataType : "json"
      
      })
      
  });
});
  
  

