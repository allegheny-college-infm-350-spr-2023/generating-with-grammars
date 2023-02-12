let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(2);

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    markov.addText(text);
}

loadFile("data/fish.txt");
loadFile("data/badger.txt");
loadFile("data/jekyll.txt");

sentences = markov.generate(10);

console.log(sentences.join(' '))
