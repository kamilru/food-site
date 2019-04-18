"use strict";

function stickyNav() {
    
    const navBar = document.querySelector(".navbar");
    const logo = document.querySelector(".navbar__logo");
    
    if(window.scrollY > 95 && window.innerWidth > 768) {
        navBar.classList.add("sticky");
        logo.classList.add("sticky__logo");
    } else {
        navBar.classList.remove("sticky");
        logo.classList.remove("sticky__logo");
    }
}


window.addEventListener('scroll', stickyNav);


//ajax request with jquery
$(document).ready(function(){
    $('#subscribeForm').submit(function(){
     
        $.ajax({
            type: 'POST',
            url: 'test.php',
            dataType : 'json',
            data: $(this).serialize()
        })
        .done(function(data){
            $('.result--positive').show();
            console.log(data);
            $('#emailSub').val("");
        })
        .fail(function() {
            $('.result--negative').show();
             
        });
        
        return false;
 
    });
});