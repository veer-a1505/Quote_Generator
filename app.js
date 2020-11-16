let quotes = [
    { 
        quote : "“Be yourself; everyone else is already taken.”",
      author : "― Oscar Wilde"
    },
    { 
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author : "― Albert Einstein"
    },
    { 
        quote : "“Be the change that you wish to see in theworld.”",
        author : "― Mahatma Gandhi"
    },
    { 
        quote : "“A friend is someone who knows all about youand still loves you.”",
        author : "― Elbert Hubbard"
    },
    { 
        quote : "“Logic will get you from A to Z; imaginationwill get you everywhere.”",
        author : "― Albert Einstein"
    },
    {
        quote : "“In three words I can sum up everything I've learned about life: it goes on.”",
        author : "― Robert Frost"
    },
    {
      quote : "“No one can make you feel inferior without your consent.”",
      author : "― Eleanor Roosevelt"
     },  
     {
      quote : "“Life isn't about finding yourself. Life is about creating yourself.”",
        author : "― George Bernard Shaw"
    },
    {
      quote : "“Folks are usually about as happy as they make their minds up to be.”",
      author : "― Abraham Lincoln"
     },
     {
        quote : "“One good thing about music, when it hits you, you feel no pain.”",
        author : "― Bob Marley"
    },
    {
      quote : "“Not all of us can do great things. But we can do small things with great love.”",
      author : "― Mother Teresa"
     },           
     {
         quote : "“But better to get hurt by the truth than comforted with a lie.”",
         author : "― Khaled Hosseini"
     },
     {
        quote : "“Books are a uniquely portable magic.”",
        author : "― Stephen King"
    },
    {
        quote : "“Everyone thinks of changing the world, but no one thinks of changing himself.”",
        author : "― Leo Tolstoy"
    },
    {
        quote : "“Whatever you are, be a good one.”",
        author : "― Abraham Lincoln"
    },
    {
        quote : "“Where there is love there is life.”",
        author : "― Mahatma Gandhi"
    },
    {
        quote : "“A good friend will always stab you in the front.”",
        author : "― Oscar Wilde"
    },
    {
        quote : "“The fault, dear Brutus, is not in our stars, but in ourselves.”",
        author : "― William Shakespeare"
    },
    {
        quote : "“Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?”",
        author : "― L.M. Montgomery"
    },
    {
        quote : "“The planet is fine. The people are fucked.”",
        author : "― George Carlin"
    },
    {
        quote : "“Never laugh at live dragons.”",
        author : "― J.R.R. Tolkien"
    },
    {
        quote : "“Literature is a luxury; fiction is a necessity.”",
        author : "― G.K. Chesterton"
    },
    {
        quote : "“Never attempt to teach a pig to sing; it wastes your time and annoys the pig.”",
        author : "― Robert Heinlein"
    },
    {
        quote : "“If you try to fail, and succeed, which have you done?”",
        author : "― George Carlin"
    },
    {
        quote : "“The past beats inside me like a second heart.”",
        author : "― John Banville, The Sea"
    },
    {
        quote : "“Dreams are the touchstones of our characters.”",
        author : "― Henry David Thoreau"
    },
    {
        quote : "“We are all born mad. Some remain so.”",
        author : "― Samuel Beckett"
    },
    {
        quote : "“If we have no peace, it is because we have forgotten that we belong to each other.”",
        author : "― Mother Teresa"
    },
    {
        quote : "“Give a girl the right shoes, and she can conquer the world.”",
        author : "― Bette Midler"
    },
    {
        quote : "“Make it a rule never to give a child a book you would not read yourself.”",
        author : "― George Bernard Shaw"
    },
    {
        quote : "“What's meant to be will always find a way”",
        author : "― Trisha Yearwood"
    },
    {
        quote : "“Always do what you are afraid to do.”",
        author : "― Ralph Waldo Emerson"
    },
    {
        quote : "“I have no special talents. I am only passionately curious.”",
        author : "― Albert Einstein"
    },

  ]


let el = document.querySelector('.btn');
el.addEventListener("click", function(){
  let randomNum , qte , ath ;
  randomNum = Math.floor(Math.random() * quotes.length) + 1;
  qte = quotes[randomNum].quote ;
  ath = quotes[randomNum].author ;
  document.getElementById("qte").innerHTML = qte;
  document.getElementById("ath").innerHTML = ath ;
});

  
 
  

