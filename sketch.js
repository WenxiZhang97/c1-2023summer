let font;

var words = ["gardenia terrace", 
             "As Is NYC", 
             "Anejo", 
             "Kochi", 
             "Senza Gluten by Jemiko 100% Gluten Free",
             "44 & X Hell's Kitchen",
             "Chai", 
             "An'nam", 
             "53", 
             "The Chef's Table at Brooklyn Fare", 
             "Dim Sum Sam", 
             "Raosu Hotpot&Sushi", 
             "Avra Madison Estiatorio", 
             "Nello", 
             "Song's",
             "Serafina Italian",
             "CAVA", 
             "Pho 39", 
             "Bryant Park Grill", 
             "Lady M", 
             "The Grill",
             "The Hugh",
             "DIG", 
             "Ai Fiori", 
             "TONCHIN NEW YORK", 
             "Zuma", 
             "Ichiran", 
             "Beard Papa's", 
             "Sistina", 
             "ONGI", 
             "Hui",
             "Urbana Cafe",
             "Naruto", 
             "Vicolina", 
             "Hao Noodle", 
             "RH", 
             "Sapps", 
             "Laughing Man", 
             "Kong Sihk Tong",
             "Nobu",
             "The Attic", 
             //drinks
             "Arvaci", 
             "In Common", 
             "Aronne", 
             "Tiger sugar",
             "Albert's Bar",
             "The lost draft", 
             "Maman"
            ];

var index = 0;

// function preload() {
// font = loadFont('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
// }


function setup() {
  createCanvas(800, 800);
  // textFont(font);  // Set the current font to the loaded font
  // textSize(36);  // Set the text size
}

function draw() {

  background(0);

  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
  index = floor(random(words.length));
  
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
}