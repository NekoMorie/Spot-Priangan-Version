// ==UserScript==
// @name         SPOT DARKMODE
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://spot.upi.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=upi.edu
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const containers = document.getElementsByClassName("container-fluid");
    const navbar = document.getElementsByClassName("navbar-header");
    const div = document.getElementsByClassName("p-30")[0];
    const link = div.getElementsByTagName("a")[0];
    const footer = document.getElementsByClassName("footer")[0];
    const table = document.getElementById("table-1822");
    const iElement = document.querySelector('i.fa.fa-list');
    const elements = document.querySelectorAll('.white-box.user-table');
    const pagewrap = document.getElementsByClassName("page-wrapper")
    const profile = document.getElementsByClassName("user-profile")
    const hidemenu = document.getElementsByClassName("hide-menu")
    const box = document.getElementsByClassName("box-title m-b-20")
    const th = document.getElementsByTagName("th")
    const style = document.createElement("style");
    const tds = document.querySelectorAll('td.tablesaw-cell-persist a');
    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    const preloader = document.getElementById("preloader");

    try {
        preloader.style.backgroundColor = "red";
    } catch (error) {
        console.error(error);
    }

    tds.forEach(function (td) {
        td.style.color = '#bcdaff';
    });
    hidemenu[0].style.color = "#ffff"
    profile[0].style.color = "#ffff"
    pagewrap[0].style.background = "#50577A"
    navbar[0].style.background = "#6B728E";
    elements.forEach(function (element) {
        element.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
        element.style.fontSize = '14px';
        element.style.lineHeight = '1.42857143';
        element.style.color = '#ffff';
    });
    document.querySelector('.white-box').style.backgroundColor = "#474E68";
    document.querySelector('.white-box').style.fontColor = "#ffffff";
    footer.style.background = "#6B728E";
    div.style.border = "none";
    iElement.style.color = 'white';
    ((err) => {
        try {
            document.querySelector('.white-box.user-table').style.border = "none";
        } catch (err) {
            console.log(err);
        }
    })();
    document.querySelector(".col-lg-12").style.background = "#474E68";
    document.querySelector('.sidebar').style.background = "#474E68";
    document.querySelector('.sidebar').style.border = "none";
    document.querySelector('.sidebar-nav').style.backgroundColor = "#404258";
    link.href = "https://www.instagram.com/bentar.croos/";
    link.innerHTML = "Follow Me To Support!";
    link.style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
    link.style.display = "none";
    div.style.display = "none";
    for (const container of containers) {
        container.style.backgroundColor = "#404258";
    }


    const warna = "#424861";
    style.innerHTML = `.table-hover>tbody>tr:hover, .table-striped>tbody>tr:nth-of-type(odd), .table>tbody>tr.active>td, .table>tbody>tr.active>th, .table>tbody>tr>td.active, .table>tbody>tr>th.active, .table>tfoot>tr.active>td, .table>tfoot>tr.active>th, .table>tfoot>tr>td.active, .table>tfoot>tr>th.active, .table>thead>tr.active>td, .table>thead>tr.active>th, .table>thead>tr>td.active, .table>thead>tr>th.active {
background-color: ${warna} !important;
border-radius : 10px;
}
.table-hover>tbody>tr {
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    transition : .3s;
}

.table-bordered, .table>tbody>tr>td, .table>tbody, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    border: none;
}
`;
    document.head.appendChild(style);

    const hovlists = document.getElementsByClassName("tablesaw");
    const hovlist = hovlists[0].children[1].children;

    for (let i = 0; i < hovlist.length; i++) {
        const ch = hovlist[i];
        ch.style.color = "white";
        const links = hovlist[i].children[1].children[0];
        links.style.color = "white";

        ch.addEventListener("click", async () => {
            ch.style.scale = "1.1";
            await delay(300);
            ch.style.scale = "1.0";
            window.location.href = links.href;
        })
        ch.addEventListener("mouseover", async () => {
            ch.style.cursor = "pointer";
            ch.style.scale = "1.03";
        })
        ch.addEventListener("mouseout", async () => {
            ch.style.cursor = "none"
            ch.style.scale = "1";
        })
    }

    const pushme = () => {
        const tmp = [];
        for (let i = 0; i < hovlist.length; i++) {
            tmp.push(hovlist[i].children[1].children[0].href);
        }
        return tmp;
    };

    const links = pushme();

    const promises = links.map(link => {
        return fetch(link)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(html, "text/html");
                const bucket = [];
                const innerLinks = htmlDoc.querySelectorAll("a");
                for (let i = 0; i < innerLinks.length; i++) {
                    if (innerLinks[i].href.startsWith('https://spot.upi.edu/mhs/topik')) {
                        bucket.push(innerLinks[i].href);
                        console.log(innerLinks[i].href);
                    }
                }
            })
    })

    for (let i = 0; i < 5; i++) {
        th[i].style.color = "#ffff"
    }
    box[0].style.color = "#ffff"

})();







