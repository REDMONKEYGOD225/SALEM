$(document).ready(function() {
    // Créez un élément div pour la bannière
    var banner = $('<div>').css({
      backgroundColor: 'yellow',
      padding: '10px',
      textAlign: 'center'
    }).text('This is a banner!');
  
    // Insérez la bannière entre le header et le contenu principal
    $('header').after(banner);
  });
  