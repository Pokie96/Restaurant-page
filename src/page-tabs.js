import renderHomePage from "./home-page";
import renderMenuPage from "./menu-page";

function renderPageTabs(){
    const contentContainer = document.querySelector('#content');

    const homePageTab = document.createElement('button');
    homePageTab.innerText = 'Home Page';
    homePageTab.addEventListener('click', () => {
        renderHomePage();
    });

    const menuPageTab = document.createElement('button');
    menuPageTab.innerText = 'Menu Page';
    menuPageTab.addEventListener('click', () => {
        renderMenuPage();
    });

    const contactPageTab = document.createElement('button');
    contactPageTab.innerText = 'Contact Page';

    contentContainer.appendChild(homePageTab);
    contentContainer.appendChild(menuPageTab);
    contentContainer.appendChild(contactPageTab);
}

export default renderPageTabs;