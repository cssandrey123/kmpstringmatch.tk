# kmpstringmatch.tk
Knutt Morris Pratt implementation algorithm for pattern searching

The ideea behind this website is to find all substrings of a string (with a given pattern) and the positions where they was found. For that, behind the scenes, this website use Knutt Morris Pratt algorithm. Why? Because is faster then a naive algorithm. A naive algorithm have time complexity in O(n* m), where n is legth of string and m is length of substring.KMP algorithm have time complexity in O(n). That is because it use a table with positions of sufixes and prefixes of the substring. That is very efficient when it searches for appearance
of substring because it knows where to move the index.
The webpage is HTML aplication styled with custome CSS and Bootstrap 4 library for making it responsive, DOM interaction and KMP implementation is written in vanilla Javascript.

HOW TO USE IT

You type a pattern and a text, or press the button "Generate random text". The algorthm behind make it all dinamic, so on every change, you will se your pattern with a diffrent background color when it was found in text below, also the number of matches that were found.
