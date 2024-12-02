#include <iostream>
#include <sstream>
#include <string>
using namespace std;

class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        istringstream ss(sentence); // Create a string stream
        string word;
        int index = 1; // 1-based index
        
        // Iterate through each word in the sentence
        while (ss >> word) {
            // Check if the word starts with the searchWord
            if (word.substr(0, searchWord.size()) == searchWord) {
                return index;
            }
            index++;
        }
        
        // If no word is found, return -1
        return -1;
    }
};