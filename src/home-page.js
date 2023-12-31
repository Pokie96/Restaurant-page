
import renderPageTabs from './page-tabs';
import './styles/home-page-style.css'

function renderHomePage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    const body = document.querySelector('body')
    body.className = 'home-body'

    renderPageTabs();

    const headerBanner = document.querySelector('.header-banner');

    const activeButton = document.querySelector('#home-button');
    activeButton.style.borderBottom = 'solid white';
    
    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Buster Burgers";
    titleElement.className = "title";
    headerBanner.prepend(titleElement);

    //Create text for page
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const pageText1 = document.createElement('p');
    pageText1.innerText = "Home of the Belly Buster Burger!";
    pageText1.className = "page-text";

    const pageText2 = document.createElement('p');
    pageText2.innerText = "Here at BBB's, we use the freshest ingredients for your gourmet experience at an unbeatable cost!";
    pageText2.className = "page-text";

    const pageText3 = document.createElement('p');
    pageText3.innerText = "Only the best cuts of fresh Angus Beef are used in our recipes."
    pageText3.className = "page-text";

    //Create footer for page
    const footer = document.createElement("div");
    footer.className = "footer";

    const footerText = document.createElement("p");
    footerText.innerText = "Created by Adam Christie";

    footer.appendChild(footerText);

    //contentContainer.appendChild(imageElement)
    textContainer.appendChild(pageText1);
    textContainer.appendChild(pageText2);
    textContainer.appendChild(pageText3);

    contentContainer.appendChild(textContainer);
    contentContainer.appendChild(footer);
}

export default renderHomePage