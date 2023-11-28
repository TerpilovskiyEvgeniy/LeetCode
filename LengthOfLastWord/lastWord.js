const lengthOfLastWord = (s) => {
    const word = s.trim().split(" ");
    const lastWord = word[word.length - 1];
    return lastWord.length
}
console.log(lengthOfLastWord("   fly me   to   the moon  "))