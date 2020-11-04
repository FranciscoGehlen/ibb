function myFunction() {
    var indicados = document.getElementById("indicados").value;
    var plano = document.getElementById("plano").value;
    var vCP = 0;
    var tR = 0;

    switch (plano){
      case 'pcompacto':
        var vP = 9.90;
        var vT = indicados*vP;
        var iR = vT*0.06;
        var tC = vT*0.019;
        var tS = (vT*0.0042)+0.92;
        vCP = ((vT - iR - tC)*0.2 - tS).toFixed(2);
        
        if(indicados >= 20 && indicados < 40){
          tR = 0.05;  
        }else if(indicados >= 40 && indicados < 60){
          tR = 0.10; 
        }else if(indicados >= 60 && indicados < 80){
          tR = 0.15; 
        }else if(indicados >= 80 && indicados < 100){
          tR = 0.20; 
        }else if(indicados >= 100){
          tR = 0.25; 
        }
        if(tR != 0){
          var vCR = ((vT - iR - tC)*tR - tS).toFixed(2);
          
        }
        break
      case 'pespecial':
        var vP = 29.80;
        var vT = indicados*vP;
        var iR = vT*0.06;
        var tC = vT*0.019;
        var tS = (vT*0.0042)+0.92;
        vCP = ((vT - iR - tC)*0.2 - tS).toFixed(2);

        if(indicados >= 20 && indicados < 40){
          tR = 0.05;  
        }else if(indicados >= 40 && indicados < 60){
          tR = 0.10; 
        }else if(indicados >= 60 && indicados < 80){
          tR = 0.15; 
        }else if(indicados >= 80 && indicados < 100){
          tR = 0.20; 
        }else if(indicados >= 100){
          tR = 0.25; 
        }
        if(tR != 0){
          var vCR = ((vT - iR - tC)*tR - tS).toFixed(2);
        }
        break
      case 'pessencial':
      var vP = 39.50;
        var vT = indicados*vP;
        var iR = vT*0.06;
        var tC = vT*0.019;
        var tS = (vT*0.0042)+0.92;
        vCP = ((vT - iR - tC)*0.3 - tS).toFixed(2);

        if(indicados >= 20 && indicados < 40){
          tR = 0.05;  
        }else if(indicados >= 40 && indicados < 60){
          tR = 0.10; 
        }else if(indicados >= 60 && indicados < 80){
          tR = 0.15; 
        }else if(indicados >= 80 && indicados < 100){
          tR = 0.20; 
        }else if(indicados >= 100){
          tR = 0.25; 
        }
        if(tR != 0){
          var vCR = ((vT - iR - tC)*tR - tS).toFixed(2);
        }
        break
      case 'pfgold':
      var vP = 59.29;
        var vT = indicados*vP;
        var iR = vT*0.06;
        var tC = vT*0.019;
        var tS = (vT*0.0042)+0.92;
        vCP = ((vT - iR - tC)*0.4 - tS).toFixed(2);

        if(indicados >= 20 && indicados < 40){
          tR = 0.05;  
        }else if(indicados >= 40 && indicados < 60){
          tR = 0.10; 
        }else if(indicados >= 60 && indicados < 80){
          tR = 0.15; 
        }else if(indicados >= 80 && indicados < 100){
          tR = 0.20; 
        }else if(indicados >= 100){
          tR = 0.25; 
        }
        if(tR != 0){
          var vCR = ((vT - iR - tC)*tR - tS).toFixed(2);
        }
        break
      case 'pfpremium':
      var vP = 69.70;
        var vT = indicados*vP;
        var iR = vT*0.06;
        var tC = vT*0.019;
        var tS = (vT*0.0042)+0.92;
        vCP = ((vT - iR - tC)*0.5 - tS).toFixed(2);

        if(indicados >= 20 && indicados < 40){
          tR = 0.05;  
        }else if(indicados >= 40 && indicados < 60){
          tR = 0.10; 
        }else if(indicados >= 60 && indicados < 80){
          tR = 0.15; 
        }else if(indicados >= 80 && indicados < 100){
          tR = 0.20; 
        }else if(indicados >= 100){
          tR = 0.25; 
        }
        if(tR != 0){
          var vCR = ((vT - iR - tC)*tR - tS).toFixed(2);
        }
        break
      
    }
    document.getElementById("pontual").innerHTML = vCP;
    if(vCR == undefined){
      document.getElementById("recorrente").innerHTML = 0
    }else{
      document.getElementById("recorrente").innerHTML = vCR;
    }
    
}