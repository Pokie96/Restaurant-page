import renderPageTabs from "./page-tabs";

function renderContactPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    renderPageTabs();
    
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Contact Big Bob's Burgers";
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

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(contactList);
};

export default renderContactPage;