var result = document.getElementById('resultat');
var song_buttons = document.getElementsByClassName('icon');
var l = song_buttons.length;
for (var i = 0 ; i < l; i++) {
    song_buttons[i].addEventListener('click' , function(){ 
    song = this.getAttribute('href');
   }); 
};
    

