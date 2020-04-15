const menu = [
  {
    title: "Menu 1",
    soup: "Minestrone",
    soupPrice: "2.85",
    salad: "Greek",
    saladPrice: "4.50",
    lighterFare: "Vegetable Biryani",
    lighterFarePrice: "5.00",
    entree: "Breaded Chicken on a Bun",
    entreePrice: "6.00",
  },
  {
    title: "Menu 2",
    soup: "Red Lentil Dal",
    soupPrice: "3.95",
    salad: "Julienne",
    saladPrice: "3.75",
    lighterFare: "Madras Chicken Salad Wrap",
    lighterFarePrice: "5.95",
    entree: "Fish & Chips",
    entreePrice: "6.50",
  },
  {
    title: "Menu 3",
    soup: "Spicy Squash & Pumpkin",
    soupPrice: "3.00",
    salad: "Mediterranean",
    saladPrice: "3.95",
    lighterFare: "Ham & Cheese Panini",
    lighterFarePrice: "5.25",
    entree: "Butter Chicken with Rice Pilaf",
    entreePrice: "6.25",
  },
  {
    title: "Menu 4",
    soup: "Clam Chowder",
    soupPrice: "3.25",
    salad: "Israeli Couscous & Feta",
    saladPrice: "4.75",
    lighterFare: "Pulled Pork on a Bun",
    lighterFarePrice: "5.25",
    entree: "Matar Paneer & Basmati Rice",
    entreePrice: "6.50",
  },
  {
    title: "Menu 5",
    soup: "Tomato",
    soupPrice: "2.95",
    salad: "Caesar",
    saladPrice: "4.75",
    lighterFare: "Burger & Fries",
    lighterFarePrice: "4.95",
    entree: "Beef & Broccoli with Fried Rice",
    entreePrice: "5.95",
  },
];

function right() {
  //alert(document.getElementById("title").innerHTML);
  if (document.getElementById("title").innerHTML == "Menu 1") {
    document.getElementById("title").innerHTML = menu[1].title;
    document.getElementById("sp").innerHTML = menu[1].soup;
    document.getElementById("sprate").innerHTML = menu[1].soupPrice;

    document.getElementById("sd").innerHTML = menu[1].salad;
    document.getElementById("sdrate").innerHTML = menu[1].saladPrice;

    document.getElementById("lfare").innerHTML = menu[1].lighterFare;
    document.getElementById("lrate").innerHTML = menu[1].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[1].entree;
    document.getElementById("erate").innerHTML = menu[1].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 2") {
    document.getElementById("title").innerHTML = menu[2].title;
    document.getElementById("sp").innerHTML = menu[2].soup;
    document.getElementById("sprate").innerHTML = menu[2].soupPrice;

    document.getElementById("sd").innerHTML = menu[2].salad;
    document.getElementById("sdrate").innerHTML = menu[2].saladPrice;

    document.getElementById("lfare").innerHTML = menu[2].lighterFare;
    document.getElementById("lrate").innerHTML = menu[2].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[2].entree;
    document.getElementById("erate").innerHTML = menu[2].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 3") {
    document.getElementById("title").innerHTML = menu[3].title;
    document.getElementById("sp").innerHTML = menu[3].soup;
    document.getElementById("sprate").innerHTML = menu[3].soupPrice;

    document.getElementById("sd").innerHTML = menu[3].salad;
    document.getElementById("sdrate").innerHTML = menu[3].saladPrice;

    document.getElementById("lfare").innerHTML = menu[3].lighterFare;
    document.getElementById("lrate").innerHTML = menu[3].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[3].entree;
    document.getElementById("erate").innerHTML = menu[3].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 4") {
    document.getElementById("title").innerHTML = menu[4].title;
    document.getElementById("sp").innerHTML = menu[4].soup;
    document.getElementById("sprate").innerHTML = menu[4].soupPrice;

    document.getElementById("sd").innerHTML = menu[4].salad;
    document.getElementById("sdrate").innerHTML = menu[4].saladPrice;

    document.getElementById("lfare").innerHTML = menu[4].lighterFare;
    document.getElementById("lrate").innerHTML = menu[4].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[4].entree;
    document.getElementById("erate").innerHTML = menu[4].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 5") {
    document.getElementById("title").innerHTML = menu[0].title;
    document.getElementById("sp").innerHTML = menu[0].soup;
    document.getElementById("sprate").innerHTML = menu[0].soupPrice;

    document.getElementById("sd").innerHTML = menu[0].salad;
    document.getElementById("sdrate").innerHTML = menu[0].saladPrice;

    document.getElementById("lfare").innerHTML = menu[0].lighterFare;
    document.getElementById("lrate").innerHTML = menu[0].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[0].entree;
    document.getElementById("erate").innerHTML = menu[0].entreePrice;
  }
}

