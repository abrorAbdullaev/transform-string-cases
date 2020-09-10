import { Transformer } from '../index';

let transformer: Transformer;

beforeAll(() => {
  transformer = new Transformer();
});

describe('[Capitalize]', () => {
  it('should capitalize a word', () => {
    const capitalizedWord = transformer.capitalize('nonCapitalizedWord');
    expect(capitalizedWord).toBe('NonCapitalizedWord');
  });

  it('should not change already capitalized', () => {
    const capitalizedWord = transformer.capitalize('NonCapitalizedWord');
    expect(capitalizedWord).toBe('NonCapitalizedWord');
  });

  it('should capitalize a sentence', () => {
    const capitalizedSentence = transformer.capitalize('non capitalized Sentence');
    expect(capitalizedSentence).toBe('Non capitalized Sentence');
  });

  it('should capitalize all words in a sentence', () => {
    const capitalizedSentence = transformer.capitalize('non capitalized Sentence', true);
    expect(capitalizedSentence).toBe('Non Capitalized Sentence');
  });
  
  it('should apply callback to transformed text', () => {
    const capitalizedAndModifiedText = transformer.capitalize('non capitalized Sentence', true, 
      (capitalizedText: string): string => 'a' + capitalizedText + 'a');
    expect(capitalizedAndModifiedText).toBe('aNon Capitalized Sentencea');
  });

  it('should trim the text', () => {
    const capitalizedText = transformer.capitalize('  nonCapitalized  ');
    expect(capitalizedText).toBe('NonCapitalized');
  });
});

describe('[Lowercase]', () => {
  it('should lowercase a word', () => {
    const lowerCasedWord = transformer.lowercase('LowerCasedWord');
    expect(lowerCasedWord).toBe('lowerCasedWord');
  });

  it('should not change already lowerCased word', () => {
    const lowerCasedWord = transformer.lowercase('lowerCasedWord');
    expect(lowerCasedWord).toBe('lowerCasedWord');
  });

  it('should lowercase a sentence', () => {
    const lowerCasedSentence = transformer.lowercase('LowerCased Sentence');
    expect(lowerCasedSentence).toBe('lowerCased Sentence');
  });

  it('should lowercase all words in sentence', () => {
    const lowerCasedSentence = transformer.lowercase('LowerCased Sentence', true);
    expect(lowerCasedSentence).toBe('lowerCased sentence');
  });

  it('should apply callback function to transformed text', () => {
    const lowerCasedAndModifiedText = transformer.lowercase('LowerCased Sentence', true, 
      (text: string): string => 'a' + text + 'a');

      expect(lowerCasedAndModifiedText).toBe('alowerCased sentencea');
  });

  it('should trim the text', () => {
    const lowerCasedText = transformer.lowercase('  UpperCased  ');
    expect(lowerCasedText).toBe('upperCased');
  });
});