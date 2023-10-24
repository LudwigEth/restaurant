import bobalocation from '../src/images/bobalocation.png';

const addressContent = `
8008 Boba Street<br>
Tapioca, IL 69420<br>
MilkTeaistan
`;

export default function() {
    const main = document.getElementById('main');

    const tabContainer = document.createElement('div');
    const contactHeading = document.createElement('h2');
    const address = document.createElement('address');
    const imgLocation = document.createElement('img');

    tabContainer.classList.add('container');
    tabContainer.classList.add('tabContainer');
    tabContainer.classList.add('contact');

    contactHeading.textContent = 'Where to find us';
    address.innerHTML = addressContent;

    imgLocation.src = bobalocation;

    tabContainer.appendChild(contactHeading);
    tabContainer.appendChild(address);
    tabContainer.appendChild(imgLocation);
    main.appendChild(tabContainer);
};