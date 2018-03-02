//dataN = '';

function fetchJSON(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function(e) {
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            if(callback) callback(data);
        }
    }
    
    xhr.send();
}

fetchJSON('../../data.json', function(data){
    var content = document.getElementById('content');

    console.log(data.section[0]);

    content.innerHTML += markup(data.section[0]);

    content.innerHTML += markupAdv();

    content.innerHTML += markup(data.section[1]);

    content.innerHTML += markup(data.section[2]);

    //console.log(markup(data.section[0]));
    
    //var node = document.getElementById('content').lastChild;
    //content.appendChild(markup(data.section[0]));
    
    //markup(dataN);
})

function markup(section) {
    //model.section.map(section => { 
    var sectionTitle = section.name != 'main' ? `<h3>${section.name}</h3>` : '';
    var sectionBt = section.name != 'main' ? `<button>${section.name} +</button>` : '';

    var markup = `
    <div id="${section.name}">
    ${sectionTitle}
        ${section.data.map((item, index) => `
            <section class="item">
                <div>
                    <a href="${item.url}">
                        <figure>
                                <img class="img-${index}" src="./assets/media/${item.image}" alt="${item.title}">
                        </figure>
                    </a>
                    <div>
                        <h3>${item.label}</h3>
                        <a href="${item.url}">
                            <h2>${item.title}</h2>
                        </a>
                        <p>${item.description}</p>
                    </div>                    
                </div>
            </section>
        `).join('')}
        ${sectionBt}
    </div>
    `;

    return markup;
//}).join('')
}

function markupAdv()  {
    return `
        <section id="pub">
            <p>advertising 320x100</p>
        </section>
    `;
}





/*
import {CardView} from './CardView';

function getData() {
    console.log('deu certo');
    CardView cv = new CardView();
}

getListContent() {
    let limit = this.getLimit();
    if (this.reserve.hasItems(limit)) {
        return Promise.resolve(
            JSON.stringify(this.reserve.get(limit))
        );
    }
    let init = this.getInit();
    let upperLimit = (limit * this.bigStep) + 1;
    let listUrl = [
        this.url,
        `?section=${this.section}`,
        `&limit=${upperLimit}`,
        `&init=${init}`
    ].join('');
    return utils.ajax('GET', listUrl).then(
        result => this.dealWithList(result, limit)
    );
}





/*
var data = JSON.parse(data);

function loadJSON(callback) {

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'file.json', true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
callback(xobj.responseText);

}
}
xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
// Do Something with the response e.g.
//jsonresponse = JSON.parse(response);

// Assuming json data is wrapped in square brackets as Drew suggests
//console.log(jsonresponse[0].name);

}); */