# Prompt 4: Generating with Grammars

> "How can you make a language different so that in the process of learning it, you have to look at the world in a different way."
>
> Allison Parrish, "Interview with Allison Parrish" on [_esoteric.codes_](https://esoteric.codes/blog/interview-with-allison-parrish)
> )

## Readings

### Theory

* ["How Language Works", Steven Pinker (_The Language Instinct_)](https://drive.google.com/file/d/1xlQq8OBPtODAnzQcVbiMKpvsWj2ndQyI/view?usp=sharing)

### Practice

* _Articulations_, Allison Parrish

### Documentation

* [Tutorial: Generating w' RiTa Grammars](https://observablehq.com/@dhowe/tut-rita-grammars)


## Summary

To this point in our work together, we've established and broken apart our understanding of the ways in which meaning occurs in a generative text. In this assignment, we'll explore building up our knowledge again using language as a kind of symbol. Here, however, we're interested in the ways that symbols combine to genereate text that engages in meaning-making by employing patterns of semantic sense that we define as "grammar."

Traditionally, this term is used to both connote and denote agreeements of subjects, verbs, objects, and modifiers. Our organic deployment of this concept often differs from canonical "correct grammar," and our explorations of using grammar apparently "incorrectly" can teach us as much about using its as can being "proper" or "correct."

This assignment asks you to construct and observe the effects of grammars for which you can set the rules, albeit in a somewhat more-or-less automated way.

## Goals

* revisit and expand our definition and understanding of "grammar"
* explore new generative techniques that revolve around the use of _corpora_
* supplementing our understanding of the word "source" in our generative computational context
* expanding our repetoire of techniques toward meaning-making through generative processes

## Outcomes

This assignment's outcomes are referred to directly as _texts_, as they will look like _prose_ more than anything else. As such, we should
not consider them the same way that we might something that is more _verse_-like in shape or information.

The above also means that there is a _word count_ on each output of **no fewer than 250 words** per output sample.

* 2 texts which engage with our new understandings of "grammar":
  * 1 which manually constructs a generative grammar
    * This generative grammar must be based on something _other than_ traditional subject-verb agreement 
  * 1 which uses a Markov chain to combine no fewer than `2` source texts
    * The source texts must have a common thread -- e.g. all science fiction stories or cookbooks

Each of these pieces should be discussed in an individual [`reflection.md`](writing/reflection.md) document that explores a few questions relating to _both_ pieces and your own comparison of the two.

## Process

This work can be completed locally using `nodeJS`, but can also be achieved using [`p5.js`](https://p5js.org/) for visual elements. 


### `p5.js`

If using `p5.js`' online editor, paste your links in the following table:

|Title |Sketch URL|
|:-----|:---------|
| |  |

Keep in mind that to use source texts, you'll need to upload assets to the `p5.js` sketch that you're using.

### `nodeJS`

* To install `RiTa`, type: `npm install`

Place all output samples in the `writing` folder named for the process (either `grammar` or `markov`) used to generate it.
