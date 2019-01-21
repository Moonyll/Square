$(document).ready(function () {
    var maxw = $(document).width(); //Largeur max de la fenêtre
    var maxh = $(document).height(); // Hauteur max de la fenêtre
        $('#text').keydown(function (event) { // Evénement quand une touche est tenue
        var L = $('#square').position().left; // Position du carré par rapport au côté gauche
        var H = $('#square').position().top; // Position du carré par rapport au haut de page
        var key = event.which - 37; // Valeur de la touche - 37 pour créer des indices tableaux
        var mov = [{ left: '-=100' }, { top: '-=100' }, { left: '+=100' }, { top: '+=100' }]; //Tableau des mouvements selon la touche
            if (L < maxw && L > 0)// Condition de bordure sur les côtés
            {
                if (H < maxh && H > 0) // Condition de bordure sur la hauteur
                {
                $('#square').animate(mov[key]);
                }
                else
                {
                $('#square').animate(mov[key]).stop(true).css('top', '0');
                }
            }
            else
            {
            $('#square').animate(mov[key]).stop(true).css('left', '0');
            }
        });
});

/*Correction :
$(document).ready(() => {
    /* On récupère la hauteur de la fenêtre grace à window.innerHeight et la largeur grâce à window.innerWidth
     * Ensuite, on divise le résultat par deux pour avoir 50% (Le milieu de la page) 
     * Pour finir, on soustrait la moitié de la taille des cotés du carré, pour vraiment bien le placer au milieu */
    var positionTop = ((window.innerHeight / 2) - ($('#square').height() / 2)); // position verticale
    var positionLeft = ((window.innerWidth / 2) - ($('#square').width() / 2)); // position horizontale

    // On place le carré sur la page grâce à l'attribut 'style'
    $('#square').attr('style', 'top: '+positionTop+'px; left: '+positionLeft+'px;');

    // On attend l'évènement 'keypress' sur les inputs.
    // keypress est un évènement qui est lancé quand une touche est enfoncée.
    $('input').keypress((event) => {
        positionTop = $('#square').position().top; // On récupère la position verticale actuelle du carré
        positionLeft = $('#square').position().left; // On récupère la position horizontale actuelle du carré

        // On vérifie si la valeur de event.keyCode (Le code de la touche appuyée) est égale aux valeurs suivantes:
        if (event.keyCode == 37) { // Code 37 = Gauche
            if ((positionLeft -= 10) < 0) { // On soustrait 10 à positionLeft puis on vérifie qu'il est négatif
                positionLeft = window.innerWidth - $('#square').width(); // Si oui, on met le carré de l'autre coté.
            }
        } else if (event.keyCode == 38) { // Code 38 = Haut
            if ((positionTop -= 10) < 0) { // On soustrait 10 à positionLeft puis on vérifie qu'il est négatif
                positionTop = window.innerHeight - $('#square').height(); // Si oui, on met le carré de l'autre coté.
            }
        } else if (event.keyCode == 39) { // Code 39 = Droite
            // Cette fois, on vérifie si la somme (position + taille du carré) est supérieure à la taille de la fenêtre.
            if (((positionLeft += 10) + $('#square').width()) > window.innerWidth) {
                positionLeft = 0; // Si oui, on met le carré de l'autre coté.
            }
        } else if (event.keyCode == 40) { // Code 40 = Bas
            // Cette fois, on vérifie si la somme (position + taille du carré) est supérieure à la taille de la fenêtre.
            if (((positionTop += 10) + $('#square').height()) > window.innerHeight) {
                positionTop = 0; // Si oui, on met le carré de l'autre coté.
            }
        }

        // On attribue les nouvelles valeurs à #square pour que la mise à jour soit effective.
        $('#square').attr('style', 'top: ' + positionTop + 'px; left: ' + positionLeft + 'px;');
    });
});*/
