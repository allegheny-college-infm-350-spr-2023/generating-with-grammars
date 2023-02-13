// Loads the rita library
let rita = require('rita');

// Defines my grammar rule set
let rules = {
    start: "$observe $name $move; $observe $name $move",
    $name: "Jane | Jack | Jarvis | Jermaine[2] | Jorgen",
    move: "trot | run | sauntering | $observe",
    observe: "see | observe | spy"
}

// Creates the grammar object and applies rules
let grammar = rita.grammar(rules);
// Runs the grammar
console.log(grammar.expand());
