let numberguess = Math.round(Math.random() * 100);
 let versuche = 0;
function guess() {
 alert("es funktioniert!"); 
 versuche = versuche + 1; 
 displayversuche.innerHTML = 'Versuche: '+ versuche;
}