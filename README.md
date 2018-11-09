# WordSearchJS
A Javascript library to add Word Search Tasks to online and offline experiments. Adapted from Robert J. Calin-Jageman's
[word search task](https://calin-jageman.net/lab/word_search/), with added functionality to facilitate Qualtrics integration.

## Using WordSearchJS in Qualtrics

### Setup

1. Navigate to the "Look and Feel" section of your survey, and click on the "Advanced" tab
2. Edit the "Header" section, and add the following lines to load the library script:
```
<script src="https://cdn.jsdelivr.net/gh/QuentinAndre/WordSearchJS/lib/wordsearch.min.js"></script>
```
3. Create a "Text" question, and add the following HTML code:
```
<div id="mysearchtask"></div>
```

4. Edit the "Custom JS" of the question, and add the following Javascript code:
```
var mygrid = [
    ['.', '.', '.', '.', '.', '.'],
    ['.', 'T', 'E', 'S', 'T', '.'],
    ['.', '.', '.', '.', '.', '.']
    ];

var mywords = ["TEST"];

ws = new WordSearch({
        "grid": mygrid, // Your grid to search
        "words": mywords, // The list of words to find
        "parentId": "mysearchtask",
        "onFindWord": function() {console.log("A word was found")} // What to do when a word is found });
```

That's it! You have added a word search task to Qualtrics!

### Accessing and storing participants' behavior

You can access three useful statistics from WordSearchJS at any time:
* `WordSearch.getScore()` returns the number of words found so far.
* `WordSearch.getRemaining()` returns the number of words not found yet.
* `WordSearch.getTiming()` returns a list of length `words`, containing at the index of each word a `-1` (if the word has not been found yet) or an integer (corresponding to the time in seconds when the word was found).


Combined with the `onFindWord` argument, you can use those methods to store useful information in Qualtrics:

```
var mygrid = [
    ['.', '.', '.', '.', '.', '.'],
    ['.', 'T', 'E', 'S', 'T', '.'],
    ['.', '.', '.', '.', '.', '.']
    ];

var mywords = ["TEST"];

function storeScoreAndTimingInQualtrics() {
    var score = this.getScore();
    var timing = this.getTiming();
    var timing_str = timing.join(",") // Convert the timings separated by commas to a string
    Qualtrics.SurveyEngine.setEmbeddedData("wordsFound", score);
    Qualtrics.SurveyEngine.setEmbeddedData("timingWordsFound", timing_str);
}

ws = new WordSearch({
        "grid": mygrid,
        "words": mywords,
        "parentId": "mysearchtask",
        "onFindWord": storeScoreAndTimingInQualtrics; // No parenthesis! Will call this function when a word is found.
    });
```

## Version history

### v0.5.0
* First release of the library.
