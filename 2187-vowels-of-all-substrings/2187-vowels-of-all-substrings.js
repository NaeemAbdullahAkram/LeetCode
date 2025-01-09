function countVowels(word) {
    let len = word.length;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (vowels.includes(word[i])) {
            count += len + (i * (len - i - 1));
        }
    }

    return count;
}