var init = function() {
  var carousel = document.getElementById('carousel'),
      navButtons = document.querySelectorAll('#navigation button'),
      panelCount = carousel.children.length,
      currentPanel = 1,
      
      theta = 0,
      onNavButtonClick = function( event ){
        var increment = parseInt( event.target.getAttribute('data-increment') );
        currentPanel = (currentPanel + increment - 1 + panelCount) % panelCount + 1;
        theta += ( 360 / panelCount ) * increment;
        carousel.style.transform = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
        updateText(currentPanel);
      };

<<<<<<< HEAD
    for (var i=0; i < 2; i++) {
      navButtons[i].addEventListener( 'click', onNavButtonClick, false);
      if(i == 1){
        document.getElementById("titu1").className = "titu";
        document.getElementById("txt1").className = "texto";

        document.getElementById("titu2").className = "tituno";
        document.getElementById("txt2").className = "textono";
      }
=======
  for (var i=0; i < 2; i++) {
    navButtons[i].addEventListener( 'click', onNavButtonClick, false);
  }


  var updateText = function(panelIndex) {
    // Hide all texts and titles
    for (var i = 1; i <= panelCount; i++) {
      document.getElementById('txt' + i).style.display = 'none';
      document.getElementById('titu' + i).style.display = 'none';
>>>>>>> eb37f311638442bc73892c35121c496612ded94f
    }

    // Show text and title for the current panel
    document.getElementById('txt' + panelIndex).style.display = 'block';
    document.getElementById('titu' + panelIndex).style.display = 'block';
    document.getElementById('titu' + panelIndex).className = "titu";
    document.getElementById('txt' + panelIndex).className = "texto";
  };

  // Initial text update
  updateText(currentPanel);
};

init();
