let btnGenerate = document.querySelector('button');

let timepromptresult = document.querySelector("#timeprompt");

let hearactionresult = document.querySelector("#hearaction");
let hearresult = document.querySelector("#hear");

let tasteactionresult = document.querySelector("#tasteaction");
let tasteresult = document.querySelector("#taste");

let seeactionresult = document.querySelector("#seeaction");
let seeresult = document.querySelector("#see");

let feelactionresult = document.querySelector("#feelaction");
let feelresult = document.querySelector("#feel");

let smellactionresult = document.querySelector("#smellaction");
let smellresult = document.querySelector("#smell");

let actionactionresult = document.querySelector("#actionaction");
let actionresult = document.querySelector("#action");

let timeprompt = ['On a rainy day', 'Before tucking into bed', 'First thing in the morning', 'On the weekend',
'On wednesday', 'First thing in the morning', 'Before tucking into bed', 'In the morning', 'Before you sleep',
'On a rainy day', 'Next time you have a break', 'At the end of the day', 'After school', 'After dinner', 
'After lunch', 'Before breakfast', 'When the sun goes down', 'During the sunrise', 'After your bills arrive', 
'When you feel energetic', 'Next time you see your neighbour', 'After curfew'];

let smellaction = ['sniffing', 'burning and inhaling the fumes of', 'smelling'];
let smell = ['incense', 'citrus', 'strawberry', 'a sprig of lavender', 'lavender oil', 'orange zest', 'cardamom coffee',
'old books', 'stolen flowers', 'grass', 'szechuan chilli', 'tiger balm', 'fresh rosemary', 'jasmine tea', 'pine', 
'pencil shaving', 'newspaper', 'marijuana', 'candles', 'flowers', 'fresh air', 'coffee roasting', 'essential oils'];

let seeaction = ['seeing', 'watching', 'squinting your eyes and looking at', 'fluttering eyelashes and staring at'];
let see = ['lamps', 'out the window', 'a friend', 'light a background', 'under a brick', 'warm lights', 
'natural lighting', 'view out the window', 'view on deck', 'flight radar 24', 'sunshine', 'local business', 
'eyelids', 'artwork', 'tram', 'train station' ];

let hearaction = ['put on headphones and listen to', 'start a spotify radio with ', 'listen to'];
let hear = ['birds chirping', 'afrobeats', 'ambient noise', 'birds chirping', 'the wind', 'afrobeats', 'nantes beirut', 
'listen for planes', 'call a friend', 'reggaeton', 'delivery playlist', 'low fi beats', 'podcast', 'bluegrass', 
'narrate what you’re doing', 'joys and frustrations out loud' ];

let tasteaction = ['consuming', 'nestling your face into', 'tasting'];
let taste = ['coffee', 'citrus jam', 'jasmine tea', 'sourdough bread', 'olives', 'cardamom coffee', 
'peppermint and black tea mix', 'citrus', 'toothpaste', 'tea', 'pickle', 'stonefruit', 'coffee', 
'miso', 'chocoloate', 'kombucha', 'rice crackers', 'rose water' ];

let feelaction = ['burying your fists into', 'carefully touching', 'touching', 'feeling', 'grabing and holding'];
let feel = ['grass', 'pebbles', 'wheat bag', 'grass', 'fresh sheets','something warm', 'sunshine' ];

let actionaction = ['go'];
let action = ['wash your hands', 'wash your feet', 'change your sheets', 'draw a small idea', 'set up the percolator', 
'take a cold shower', 'take a hot shower', 'stretch', 'write a list', 'write a journal entry','wash your face', 'change clothes', 
'put on fresh socks', 'apply lotion', 'apply tiger balm', 'masturbate', 'rearrange some furniture', 'roll a J' ];

function getRandomNumber(min, max) {
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnGenerate.addEventListener('click', () => {

    let indexTP = getRandomNumber(0, timeprompt.length-1);
    timepromptresult.innerText = timeprompt[indexTP];

    let indexsmellA = getRandomNumber(0, smellaction.length-1);
    smellactionresult.innerText = smellaction[indexsmellA];
    let indexsmell = getRandomNumber(0, smell.length-1);
    smellresult.innerText = smell[indexsmell];

    let indexhearA = getRandomNumber(0, hearaction.length-1);
    hearactionresult.innerText = hearaction[indexhearA];
    let indexhear = getRandomNumber(0, hear.length-1);
    hearresult.innerText = hear[indexhear];

    let indexseeA = getRandomNumber(0, seeaction.length-1);
    seeactionresult.innerText = seeaction[indexseeA];
    let indexsee = getRandomNumber(0, see.length-1);
    seeresult.innerText = see[indexsee];

    let indextasteA = getRandomNumber(0, tasteaction.length-1);
    tasteactionresult.innerText = tasteaction[indextasteA];
    let indextaste = getRandomNumber(0, taste.length-1);
    tasteresult.innerText = taste[indextaste];

    let indexfeelA = getRandomNumber(0, feelaction.length-1);
    feelactionresult.innerText = feelaction[indexfeelA];
    let indexfeel = getRandomNumber(0, feel.length-1);
    feelresult.innerText = feel[indexfeel];

    let indexactionA = getRandomNumber(0, actionaction.length-1);
    actionactionresult.innerText = actionaction[indexactionA];
    let indexaction = getRandomNumber(0, action.length-1);
    actionresult.innerText = action[indexaction];
  
 
    
} );