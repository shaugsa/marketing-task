import './index.html';
import './index.scss';
import dataset from './dataset.json';
import {image: '1.jpg', } from './img';



const header = document.getElementById('header');
const navList = document.querySelector('.nav__list');
const breadcrumbsList = document.querySelector('.breadcrumbs__list');
const stockList = document.querySelector('.stock__list');



function Title() {
    const title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = JSON.stringify(dataset.page_meta.h1);
    return header.prepend(title)
}

Title();

function navGetItem() {
    for (let i = 0; i < dataset.nav.length; i++) {
        let item = document.createElement('li');
        item.className = 'nav__item'
        item.setAttribute('href', JSON.stringify(dataset.nav[i].href))
        item.innerHTML = JSON.stringify(dataset.nav[i].text)
        navList.append(item)
    }
}

navGetItem();

function breadcrumbsGetItem() {
    for (let i = 0; i < dataset.breadcrumbs.length; i++) {
        let item = document.createElement('li');
        item.className = 'breadcrumbs__item';
        item.setAttribute('href', JSON.stringify(dataset.breadcrumbs[i].href));
        item.innerHTML = JSON.stringify(dataset.breadcrumbs[i].text);
        breadcrumbsList.append(item)
    }
}

breadcrumbsGetItem();

function stockGetItem() {
    let data = dataset.stock;

    for (let i = 0; i < data.length; i++) {
        const item = document.createElement('li')
        item.className = 'stock__item';
        const container = document.createElement('div');
        container.className = 'stock__container'
        let img, title, price, priceCur, year, mileage, mileageMeasure, axleConfiguration;

        img = document.createElement('img');
        img.className = 'stock__img';
        img.setAttribute('src', (JSON.stringify(data[i].image)).replace(/\"/g, ""));
        img.setAttribute('alt', 'truck page');

        price = document.createElement('p');
        price.className = 'stock__price text';
        price.innerHTML = JSON.stringify(data[i].price);

        title = document.createElement('h3');
        title.className = 'stock__title text';
        title.innerHTML = JSON.stringify(data[i].title);

        priceCur = document.createElement('p')
        priceCur.className = 'stock__price-cur';
        priceCur.innerHTML = JSON.stringify(data[i].price_currency)

        year = document.createElement('p')
        year.className = 'stock__year text'
        year.innerHTML = JSON.stringify(data[i].year);

        mileage = document.createElement('p')
        mileage.className = 'stock__mileage text'
        mileage.innerHTML = JSON.stringify(data[i].mileage)

        mileageMeasure = document.createElement('p')
        mileageMeasure.className = 'stock__mileage-measure';
        mileageMeasure.innerHTML = JSON.stringify(data[i].mileage_measure);

        axleConfiguration = document.createElement('p')
        axleConfiguration.className = 'stock__axle-configuration'
        axleConfiguration.innerHTML = JSON.stringify(data[i].axle_configuration)

        container.append(img, price, title, priceCur, year, mileage, mileageMeasure, axleConfiguration)
        item.append(container)
        stockList.append(item)
    }
}



stockGetItem()






