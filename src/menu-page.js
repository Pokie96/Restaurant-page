import renderPageTabs from "./page-tabs";

function renderMenuPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    renderPageTabs();

    const headerBanner = document.querySelector('.header-banner');

    const activeButton = document.querySelector('#menu-button');
    activeButton.style.borderBottom = 'solid white';

    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers";
    titleElement.className = "title";

    //Create menu list for page
    const menuList = document.createElement('ul');

    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');
    const menuItem4 = document.createElement('li');
    const menuItem5 = document.createElement('li');

    menuItem1.innerText = "Belly Buster Burger: £5.99";
    menuItem2.innerText = "Chicken Burger: £3.99";
    menuItem3.innerText = "Cheese Burger: £3.49";
    menuItem4.innerText = "Chips: £1.49";
    menuItem5.innerText = "Canned Drinks: 99p";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);

    headerBanner.prepend(titleElement);

    contentContainer.appendChild(headerBanner);
    contentContainer.appendChild(menuList);
}

export default renderMenuPage;