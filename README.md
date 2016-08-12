# Random-Political-Speech-Generator
Returns a randomly created political speech based off of past speeches.

This program takes in a string and returns a randomly generated version of that text. It does this by using a markhov chain wherein each word is associated with an array of words that immediately follow it.

For example, the sentence "Hello, I am a human" would create the following markov chain:

Hello : ['I'],
I : ['am'],
am : ['a'],
a : ['human'],
human : []

After the markov chain is generated, the next step is to return a random string. To do this, the writeLine() function 
produces a random number that is used to determine the next word in the return string.

I have split this program into separate functions to illustrate their use cases. Enjoy!

*NOTE*
**
  This program has been set up to return a randomly generated speech from Donald Trump. Please know that this does not mean I support Trump in any way shape or form.


