function nb_aleatoire(min, max);
 {
	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
 }
 var nb = nb_aleatoire(1,100); //nombre à deviner
 var cpt = 0; 	//nombre de coups
 var saisie;
 var msg = 'choisir un nombre entre 1 et 100'; 

 do
 {
 	saisie = prompt(msg);
 	cpt++;
 	//message au prochain tour
 	if(saisie > nb)
 		msg = "c'est moins";
 	else
 		msg = "c'est plus";
 }
while(saisie !=nb);

alert("Tu as gagné en " +cpt +" coups")

