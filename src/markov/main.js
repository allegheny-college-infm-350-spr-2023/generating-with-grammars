let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(3);

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    return text;
}

const loadPhones = (words) => {
    let phones = [];
    let phrases = words.split(' ');
    words = phrases.filter(word => word.trim());
    for(let word of words){
        phones.push(rita.phones(word,{silent: true}));
    }
    return phones;
}

let words = loadFile("data/shakespeare.txt");
let phones = loadPhones(words);

let nemes = [];
for(let phone of phones) {
    let sounds = phone.split("-");
    for(let sound of sounds) {
        nemes.push(sound);
    }
}

markov.addText(nemes.join(' '));
sentences = markov.generate(14);
console.log(sentences.join(' '))
