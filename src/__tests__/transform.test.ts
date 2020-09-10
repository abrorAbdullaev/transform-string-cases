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
  })
});

describe('[Lowercase]', () => {
  it('should lowercase a word', () => {
    const lowercasedWord = transformer.lowercase('LowercasedWord');
    expect(lowercasedWord).toBe('lowercasedWord');
  });

  it('should not change already lowercased word', () => {
    const lowercasedWord = transformer.lowercase('lowercasedWord');
    expect(lowercasedWord).toBe('lowercasedWord');
  });

  it('should lowercase a sentence', () => {
    const lowercasedSentence = transformer.lowercase('Lowercased Sentence');
    expect(lowercasedSentence).toBe('lowercased Sentence');
  });

  it('should lowercase all words in sentence', () => {
    const lowercasedSentence = transformer.lowercase('Lowercased Sentence', true);
    expect(lowercasedSentence).toBe('lowercased sentence');
  });

  it('should apply callback function to transformed text', () => {
    const lowercasedAndModifiedText = transformer.lowercase('Lowercased Sentence', true, 
      (text: string): string => 'a' + text + 'a');

      expect(lowercasedAndModifiedText).toBe('alowercased sentencea');
  });
});