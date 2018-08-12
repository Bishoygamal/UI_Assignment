$(document).ready(function(){

$(".maincontent .show").on("click", function() {
  
    $('.show-more').fadeToggle(1000);
    $(".show-more").toggleClass("hid"); 
    if($(".show-more").hasClass("hid")){
        $(".maincontent .show").html('عرض الكل');
    }
    else{
        $(".maincontent .show").html('أخفاء');
    }
});
 
    // collapse Elements
    
  
    
    // Redirect to Mail
    $('.maincontent .usercard .over .icons .fa-envelope').click(function(){
         window.location.replace("mailto:someone@example.com?Subject=Hello%20again");                                                       
    });
});
   


 //Loading Element

$(window).on('load',(function(){

	
}));