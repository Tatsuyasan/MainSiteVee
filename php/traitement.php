<?php


    
function VerifierAdresseMail($adresse)
{
  //Adresse mail trop longue (254 octets max)
  if(strlen($adresse)>254)
  {
    return '<p>Votre adresse est trop longue.</p>';
  }


  //Caractères non-ASCII autorisés dans un nom de domaine .eu :

  $nonASCII='ďđēĕėęěĝğġģĥħĩīĭįıĵķĺļľŀłńņňŉŋōŏőoeŕŗřśŝsťŧ';
  $nonASCII.='ďđēĕėęěĝğġģĥħĩīĭįıĵķĺļľŀłńņňŉŋōŏőoeŕŗřśŝsťŧ';
  $nonASCII.='ũūŭůűųŵŷźżztșțΐάέήίΰαβγδεζηθικλμνξοπρςστυφ';
  $nonASCII.='χψωϊϋόύώабвгдежзийклмнопрстуфхцчшщъыьэюяt';
  $nonASCII.='ἀἁἂἃἄἅἆἇἐἑἒἓἔἕἠἡἢἣἤἥἦἧἰἱἲἳἴἵἶἷὀὁὂὃὄὅὐὑὒὓὔ';
  $nonASCII.='ὕὖὗὠὡὢὣὤὥὦὧὰάὲέὴήὶίὸόὺύὼώᾀᾁᾂᾃᾄᾅᾆᾇᾐᾑᾒᾓᾔᾕᾖᾗ';
  $nonASCII.='ᾠᾡᾢᾣᾤᾥᾦᾧᾰᾱᾲᾳᾴᾶᾷῂῃῄῆῇῐῑῒΐῖῗῠῡῢΰῤῥῦῧῲῳῴῶῷ';
  // note : 1 caractète non-ASCII vaut 2 octets en UTF-8


  $syntaxe="#^[\w-.]{1,64}@[[:alnum:]-.$nonASCII]{2,253}\.[[:alpha:].]{2,6}$#";

  if(preg_match($syntaxe,$adresse))
  {
    return 'Success';
  }
  else
  {
    return 'Failed';
  }
};
/*if( isset($_POST['email'])){
        $adresse = $_POST['email'];
        $adresse1 = VerifierAdresseMail($adresse);
        if ($adresse1 == 'Success') {
            
            
            echo $adresse1;
        } else {
            echo "l'adresse mail n'est pas valide..";
        }
    };*/

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain). 

$variable1 = (isset($_GET["variable1"])) ? $_GET["variable1"] : NULL;
$variable2 = (isset($_GET["variable2"])) ? $_GET["variable2"] : NULL;

if ($variable1 && $variable2) {
	// Faire quelque chose...
	echo "OK";
} else {
	echo "FAIL";
}
?>

