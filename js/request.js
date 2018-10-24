var getHttpRequest = function() {
    var httpRequest = false;

        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
                // Voir la note ci-dessous à propos de cette ligne
            }
        }
        else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Abandon :( Impossible de créer une instance XMLHTTP');
            return false;
        }
    return httpRequest;
};

var download_button = document.querySelector('#dl');
download_button.addEventListener('click',function (){
    var sVar1 = encodeURIComponent(song);
    var sVar2 = encodeURIComponent(document.querySelector('#yourMail').value);
    var httpRequest = getHttpRequest();
    httpRequest.open('POST',"php/traitement.php", true);
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.send("variable1="+sVar1+"&variable2="+sVar2+"");
    httpRequest.onreadystatechange = function (){
        if(httpRequest.onreadystate === 4){
            document.getElementById('resultat').innerHTML = httpRequest.responseText;
        };
    };
    
});

