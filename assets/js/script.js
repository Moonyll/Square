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
