$(document).ready(function(){
    $('#drop').click(function(){
        if($('li').hasClass('active')){
            $('li').removeClass('active')
        }
        else{
            $('li').addClass('active')
        }
    })
})
