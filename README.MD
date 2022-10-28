# Mr Roboger's Neighborhood

#### By Yodel Guanzon <yodelguanzon@gmail.com>

#### This is an independent project to test out our skills on conditional statements and looping.

## Technologies Used

* Git
* HTML
* CSS
* Javascript

## Description

A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

* For numbers that contain a 1, all digits are replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

[View on Github Pages](https://delguanzon.github.io/mr-robogers/)

## Setup/Installation Requirements

* Clone this repository on your desktop
* Navigate to the top level of the directory
* Look for index.html and open it in your web browser

## Known Bugs

* GitHub Pages will sometimes not display background image and FontFace from CSS file, if this happens clear your cache or open in a new private window

## Tests
```

Description: translateCode()

Test: "It should return an array of numbers based counting from 0 up to the user's inputted number."
Code: translateCode(5);
Expected Output:  [0,1,2,3,4,5]

Test: "Replace number 1 with 'Beep!', number 2 with 'Boop!' and number 3 with 'Won't you be my neighbor?' in the resulting array"
Code: translateCode(5);
Expected Output:  [0,'Beep!','Boop!', 'Won't you be my neighbor?', 3,4,5]

Test: "Replace number 1 with 'Beep!', number 2 with 'Boop!' and number 3 with 'Won't you be my neighbor?' in the resulting array"
Code: translateCode(5);
Expected Output:  [0,'Beep!','Boop!', 'Won't you be my neighbor?', 3,4,5]

Test: "Display hierarch of substition for the out"
Code: translateCode(5);
Expected Output:  [0,'Beep!','Boop!', 'Won't you be my neighbor?', 3,4,5]

Description: compareDigits()

Test: "It should return an array of the digits from the number"
Code: compareDigits(123);
Expected Output: [1,2,3];

Test: "It should return the highest digit from the digits of the number"
Code: compareDigits(123);
Expected Output: [3];

Test: "It should return the highest digit from the digits of the number"
Code: compareDigits(9123);
Expected Output: [9];

Test: "It should look for the numbers 1,2 and 3 in the array of digits"
Code: compareDigits(9123);
Expected Output: [1,2,3];

```

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 10/14/2022 Yodel Guanzon

