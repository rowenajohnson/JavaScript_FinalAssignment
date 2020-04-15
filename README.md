# Assignment 3

## Purpose

This vanilla JavaScript web app displays various daily menus which can be viewed by clicking either the next or previous buttons.

![Image of app](app.JPG)

## Concepts Learned

To create this "Bun on the Run" menu app the following JavaScript concepts were used:

- variables let vs const
- menu
- ***
- ***
- ***
- ***
- ***
- ***
- ***
- ***

## How I made the web app

1. First I defined a const called menus and assigned it to be an empty array

   ```js
   const menus = [];
   ```

   The reason why I did that is because the menus array will eventually be assigned an array of objects where each object represents a daily menu, complete with menu items and prices.

2. Next I **\*\***\*\***\*\***\_\_**\*\***\*\***\*\***

   ```js
   let currentIndex = 0;
   ```

   The reason why I did that is because **\*\*\*\***\*\***\*\*\*\***\_\_**\*\*\*\***\*\***\*\*\*\***

   **{`I have created this assignment in a different way, i.e, I have made a function named 'right' & 'left' where i mentioned each menus in the defined order in both function. 'right' function is made because when right arrow is clicked it will move to next in the increasing menu No order (same for "left"function which move in opposite way). I have made changes in index.html where i made action movement for left & right.`}**

4) Next I defined **\*\*\*\***\*\***\*\*\*\***\_**\*\*\*\***\*\***\*\*\*\***

   ```js
   const menuTitle = document.querySelector("#menu h2");
   ```

   The reason why I did that is because **\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***

5) Next I defined a **\*\***\*\***\*\***\_\_\_**\*\***\*\***\*\***

   ```js
   function display(todaysmenu) {
       menuTitle.textContent = todaysmenu.title;
       soup.title.textContent = todaysmenu.soup;
       soup.price.textContent = todaysmenu.soupPrice;
       ...etc...
   }
   ```

   This function displays the current menu. For exammple, it displays the menu title by **\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***

6) Next I defined a function called getJson which will fetch our menus data in JSON format

   ```js
   async function init() {
     const res = await fetch("____________________________");
     const data = await res.json();
     menu.push(...data);
     display(menu[currentIndex]);
   }
   ```

   First I defined a constant called res which will be assigned **\*\***\*\*\*\***\*\***\_\_\_\_**\*\***\*\*\*\***\*\***

   Next I defined a const called data which is assigned **\*\***\*\***\*\***\_\_**\*\***\*\***\*\***.

   Next I inserted that entire array of objects into our menus array by \***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***.

   Next I called the function display to display our current menu passing in the argument of our first menu in our array

7) Next I defined a function called prev which takes no parameter but decrements our currentIndex by 1 then calls our display function

   ```js
   function prev() {
     currentIndex = currentIndex === 0 ? menu.length - 1 : currentIndex - 1;
     display(menu[currentIndex]);
   }
   ```

   The reason I'm manipulating the value of currentIndex is **\*\*\*\***\_\_\_\_**\*\*\*\***

8) In similar fashion, I also created a function called next with similar logic.

   ```js
   function next() {
     currentIndex = currentIndex === menu.length - 1 ? 0 : currentIndex + 1;
     display(menu[currentIndex]);
   }
   ```

9) Next I added some click event listeners to both next and previous buttons

   ```js
   previousMenu.addEventListener("click", prev);
   nextMenu.addEventListener("click", next);
   ```

   The reason for adding click event handlers is so that \***\*\*\*\*\***\_\_\_\_\***\*\*\*\*\***

10) Finally, I \***\*\*\*\*\*\*\***\_\_\***\*\*\*\*\*\*\***


    ```js
    init();
    ```

# Reflection

## What is the hardest part of creating this web app?

- My hardest part of this project was figuring out the some new areas of HTML like `svg tag, g tag` which i took lots of efforts to figure out, so that i can work with it. some concept of this area is vague.

## What remaining JS concepts are still kind of foggy?

- I believe i have made this project in the simplest JS because i just use only two function and made a `else if` statement inside it.

## Deck of cards API (remnant of Assignment 4)

Given the documentation listed here: https://deckofcardsapi.com/ it lists 2 APIs/REST endpoints `Shuffle the Cards` and `Draw a card`. What would you need to do to draw 1 card?

- ***
