dataN = '';

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
    dataN = JSON.stringify(data);
    content.innerHTML = markup(dataN);
    //markup(dataN);
})

function markup(model) {
    model.section.map(section => { return `
    <div id="${section.name}">
        ${section.data.map(item => `
            <section class="item">
                <div>
                    <a href="${item.url}">
                        <figure>
                                <img src="${item.image}" alt="${item.title}" width="464" height="261">
                        </figure>
                        <div>
                            <h3>${item.label}</h3>
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>
                    </a>
                </div>
            </section>
        `).join('')}
    </div>
    `;}).join('')
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