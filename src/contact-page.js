import renderPageTabs from "./page-tabs";

function renderContactPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    renderPageTabs();

    const headerBanner = document.querySelector('.header-banner');

    const activeButton = document.querySelector('#contact-button');
    activeButton.style.borderBottom = 'solid white';
    
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers";
    titleElement.className = "title";

    const contactList = document.createElement('ul');

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