# Transform String Cases
Capitalizes or LowerCases the text or word

## Installation
    npm install transform-text-cases --save

## Getting Started
    import { Transformer } from 'transform-text-cases';
    
    console.log(Transformer.capitalize('lowerCasedWord')); // LowerCasedWord
    console.log(Transformer.lowercase('Upper Cased Word'), true); // upper cased word
    
## Docs
All the methods are the property of the Transformer object

    import { Transformer } from 'transform-text-cases';

### capitalize

    Transform.capitalize(text, all, callback)

- text -- string to be transformed, transformed text is trimmed
- all -- boolean to transform all words in given sentence or only first word
- callback -- callback method for the transformed text: (text: string) => string
    
    
### lowercase

    Transform.lowercase(text, all, callback)

- text -- string to be transformed, transformed text is trimmed
- all -- boolean to transform all words in given sentence or only first word
- callback -- callback method for the transformed text: (text: string) => string

    