function left() {
  //alert(document.getElementById("title").innerHTML);
  if (document.getElementById("title").innerHTML == "Menu 1") {
    document.getElementById("title").innerHTML = menu[4].title;
    document.getElementById("sp").innerHTML = menu[4].soup;
    document.getElementById("sprate").innerHTML = menu[4].soupPrice;

    document.getElementById("sd").innerHTML = menu[4].salad;
    document.getElementById("sdrate").innerHTML = menu[4].saladPrice;

    document.getElementById("lfare").innerHTML = menu[4].lighterFare;
    document.getElementById("lrate").innerHTML = menu[4].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[4].entree;
    document.getElementById("erate").innerHTML = menu[4].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 2") {
    document.getElementById("title").innerHTML = menu[0].title;
    document.getElementById("sp").innerHTML = menu[0].soup;
    document.getElementById("sprate").innerHTML = menu[0].soupPrice;

    document.getElementById("sd").innerHTML = menu[0].salad;
    document.getElementById("sdrate").innerHTML = menu[0].saladPrice;

    document.getElementById("lfare").innerHTML = menu[0].lighterFare;
    document.getElementById("lrate").innerHTML = menu[0].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[0].entree;
    document.getElementById("erate").innerHTML = menu[0].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 3") {
    document.getElementById("title").innerHTML = menu[1].title;
    document.getElementById("sp").innerHTML = menu[1].soup;
    document.getElementById("sprate").innerHTML = menu[1].soupPrice;

    document.getElementById("sd").innerHTML = menu[1].salad;
    document.getElementById("sdrate").innerHTML = menu[1].saladPrice;

    document.getElementById("lfare").innerHTML = menu[1].lighterFare;
    document.getElementById("lrate").innerHTML = menu[1].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[1].entree;
    document.getElementById("erate").innerHTML = menu[1].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 4") {
    document.getElementById("title").innerHTML = menu[2].title;
    document.getElementById("sp").innerHTML = menu[2].soup;
    document.getElementById("sprate").innerHTML = menu[2].soupPrice;

    document.getElementById("sd").innerHTML = menu[2].salad;
    document.getElementById("sdrate").innerHTML = menu[2].saladPrice;

    document.getElementById("lfare").innerHTML = menu[2].lighterFare;
    document.getElementById("lrate").innerHTML = menu[2].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[2].entree;
    document.getElementById("erate").innerHTML = menu[2].entreePrice;
  } else if (document.getElementById("title").innerHTML == "Menu 5") {
    document.getElementById("title").innerHTML = menu[3].title;
    document.getElementById("sp").innerHTML = menu[3].soup;
    document.getElementById("sprate").innerHTML = menu[3].soupPrice;

    document.getElementById("sd").innerHTML = menu[3].salad;
    document.getElementById("sdrate").innerHTML = menu[3].saladPrice;

    document.getElementById("lfare").innerHTML = menu[3].lighterFare;
    document.getElementById("lrate").innerHTML = menu[3].lighterFarePrice;

    document.getElementById("etree").innerHTML = menu[3].entree;
    document.getElementById("erate").innerHTML = menu[3].entreePrice;
  }
  // STEP 1 - Define your page variable

  // STEP 2 - Define all your querySelector variables that you'll need to display all info.
  // Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

  // STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
  // The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

  // STEP 4 - Create a function called next, that will increment your page counter by 1,
  // then run your display function using as the argument, the current menu as determined by your page variable

  // STEP 5 - Create a function called previous, that will decrement your page counter by 1,
  // then run your display function using as the argument, the current menu as determined by your page varibale

  // STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
  // which will eventually move the page value outside the bounds of your array.  Fix that.

  // STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.

  // STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
}
