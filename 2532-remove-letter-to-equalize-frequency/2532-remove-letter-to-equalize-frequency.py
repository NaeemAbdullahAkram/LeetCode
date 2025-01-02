from collections import Counter
class Solution(object):
    def equalFrequency(self, word):
   
        letters = Counter(word)
        for letter in letters:
            replaced_word = word.replace(letter, '', 1)
            new_letters = Counter(replaced_word)
            if len(set(new_letters.values())) == 1:
                return True

        return False