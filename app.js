const button = document.querySelector('.newLineButton');
const line = document.querySelector('.line')


const Lines = [
  `"They say Disneyland is the happiest place on earth. Well, apparently,no one has ever been standing next to you"`
, `"Do you have a name, or can I just call you mine?"`
, `"Do you have a map? Because I just got lost in your eyes."`
, `"If you were a song, you'd be the best single on the album."`
, `"Want to go outside for some fresh air? You took my breath away."`
, `"Do you have a map? Because I just got lost in your eyes."`
, `"I'm learning about important dates in history, wanna be one of them?"`
, `"Do you believe in love at first sight, or should I walk by again?"`
,`"Your hand looks lonely. Can I hold it for you?"`
,`"Aren't you tired? From running through my mind all day?"`
,`"If you let me borrow a kiss, I promise I'll give it right back"`
,`"I'd never play hide and seek with you, because someone like you is impossible to find"`
,`"On a scale of 1 to 10, you're a 9 and I'm the 1 you need"`]


button.addEventListener('click' , function(){
  const random = Math.floor(Math.random() * Lines.length);

  line.innerText = Lines[random]
})