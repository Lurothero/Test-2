$(document).ready(() => 




{
    
    $('#contactForm').hide();

    $("#contactButton").on('click',() => {
        $('#contactForm').show(); 
       });
       
       $("#cancel").on('click',() => {
        $('.contactForm').hide(); 
       });


        
    $('#signupForm').hide();

    $("#contactButton").on('click',() => {
        $('#signupForm').show(); 
       });
       
       $("#cancel").on('click',() => {
        $('.signupForm').hide(); 
       });
      
      

      

});
