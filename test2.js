

$(document).ready(function(){
   

$("html").hide();



$("html").fadeIn(2000);












$("#contactForm").hide();


$("#contactButton").click(function(){





    $("#contactForm").slideToggle();

});


$("#cancelContact").click(function(){

   
    $("#contactForm").slideUp();


});



$("#signupForm").hide();


$("#signupButton").click(function(){

    $("#signupForm").slideToggle();

});


$("#cancelSignup").click(function(){

   
    $("#signupForm").slideUp();


});




$("#card_tutor").hover(function(){

    $("#card_tutor").animate({
  
        height: '105%',
        width: '105%'
      });

    $("#card_tutor").css({"background-color": "#b4b4b4"});


},
function(){

    $("#card_tutor").animate({
  
        height: '100%',
        width: '100%'
      });

      $("#card_tutor").css({"background-color": "#FFFFFF"});

}




);

$("#card_Assist").hover(function(){

    $("#card_Assist").animate({
  
        height: '105%',
        width: '105%'
      });

    $("#card_Assist").css({"background-color": "#b4b4b4"});


},
function(){

    $("#card_Assist").animate({
  
        height: '100%',
        width: '100%'
      });

      $("#card_Assist").css({"background-color": "#FFFFFF"});

}




);




$("#card_Special").hover(function(){

    $("#card_Special").animate({
  
        height: '105%',
        width: '105%'
      });

    $("#card_Special").css({"background-color": "#b4b4b4"});


},
function(){

    $("#card_Special").animate({
  
        height: '100%',
        width: '100%'
      });

      $("#card_Special").css({"background-color": "#FFFFFF"});

}


);


});