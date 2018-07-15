
var aText = new Array(
    "We are JoinStack, an independent software development company in Bucharest.",
    "We build apps, products and experiences that represent you.",
    "Your product. Your company. Your audience.",
    "In the process of developing a product our approach is always the same, in that it’s never the same.",
    "We start by listening and let that shape our design process, with our clients as partners every step of the way.",
    "Then, we bring designs to life. Capture your audience’s attention and leave an impression,",
    "telling your story through concept, color, creativity and awesome code.",
    "Finally whether you play it, watch it, double tap or swipe it, we merge the creative and the technical to build it.",
    "Scaled up or scaled down, on any screen or surface. You name it, we make it.",
    "Because we help brands all over the world to create impressive products!"
    );
    var iSpeed = 75; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();