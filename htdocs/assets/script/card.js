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
})

function markup(section) {
    //model.section.map(section => { 
    var sectionTitle = section.name != 'main' ? `<h3>${section.name}</h3>` : '';
    var sectionBt = section.name != 'main' ? `<button>${section.name} +</button>` : '';

    var markup = `
    <div id="${section.name}">
    ${sectionTitle}
        ${section.data.map((item, index) => `
            <section class="item" id="sec-${index}">
                <div id="card-${index}">
                    <figure>
                            <img class="img-${index}" src="./assets/media/${item.image}" alt="${item.title}">
                    </figure>
                    <div>
                        <h3>${item.label}</h3>
                        <a href="${item.url}">
                            <h2>${item.title}</h2>
                        </a>
                        <p>${item.description}</p>
                    </div>
                    <a href="${item.url}">
                        LINK
                    </a>
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
    <div id="pub">
        <section>
            <p>advertising 320x100</p>
        </section>
    <div>
    `;
}