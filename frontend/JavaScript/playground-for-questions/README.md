JavaScript Questions

1. JS'te Event Loop nedir ?
2. Asenkron programlama nasil calisir ?
3. JS'te multithread programlama yapilabilinir mi ?
4. Paralel programlama yapilir mi ?
5. JS single thread mi multi thread mi ?
6. Single thread veya multi thread ise nasil asenkron oluyor ?
7. Threadler nasil aciliyor nasil kapaniyor ?
8. ES6'te object/class inheritance'i nasil yaparsin ?
9.  Js'te chaining nedir ? nasil implemente edersiniz ?
10. CSS bir programlama dili midir ? 
11. CSS ne ise yarar her programi yazabilir miyiz ? turing complet midir ? Turing complete ne demek ?
12. DOM'da bulunan bir span elemanini hareketlendirmenin kac yolu vardir ?
13. 60 FPS rendiringe nasil ulasabiliriz ? 60fps smooth bir animasyona nasil ulasiriz ?
14. Browser'larin render'in engine'lari nasil calisir ? Ekran kartlari nasil calisiyor ?
15. Cookie, Session ve Local Storage arasindaki farklar nedir ?
16. Tilde ~ operator''u ne ise yarar ? (css'te)
17. jquery -> $.ready() nasil calisir ?
18. What is this code doing? What is the output?
    ```javascript
    function initButtons() {
      var body = document.body, button;
      
      for (let i = 0; i < 5; i++) {
        button = document.createElement('button');
        button.innerHTML = `Button ${i}`;
        button.addEventListener('click', e => {
          console.log(i)
          alert(i);
      });
      body.appendChild(button);
      }
    }
    initButtons();
    ```
### Advanced JavaScript Concepts made by Github Copilot
1. [ ] What is the difference between a variable that is: null, undefined or undeclared?
2. [ ] What is block scope and function scope?
3. [ ] What is the difference between == and ===?
4. [ ] What is the difference between using “let” and “var”?
5. [ ] What is the difference between host objects and native objects?
6. [ ] Explain the difference between synchronous and asynchronous functions.
7. [ ] What is event loop in JavaScript?
8. [ ] What is the difference between call stack and task queue?
9.  [ ]  What is the difference between an “attribute” and a “property”?
10. [ ]  What is the difference between document load event and document DOMContentLoaded event?
11. [ ]  What is the difference between function declaration and function expression?
12. [ ]  What is the difference between function declaration hoisting and variable hoisting?
13. [ ]  What is the difference between document load event and window load event?
14. [ ]  What is the difference between null and undefined?
15. [ ]  What is the difference between innerHTML and outerHTML?
16. [ ]  What is the difference between “use strict”; and ‘use strict’;?



### TODOs
- [x] Learn hoisting and closure in JavaScript
- [ ] Learn how to work `Event Loop` in JavaScript -> [watch this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en)
- [ ] Learn how to work `Asynchronous Programming` in JavaScript -> [read this article](https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/#:~:text=In%20summary%2C%20asynchronous%20programming%20is,async%2Fawait%2C%20and%20promises.), [this MDN doc article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [ ] Learn inheritince with prototype in JavaScript
- [ ] Learn inheritince with ES6 classes(syntax) in JavaScript
- [ ] Learn `this` keyword in JavaScript
- [ ] Learn `bind`, `call`, `apply` methods in JavaScript
- [ ] Learn `new` keyword in JavaScript
- [ ] Learn new ES6 features in JavaScript, [source1-article](https://www.boardinfinity.com/blog/top-10-features-of-es6/#:~:text=ES6%20comes%20with%20significant%20changes,programming%20easier%20and%20more%20fun.), [source2-github-repo](https://github.com/lukehoban/es6features), [source3-w3school](https://www.w3schools.com/js/js_es6.asp)
- [ ] Learn [all Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) like `Object.create(), Object.assign(), Object.keys(), Object.defineProperty` in JavaScript
- [ ] Learn [all `Array` Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in JavaScript
- [ ] And then I will work Browser/Web APIs(DOM, setTimeout, Fetch, Event, Storage, LocalStorage etc.) -> [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API)
- [ ] And then I will work on Basic Algorithms and Data Structures with JavaScript
- [ ] And then I will work on React and React Hooks, State Managment Tools(redux, mobx, context api, etc.)
- [ ] Read [this article](https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104)

      Topics to cover in this article:
      1. Value vs. Reference Variable Assignment
      2. Closures(How to work closure(lexical scope) in JS ?)
      3. Destructuring
      4. Spread Syntax
      5. Rest Syntax
      6. Array Methods
      7. Generators
      8. Identity Operator (===) vs. Equality Operator (==)
      9. Object Comparison
      10. Callback Functions
      11. Promises
      12. Async Await

- [ ] Read this article [10 Interview Questions Every JavaScript Developer Should Know from **Eric Elliott**](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)
- [ ] Read this article [10 JavaScript concepts you need to know for interviews](https://codeburst.io/10-javascript-concepts-you-need-to-know-for-interviews-136df65ecce)
- [ ] Review this [javascript-interview-question-repo](https://github.com/BomBoch/javascript-interview-questions/tree/8c689beec7c712d86cdb2e5a40eb6e04c0454a1d)
- [ ] Read this [`20 Javascript interview questions with code answers.` article](https://medium.com/@fullstacktips/20-javascript-interview-questions-with-code-answers-dd9fb28f3f5a)
- [ ] Read this article [JavaScript Interview Questions](https://www.interviewbit.com/javascript-interview-questions/)
- [ ] Learn advanced git command
- [ ] And then I will work on Advanced Algorithms and Data Structures with JavaScript
- [ ] And then I will work on TypeScript
- [ ] How to work for-loop with var declaration 
- [ ] Learn some important design patterns in JavaScript




Regular Tasks
- [ ] if possible solve 10 katas from [codewars](https://www.codewars.com/dashboard)
- [ ] contunie course
- [ ] ...