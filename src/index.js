import './index.html';
import './index.scss';
import dataset from './dataset.json';


var header = document.getElementById('header');
var navList = document.querySelector('.nav__list')

function Title() {
    const title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = JSON.stringify(dataset.page_meta.h1);
    return header.append(title)
}

Title();

function navItem() {
    for (let i = 0; i < dataset.nav.length; i++) {
        let item = document.createElement('li');
        item.className = 'nav__item'
        item.setAttribute('href', JSON.stringify(dataset.nav[i].href))
        item.innerHTML = JSON.stringify(dataset.nav[i].text)
        navList.append(item)
    }
}

navItem();

// function headTitle() {
//     const title = document.getElementsByTagName('title')
//     return title.innerHTML = JSON.stringify(dataset.page_meta.title)
// }
//
// headTitle()