const parentElement = document.querySelector('.scroll-sidebar');

const nt_container = document.createElement('div');
nt_container.classList.add('notif-tugas-container');
nt_container.style.backgroundColor = 'rgb(64, 66, 88)';
nt_container.style.color = 'white';
nt_container.style.width = '100%';
nt_container.style.paddingBottom = '20px';

const nt_header = document.createElement('div');
nt_header.classList.add('notif-tugas-header');
nt_header.innerHTML = '<p><b>Daftar Tugas</b></p>';
nt_header.style.color = 'white';
nt_header.style.width = '100%';
nt_header.style.paddingLeft = '20px';
nt_container.appendChild(nt_header);

parentElement.appendChild(nt_container);

const tbody = document.querySelector('tbody');
const links = tbody.querySelectorAll('td a');
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}



links.forEach(link => {
    fetch(link.href)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(html, "text/html");
            const innerLinks = htmlDoc.querySelectorAll('.row .col-md-6 a');
            innerLinks.forEach(innerLink => {
                if (!innerLink.href.includes('/mhs#')) {
                    const url = innerLink.href.replace('/mhs/topik', '/mhs/tugas');
                    fetch(url)
                        .then(response => response.text())
                        .then(html => {
                            (async () => {
                                const parser = new DOMParser();
                                const htmlDoc = parser.parseFromString(html, "text/html");
                                const title = htmlDoc.querySelectorAll('.media-body')[0].children[0].textContent;
                                const meets = htmlDoc.querySelectorAll('.panel-heading')[0].children[0].textContent;
                                const content = htmlDoc.querySelectorAll('.tab-content')[0].children[0].children[1];
                                let tmpMatkul = "";
                                let spc = false;
                                if (title.startsWith(' ')) {
                                    for (let i = 32; i < title.length; i++) {
                                        tmpMatkul += title[i];
                                        if (title[i] == " ") {
                                            if (spc == true) break;
                                            spc = true;
                                        } else spc = false;
                                    }
                                }

                                // tmpMatkul = tmpMatkul.split(" ");
                                // let matkul = "";
                                // for(let i = 0; i < tmpMatkul.length-2; i++) {
                                //     let isi = tmpMatkul[i];
                                //     if (isi.startsWith( "(" )) matkul += `-${isi}`;
                                //     else matkul += isi[0];
                                // }
                                let notif = "";

                                if (!content.classList.contains("alert-warning")) {
                                    const deadline = htmlDoc.querySelectorAll('.table-striped')[0].children[0].children[4].children[2].children[1].textContent;
                                    notif = `Ada tugas mata kuliah ${tmpMatkul} di ${meets}.<br>` +
                                        `Deadline: ${deadline}`;
                                    let newElement = document.createElement("a");
                                    newElement.href = `${url}`;
                                    newElement.classList.add('notif-tugas');
                                    newElement.innerHTML = `<div><p>${notif}</p></div>`;
                                    newElement.style.backgroundColor = "rgb(71, 78, 104)";
                                    newElement.style.boxShadow = "0 5px 5px rgba(0,0,0,.1)";
                                    newElement.style.padding = "10px 15px 5px 20px";
                                    newElement.style.marginLeft = "0";
                                    newElement.style.marginBottom = "10px";
                                    newElement.style.width = "90%";
                                    newElement.style.color = "white";
                                    newElement.style.borderRadius = "0 5px 5px 0";
                                    newElement.style.opacity = "0";
                                    newElement.style.display = "block";
                                    newElement.style.translate = "-30px 0";
                                    newElement.style.transition = ".5s";
                                    newElement.style.cursor = "pointer";

                                    newElement.addEventListener("mouseover", function () {
                                        this.style.transform = "translateX(10px)";
                                    });

                                    newElement.addEventListener("mouseout", function () {
                                        this.style.transform = "translateX(0)";
                                    });

                                    nt_container.appendChild(newElement);
                                    await delay(100);
                                    newElement.style.translate = "0";
                                    newElement.style.opacity = "1";
                                }
                            })();
                        })
                }
            })
        })
        .catch(error => console.error(error));
});