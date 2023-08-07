import homePageImage from './assets/home-page-image.jpeg'
import renderPageTabs from './page-tabs';

function renderHomePage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    renderPageTabs();
    
    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers";
    titleElement.className = "title";

    //Add image to the page
    const imageElement = document.createElement('img');
    imageElement.src = homePageImage;

    //Create text for page
    const pageText = document.createElement('p');
    pageText.innerText = "Home of the Belly Buster Burger! Here at BBB's, we use the freshest ingredients for your gourmet experience at an unbeatable cost!"
    pageText.className = "page-text";
    
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(imageElement);
    contentContainer.appendChild(pageText);
}

export default renderHomePage