
 
var quotes = [
    'Do not give up because you can do it', 
    'Everything in life is taking risks', 
    'In everything put God first', 
    'Always have a target at least even if you do not have a well defined goal', 
    'Communities and friends and acquintance are very important in tech',
     'Love yourself first and other things can fall in place',
     'Sighs i am out of quotes', 
     'Coding is hard and a lot of tears are involved', 
     'It can be lonely sometimes but it builds you up',
      'Sleep is necessary no matter what',
      'Writing is hard but beautiful when it comes from the heart',
      'Learn to rest and Learn to learn and Learn to take your time',
      'Making impact is important',
      'Life never go as planned always have backup plan no matter what',
      'Don\'t rush the process good things take time'
    ]



    function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length-1));

    document.getElementById('quotedisplay').innerHTML = quotes[randomNumber];
    document.getElementById('quotedisplay').style.color = 'red';
    document.getElementById('quotedisplay').style.fontFamily = 'cursive';
    document.getElementById('quotedisplay').style.fontSize = '29px';
   
} 
setInterval(newQuote, 3000)


    
 
