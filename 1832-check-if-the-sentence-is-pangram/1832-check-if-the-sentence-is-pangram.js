/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let se = new Set(sentence);
    return se.size==26;
};