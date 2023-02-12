let rita = require('rita');
let fs = require('fs');

const loadFile = (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        lines = data.split("\n");
        lines = lines.map(line => line);
        markov.addText(lines.join(' '));
    });
}

loadFile("data/fish.txt");
loadFile("data/badger.txt");

let markov = rita.markov(4);

sentences = markov.generate(10);
//console.log(sentences);
