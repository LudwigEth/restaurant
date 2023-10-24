import bareBonesHtml from "./bareBonesHtml";
import mainHome from "./mainHome";
import mainMenu from "./mainMenu";

bareBonesHtml();
// mainHome();
// mainMenu();

const main = document.getElementById('main');
const btnHome = document.getElementById('btnHome');
const btnMenu = document.getElementById('btnMenu');
const btnContact = document.getElementById('btnContact');



const emptyMainTag = () => {
    main.replaceChildren();
};

btnHome.addEventListener('click', e => {
    emptyMainTag();
    mainHome();
});

btnMenu.addEventListener('click', e => {
    emptyMainTag();
    mainMenu();
});