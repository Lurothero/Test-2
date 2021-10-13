$(document).ready(() => 




{
    
    $('#contactForm').hide();

    $("#contactButton").on('click',() => {
        $('#contactForm').show(); 
       });
       
       $("#cancel").on('click',() => {
        $('.contactForm').hide(); 
       });
      

      

});
