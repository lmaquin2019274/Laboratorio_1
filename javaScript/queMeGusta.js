var init = function() {
    var carousel = document.getElementById('carousel'),
        navButtons = document.querySelectorAll('#navigation button'),
        panelCount = carousel.children.length,
        
        theta = 0,
        onNavButtonClick = function( event ){
          var increment = parseInt( event.target.getAttribute('data-increment') );
          theta += ( 360 / panelCount ) * increment;
          carousel.style.transform = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
      console.log("theta: ",theta)
        };

    for (var i=0; i < 2; i++) {
      navButtons[i].addEventListener( 'click', onNavButtonClick, false);
      if(i == 1){
        document.getElementById("titu1").className = "titu";
        document.getElementById("txt1").className = "texto";

        document.getElementById("titu2").className = "tituno";
        document.getElementById("txt2").className = "textono";
      }
    }
  };
  init();