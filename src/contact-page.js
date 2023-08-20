import renderPageTabs from "./page-tabs";
import "./styles/contact-page-style.css"

function renderContactPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    const body = document.querySelector('body');
    body.className = 'contact-body';

    renderPageTabs();

    const headerBanner = document.querySelector('.header-banner');

    const activeButton = document.querySelector('#contact-button');
    activeButton.style.borderBottom = 'solid white';
    
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers";
    titleElement.className = "title";

    const contactList = document.createElement('ul');
    contactList.className = "contact-list";

    const address = document.createElement('li');
    address.textContent = "12 Imitation Lane, Lookalikesville. FA12 3KE";
    
    const phoneNumber = document.createElement('li');
    phoneNumber.textContent = "Phone Number: 0100 8008135";;

    const emailAddress = document.createElement('li');
    emailAddress.textContent = "Email Address: BigBobsBurgers@bur.ger";

    contactList.appendChild(address);
    contactList.appendChild(phoneNumber);
    contactList.appendChild(emailAddress);

    headerBanner.prepend(titleElement);

    contentContainer.appendChild(headerBanner);
    contentContainer.appendChild(contactList);
};

export default renderContactPage;