let rita = require('rita');

let rules = {
    start: "$subject $verb $subject",
    subject: "man | dog",
    verb: "bites | mauls"
}

let grammar = rita.grammar(rules);
console.log(grammar.expand());
