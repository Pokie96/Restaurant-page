import renderPageTabs from "./page-tabs";
import './styles/menu-page-style.css';

function renderMenuPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    const body = document.querySelector('body');
    body.className = 'menu-body';

    renderPageTabs();

    const headerBanner = document.querySelector('.header-banner');

    const activeButton = document.querySelector('#menu-button');
    activeButton.style.borderBottom = 'solid white';

    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Buster Burgers";
    titleElement.className = "title";

    //Create container for menu lists
    const menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";

    //Create mains list for page
    const mainList = document.createElement('ul');
    mainList.className = "main-list";

    const mainTitle = document.createElement('h3');
    mainTitle.innerText = "Mains";

    const mainItem1 = document.createElement('li');
    const mainItem2 = document.createElement('li');
    const mainItem3 = document.createElement('li');
    const mainItem4 = document.createElement('li');
    const mainItem5 = document.createElement('li');

    mainItem1.innerText = "Belly Buster Burger: £5.99";
    mainItem2.innerText = "Chicken Burger: £3.99";
    mainItem3.innerText = "Cheese Burger: £3.49";
    mainItem4.innerText = "Fish Burger: £3.49";
    mainItem5.innerText = "Vegan Burger: £3.99";

    mainList.appendChild(mainTitle);
    mainList.appendChild(mainItem1);
    mainList.appendChild(mainItem2);
    mainList.appendChild(mainItem3);
    mainList.appendChild(mainItem4);
    mainList.appendChild(mainItem5);

    menuContainer.appendChild(mainList)

    //Create sides list for page
    const sidesList = document.createElement('ul');
    sidesList.className = "sides-list"

    const sidesTitle = document.createElement('h3');
    sidesTitle.innerText = "Sides";

    const sidesItem1 = document.createElement('li');
    const sidesItem2 = document.createElement('li');
    const sidesItem3 = document.createElement('li');
    const sidesItem4 = document.createElement('li');
    const sidesItem5 = document.createElement('li');

    sidesItem1.innerText = "Chips: £1.99";
    sidesItem2.innerText = "Curly Fries: £2.49";
    sidesItem3.innerText = "Cheese Chips: £2.99";
    sidesItem4.innerText = "Onion Rings: £2.49";
    sidesItem5.innerText = "Seasoned Wedges: £2.49";

    sidesList.appendChild(sidesTitle);
    sidesList.appendChild(sidesItem1);
    sidesList.appendChild(sidesItem2);
    sidesList.appendChild(sidesItem3);
    sidesList.appendChild(sidesItem4);
    sidesList.appendChild(sidesItem5);

    menuContainer.appendChild(sidesList);

    //Create drinks list for page
    const drinksList = document.createElement('ul');
    drinksList.className = "drinks-list"

    const drinksTitle = document.createElement('h3');
    drinksTitle.innerText = "Drinks";

    const drinksItem1 = document.createElement('li');
    const drinksItem2 = document.createElement('li');
    const drinksItem3 = document.createElement('li');
    const drinksItem4 = document.createElement('li');
    const drinksItem5 = document.createElement('li');

    drinksItem1.innerText = "Soft Drinks: £1.49";
    drinksItem2.innerText = "Draught: £2.49";
    drinksItem3.innerText = "Wine (glass): £2.49";
    drinksItem4.innerText = "Hot drinks: £1.89";
    drinksItem5.innerText = "Cocktails: £4.99";

    drinksList.appendChild(drinksTitle);
    drinksList.appendChild(drinksItem1);
    drinksList.appendChild(drinksItem2);
    drinksList.appendChild(drinksItem3);
    drinksList.appendChild(drinksItem4);
    drinksList.appendChild(drinksItem5);

    menuContainer.appendChild(drinksList);

    headerBanner.prepend(titleElement);

    //Create footer for page
    const footer = document.createElement("div");
    footer.className = "footer";

    const footerText = document.createElement("p");
    footerText.innerText = "Created by Adam Christie";

    footer.appendChild(footerText);

    //Append children to the content container
    contentContainer.appendChild(headerBanner);
    contentContainer.appendChild(menuContainer);
    contentContainer.appendChild(footer);
}

export default renderMenuPage;