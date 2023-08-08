import renderContactPage from "./contact-page";
import renderHomePage from "./home-page";
import renderMenuPage from "./menu-page";

function renderPageTabs(){
    const contentContainer = document.querySelector('#content');

    const headerBanner = document.createElement('div');
    headerBanner.className = 'header-banner';

    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    const homePageTab = document.createElement('button');
    homePageTab.id = 'home-button'
    homePageTab.innerText = 'Home Page';
    homePageTab.addEventListener('click', () => {
        renderHomePage();
    });

    const menuPageTab = document.createElement('button');
    menuPageTab.id = 'menu-button';
    menuPageTab.innerText = 'Menu Page';
    menuPageTab.addEventListener('click', () => {
        renderMenuPage();
    });

    const contactPageTab = document.createElement('button');
    contactPageTab.id = 'contact-button';
    contactPageTab.innerText = 'Contact Page';
    contactPageTab.addEventListener('click', () => {
        renderContactPage();
    });

    navContainer.appendChild(homePageTab);
    navContainer.appendChild(menuPageTab);
    navContainer.appendChild(contactPageTab);

    headerBanner.appendChild(navContainer)

    contentContainer.appendChild(headerBanner);
}

export default renderPageTabs;