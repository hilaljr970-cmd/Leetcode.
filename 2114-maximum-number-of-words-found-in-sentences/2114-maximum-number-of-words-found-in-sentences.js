/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxword = 0;

    for(let sentence of sentences){
        let wordcount = sentence.split(" ").length;
        maxword = Math.max(maxword,wordcount)
    }
    return maxword;
    
};