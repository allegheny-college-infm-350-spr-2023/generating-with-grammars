let rita = require('rita');

let rules = {
    start: "$observe $name $move",
    name: "Jane | Jack | Jarvis | Jermaine | Jorgen",
    move: "trot | run | sauntering",
    observe: "see | observe | spy"
}

let grammar = rita.grammar(rules);
console.log(grammar.expand());
