const content = document.getElementById('content');

const createBarebonesHtml = () => {
    // create Header, Main and footer
    const header = document.createElement('header');
    const restaurantNameH1 = document.createElement('h1');
    const navbar = document.createElement('nav');
    const navbarUl = document.createElement('ul');
    const navbarUlLi1 = document.createElement('li');
    const navbarUlLi2 = document.createElement('li');
    const navbarUlLi3 = document.createElement('li');
    const btnHome = document.createElement('button');
    const btnMenu = document.createElement('button');
    const btnContact = document.createElement('button');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');

    // header
    restaurantNameH1.textContent = 'Bamboo Boba';

    navbar.classList.add('navbar');

    btnHome.id = 'btnHome';
    btnMenu.id = 'btnMenu';
    btnContact.id = 'btnContact';

    btnHome.type = 'button';
    btnMenu.type = 'button';
    btnContact.type = 'button';

    navbarUlLi1.appendChild(btnHome);
    navbarUlLi2.appendChild(btnMenu);
    navbarUlLi3.appendChild(btnContact);
    navbarUl.appendChild(navbarUlLi1);
    navbarUl.appendChild(navbarUlLi2);
    navbarUl.appendChild(navbarUlLi3);
    navbar.appendChild(navbarUl);
    header.appendChild(restaurantNameH1);
    header.appendChild(navbar);

    // footer

    footerP.textContent = 'by Ludwig.eth';

    footer.appendChild(footerP);




    // add elements to #content

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    
}