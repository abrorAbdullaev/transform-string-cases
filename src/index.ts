export class Transformer {
  /**
   * Capitalizes the text
   * e.g. capitalized sentence => Capitalized sentence
   * 
   * @param text Text to be transformed
   * @param all Transform all words in sentence
   * @param callback Callback function to be applied to transformation result
   */
  capitalize(text: string, all?: boolean, callback?: (text: string) => string): string {
    const transformedText = text.trim().replace(!!all ? /\s[a-z]|^[a-z]/g : /^[a-z]/, v => v.toUpperCase());
    return !!callback ? callback(transformedText) : transformedText;
  }

  /**
   * Lowercases the word or sentence 
   * e.g. lowerCased Sentence = lowerCased sentence
   * 
   * @param text String to be lowerCased
   * @param all Transform all words in sentence
   * @param callback Callback function to be applied to transformation result
   */
  lowercase(text: string, all?: boolean, callback?: (text: string) => string): string {
    const transformedText = text.trim().replace(!!all ? /\s[A-Z]|^[A-Z]/g : /^[A-Z]/, v => v.toLowerCase());
    return !!callback ? callback(transformedText) : transformedText;
  }
}
