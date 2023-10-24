import bareBonesHtml from "./bareBonesHtml";
import mainHome from "./mainHome";
import mainMenu from "./mainMenu";
import mainContact from "./mainContact";

bareBonesHtml();
// mainHome();
// mainMenu();

const main = document.getElementById('main');
const btnHome = document.getElementById('btnHome');
const btnMenu = document.getElementById('btnMenu');
const btnContact = document.getElementById('btnContact');


const highlightActiveTab = (e) => {
    e.target.classList.add('activeTab');
};

const removeHighlightFromTab = () => {
    btnHome.classList.remove('activeTab');
    btnMenu.classList.remove('activeTab');
    btnContact.classList.remove('activeTab');
};

const emptyMainTag = () => {
    main.replaceChildren();
};

btnHome.addEventListener('click', e => {
    emptyMainTag();
    removeHighlightFromTab();
    highlightActiveTab(e);
    mainHome();
});

btnMenu.addEventListener('click', e => {
    emptyMainTag();
    removeHighlightFromTab();
    highlightActiveTab(e);
    mainMenu();
});

btnContact.addEventListener('click', e => {
    emptyMainTag();
    removeHighlightFromTab();
    highlightActiveTab(e);
    mainContact();
});