// ==UserScript==
// @name       Next/Pref buttons for RE book
// @namespace  http://eliantenholder.com  
// @version    1.1
// @description Enables the use of the arrow keys for a random HTML book.
// @match      file:///Users/itwarrior/Downloads/Meuk/*
// @copyright  2014+, Elian ten Holder
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==
// Find both the urls by finding the parent of the button image.
var next = $('img[alt="Next Section"]').parent().attr('href');
var pref = $('img[alt="Previous Section"]').parent().attr('href');

// Wait for the keydown event and when it's the left or right arrow replace the current location
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
       location.replace(next);
       return false;
    }else if(e.keyCode == 37) { 
       location.replace(pref);
       return false;
    }
    
