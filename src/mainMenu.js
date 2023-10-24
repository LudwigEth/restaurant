function createMenuItem(imgSrc, name, price) {
    const menuItemCard = document.createElement('div');
    const img = document.createElement('img');
    const menuItemName = document.createElement('h3');
    const menuItemPrice = document.createElement('p');
  
    menuItemCard.classList.add('menuItemCard');
  
    img.src = imgSrc;
    menuItemName.textContent = name;
    menuItemPrice.textContent = price;
  
    menuItemCard.appendChild(img);
    menuItemCard.appendChild(menuItemName);
    menuItemCard.appendChild(menuItemPrice);
  
    return menuItemCard;
  }
  
  export default function() {
    const main = document.getElementById('main');
    const menuContainer = document.createElement('div');
    const menuGrid = document.createElement('div');
  
    menuContainer.classList.add('menuContainer');
    menuGrid.classList.add('menuGrid');
  
    const milkTeas = [
      { img: '../src/images/brownSugarTea.png', name: 'Brown Sugar Milktea', price: '$5' },
      { img: '../src/images/matchaTea.png', name: 'Matcha Milktea', price: '$5' },
      { img: '../src/images/strawberryTea.png', name: 'Strawberry Milktea', price: '$5' },
    ];
  
    milkTeas.forEach(tea => {
      const menuItem = createMenuItem(tea.img, tea.name, tea.price);
      menuGrid.appendChild(menuItem);
    });
  
    menuContainer.appendChild(menuGrid);
    main.appendChild(menuContainer);
  }  