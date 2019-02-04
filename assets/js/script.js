// Construisez une page html avec un bouton +, un bouton - et un champ number qui aura pour valeur 0.
// Augmenter ou baisser le chiffre dans ce champ en fonction des boutons cliqués.
var i = 0;
$('#buttonPlus').click(function() {
  i++;
  $('#counter').text('Number: '+ i);
  });
  $('#buttonMoins').click(function() {
    i--;
    $('#counter').text('Number: '+ i);
});
