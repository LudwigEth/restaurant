export default function() {
    const main = document.getElementById('main');

    const newDiv = document.createElement('div');
    const newH2 = document.createElement('h2');
    const newP1 = document.createElement('p');
    const newP2 = document.createElement('p');
    const newQuote = document.createElement('blockquote');

    newDiv.classList.add('home');
    newQuote.classList.add('home');

    newH2.textContent = 'Milk and brewed Tea';
    newP1.textContent = 'Taiwanese Milktea';
    newP2.textContent = 'since 2020';
    newQuote.textContent = '"The perfect treat for a cozy day shopping"';

    newDiv.appendChild(newH2);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    main.appendChild(newDiv);
    main.appendChild(newQuote);
}