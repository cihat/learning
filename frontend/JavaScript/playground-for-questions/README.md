JavaScript Questions

1. JS'te Event Loop nedir ?
2. Asenkron programlama nasil calisir ?
3. JS'te multithread programlama yapilabilinir mi ?
4. Paralel programlama yapilir mi ?
5. JS single thread mi multi thread mi ?
6. Single thread veya multi thread ise nasil asenkron oluyor ?
7. Threadler nasil aciliyor nasil kapaniyor ?
8. ES6'te object/class inheritance'i nasil yaparsin ?
9. Js'te chaining nedir ? nasil implemente edersiniz ?
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