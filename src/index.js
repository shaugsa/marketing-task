import './index.html';
import './index.scss';
import dataset from './dataset.json';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.jpg';

const titleHeader = document.querySelector('.header__title');
const navList = document.querySelector('.nav__list');
const breadcrumbsList = document.querySelector('.breadcrumbs__list');
const stockList = document.querySelector('.stock__list');

function headTitle () {
    const title = document.querySelector('title')
    title.innerHTML = JSON.stringify(dataset.page_meta.title).replace(/"/g, "");
    return document.head.append(title)
}

headTitle()

function getMeta() {
    const metaKey = document.createElement('meta')
    const metaDes = document.createElement('meta')
    metaKey.name = "keywords";
    metaKey.setAttribute('content', JSON.stringify(dataset.page_meta.meta_keywords).replace(/"/g, ""));
    metaDes.name = 'description'
    metaDes.setAttribute('content', JSON.stringify(dataset.page_meta.meta_description).replace(/"/g, ""))
    return document.head.append(metaKey, metaDes );
}

getMeta();


function Title() {
    const title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = JSON.stringify(dataset.page_meta.h1).replace(/"/g, "");
    return titleHeader.prepend(title)
}

Title();

function navGetItem() {
    for (let i = 0; i < dataset.nav.length; i++) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'nav__link'
        link.setAttribute('href', '#');
        link.innerHTML = JSON.stringify(dataset.nav[i].text).replace(/"/g, "");
        item.className = 'nav__item'
        item.setAttribute('href', JSON.stringify(dataset.nav[i].href))
        item.append(link);
        navList.append(item);
    }
}

navGetItem();

function breadcrumbsGetItem() {
    for (let i = 0; i < dataset.breadcrumbs.length; i++) {
        let item = document.createElement('li');
        item.className = 'breadcrumbs__item';
        item.setAttribute('href', JSON.stringify(dataset.breadcrumbs[i].href));
        item.innerHTML = JSON.stringify(dataset.breadcrumbs[i].text).replace(/"/g, "");
        breadcrumbsList.append(item)
    }
}

breadcrumbsGetItem();

function stockGetItem() {
    let data = dataset.stock;
    let arr = [image1, image2, image3, image4, image5, image6];

    for (let i = 0; i < data.length; i++) {
        const item = document.createElement('li')
        item.className = 'stock__item';
        const container = document.createElement('div');
        container.className = 'stock__container'
        let img, text, title, price, priceCur, year, mileage, mileageMeasure, axleConfiguration;

        img = document.createElement('img');
        img.className = 'item__img';
        img.setAttribute('src', `${arr[i]}`);
        img.setAttribute('alt', 'truck page');

        title = document.createElement('h3');
        title.className = 'item__title text';
        title.innerHTML = JSON.stringify(data[i].title).replace(/"/g, "");

        text = document.createElement('p')
        text.className = 'item__text text';
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad excepturi, facere harum iure magni maxime minus nihil pariatur placeat provident sunt, tempora voluptate! Cum cumque eaque fugiat itaque laboriosam necessitatibus numquam. Maiores nam optio perferendis provident reiciendis sunt voluptatum!'

        price = document.createElement('p');
        price.className = 'item__price text';
        price.innerHTML = JSON.stringify(data[i].price_currency).replace(/"/g, "") + ' ' + JSON.stringify(data[i].price).replace(/"/g, "");

        year = document.createElement('p')
        year.className = 'item__year text'
        year.innerHTML = JSON.stringify(data[i].year).replace(/"/g, "");

        mileage = document.createElement('p')
        mileage.className = 'item__mileage text'
        mileage.innerHTML = JSON.stringify(data[i].mileage).replace(/"/g, "") + ' ' + JSON.stringify(data[i].mileage_measure).replace(/"/g, "");

        axleConfiguration = document.createElement('p')
        axleConfiguration.className = 'item__axle-configuration text'
        axleConfiguration.innerHTML = JSON.stringify(data[i].axle_configuration).replace(/"/g, "");

        const truckInfo = document.createElement('div')
        truckInfo.className = 'item__truck-info'
        truckInfo.append(title, text)

        const techInfo = document.createElement('div')
        techInfo.className = 'item__tech-info'
        techInfo.append( year, mileage, axleConfiguration)

        const priceInfo = document.createElement('div')
        priceInfo.className = 'item__price-info'
        priceInfo.append(price)

        container.append( truckInfo, priceInfo, techInfo)
        item.append(img, container)
        stockList.append(item)
    }
}

stockGetItem()








