window.addEventListener('scroll',function (e) {
    var main = document.getElementById('loader');
    main.style.width  = (window.pageYOffset/(e.target.scrollingElement.scrollHeight - 754))*100+"%";

    });

window.addEventListener('scroll', function () {
    var left = document.getElementById('left');
    var right = document.getElementById('right');

    
    left.style.transform = 'translate3d(0px,'+pageYOffset+'px, 0px)';
    right.style.transform = 'translate3d(0px,'+pageYOffset+'px, 0px)';
    left.style.left = window.pageYOffset/10 + "%";
    right.style.left = -window.pageYOffset/10 + "%";
    
    if(window.pageYOffset/10>25){
        $('#left').fadeOut(500);
        $('#right').fadeOut(500);
    }else if(window.pageYOffset/10<20){
        $('#left').fadeIn(500);
        $('#right').fadeIn(500);
    }
    
    });

   var btndice = document.getElementById('diesubmit');
   btndice.addEventListener('click', function () {
       $('#dieroll').fadeOut(200);
       setTimeout(function(){document.getElementById('dieroll').innerHTML  = Math.floor(Math.random()*6 +1); $('#dieroll').fadeIn(100); }, 300);
    });

    coin = ['Heads', 'Tails', 'Tails', 'Heads'];

    var btncoin = document.getElementById('coinsubmit');
   btncoin.addEventListener('click', function () {
       $('#flipcoin').fadeOut(200);
       setTimeout(function(){document.getElementById('flipcoin').innerHTML  = coin[Math.floor(Math.random() * (4))]; $('#flipcoin').fadeIn(100); }, 300);
    });