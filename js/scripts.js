$(document).ready(function(){

    var scrollItem = document.querySelectorAll('.fade-in-on-scroll'); 
    var heroFadeIn = document.querySelectorAll('.hero-fade-in');
    var currentYear = new Date().getFullYear();
            
    $("#currentYear").text(currentYear);
    
    heroFadeIn.forEach(heroFadeIn => { 
    
        heroFadeIn.classList.add('fade-in-show'); 
        
    });
    
    
    
    document.onscroll = function() {
        //scroll and fade in
        scrollItem.forEach(scrollItem => { 
        var position = scrollItem.getBoundingClientRect(); 
        var distFromTop = position.top; 
            if(distFromTop < 400) { 
                scrollItem.classList.add('fade-in-show'); 
            }
        });
    }

    


    
});