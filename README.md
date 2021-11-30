# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Screenshot](https://i.imgur.com/aD6OQjj.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/tip-calculator-websiteapp-using-javascript-rMEDL2jT3](https://www.frontendmentor.io/solutions/tip-calculator-websiteapp-using-javascript-rMEDL2jT3)
- Live Site URL: [https://sachin9328.github.io/tip-calculator-app/](https://sachin9328.github.io/tip-calculator-app/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- JavaScript addEventListener() method
- GlobalEventHandlers
- Changing CSS styles using JavaScript and adding input error messages 

```js
let allButtons = document.getElementsByClassName('btn');
let noOfButtons = allButtons.length;
let i;

for(i = 0; i < noOfButtons; i++) {
    allButtons[i].addEventListener('click', tipCalculate);
}
```

```js
var inp1 = document.getElementById("people-no");

inp1.onkeyup = function (e) {
    if (inp1.value == 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #b57f75";
        document.getElementById("no-of-people__error").innerHTML = "Can't be zero";
    } else if (inp1.value != 0) {
        e.target.style.outline = "none";
        e.target.style.border = "2px solid #26c0ab";
    }
};
```

### Useful resources

- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me figure out how to layout my design for desktop.
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This helped me with addEventListener() method.

## Author

- Sachin Jadhav
- Frontend Mentor - [@Sachin9328](https://www.frontendmentor.io/profile/Sachin9328)
- LinkedIn - [@Sachin Jadhav](https://www.linkedin.com/in/sachin-jadhav-651a71127/)

## Acknowledgments

Got some help on stackoverflow from [Max](https://stackoverflow.com/users/7879896/max).

