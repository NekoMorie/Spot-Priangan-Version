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

const qrys = (inp) => document.querySelector(inp);
const qrya = (inp) => document.querySelectorAll(inp);
const newel = (inp) => document.createElement(inp);
const csl = (inp) => console.log(inp);

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

    tds.forEach(function (td) {
        td.style.color = '#bcdaff';
    });
    hidemenu[0].style.color = "#ffff"
    profile[0].style.color = "#ffff"
    footer.style.background = "rgb(23, 30, 55)";
    div.style.border = "none";
    iElement.style.color = 'white';
    document.querySelector('.sidebar').style.border = "none";
    link.href = "https://www.instagram.com/bentar.croos/";
    link.innerHTML = "Follow Me To Support!";
    link.style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
    link.style.display = "none";
    div.style.display = "none";
    for (const container of containers) {
        container.style.backgroundColor = "#404258";
    }


    style.innerHTML =
        `
    p, h1, h2, h3, h4, h5, b, i, th, td, div, span {
        color : white;
    }
    .white-box {
        border : none;
    }
    `

    if (document.URL == "https://spot.upi.edu/mhs") {
        const LMColor = "#424861";
        style.innerHTML +=
            `.table-hover>tbody>tr:hover, .table-striped>tbody>tr:nth-of-type(odd), .table>tbody>tr.active>td, .table>tbody>tr.active>th, .table>tbody>tr>td.active, .table>tbody>tr>th.active, .table>tfoot>tr.active>td, .table>tfoot>tr.active>th, .table>tfoot>tr>td.active, .table>tfoot>tr>th.active, .table>thead>tr.active>td, .table>thead>tr.active>th, .table>thead>tr>td.active, .table>thead>tr>th.active {
        background-color: ${LMColor} !important;
        border-radius : 10px;
        }
        .table-hover>tbody>tr {
            box-shadow: 0 5px 15px rgba(0,0,0,.1);
            transition : .3s;
        }

        .table-bordered, .table>tbody>tr>td, .table>tbody, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
            border: none;
        }

        .navbar-header {
            background-color : #2C3247 !important;
        }
        `;
    } else if (document.URL.startsWith("https://spot.upi.edu/mhs/dashboard")) {
        let ele = document.getElementsByClassName("white-box");
        for (let i = 0; i < ele.length; i++) {
            let spans = ele[i].getElementsByTagName("span");
            for (let j = 0; j < spans.length; j++) {
                spans[j].style.color = "#ffff";
            }
        }
        let Mso = document.getElementsByClassName("MsoNormal");
        for (let i = 0; i < Mso.length; i++) {
            let spans = Mso[i].getElementsByTagName("span");
            for (let j = 0; j < spans.length; j++) {
                spans[j].style.color = "#ffff";
            }
        }
        style.innerHTML =
            `
.page-wrapper {
    background: #171E37;
    padding-bottom: 60px;
}
.btn-default {
    color: #fff;
    background-color: #fff;
    border-color: #fff;
}
.btn-default, .btn-default.disabled {
    background: #161C33;
    border: 2px solid #0283CC;
}
.panel {
    margin-bottom: 20px;
    background-color: #161C33;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: none;
    border-radius: 10px;
    transition : .2s;
}
.btn-danger, .btn-danger.disabled {
    background: #CA0281;
    border: none;
}
.btn-danger:hover, .btn-danger.disabled:hover {
    background: #CA0281;
    border: none;
}
.btn-info:hover, .btn-info.disabled:hover {
    border: none;
}
.info-color-box, .colorbox-group-widget {
    background-color : transparent !important;
}
.panel-blue .panel-heading, .panel-info .panel-heading {
    border-color: #00bbd9;
    color: #fff;
    background-color: #1D2543;
}
body {
    background: #fff;
    margin: 0;
    overflow-x: hidden;
    color: #ffffff;
    font-weight: 400;
}
.white-box {
    background: #1D2543;
    padding: 25px;
    margin-bottom: 30px;
    border: 1px solid #e5ebec;
    border-radius: 15px;
}
.white-box, .media, .bg-primary, .panel, .panel-heading {
    border : none !important;
    border-radius : 15px !important;
}
.panel-darkblue .panel-heading, .panel-primary .panel-heading {
    border-color: #0283cc;
    color: #fff;
    background-color: #1D2543;
}
strong {
    color: #ffffff;
}
        `;
    } else if (document.URL.startsWith("https://spot.upi.edu/mhs/topik") || document.URL.startsWith("https://spot.upi.edu/mhs/tugas") || document.URL.startsWith("https://spot.upi.edu/mhs/materi") || document.URL.startsWith("https://spot.upi.edu/mhs/evaluasi") || document.URL.startsWith("https://spot.upi.edu/mhs/forum") || document.URL.startsWith("https://spot.upi.edu/mhs/monitoring") || document.URL.startsWith("https://spot.upi.edu/mhs/meeting")) {
        style.innerHTML =
            `
.page-wrapper {
    background: #171e37;
    padding-bottom: 60px;
}
th {
    color: #ffffff;
    font-weight: 600;
}
.table-hover>tbody>tr:hover, .table-striped>tbody>tr:nth-of-type(odd), .table>tbody>tr.active>td, .table>tbody>tr.active>th, .table>tbody>tr>td.active, .table>tbody>tr>th.active, .table>tfoot>tr.active>td, .table>tfoot>tr.active>th, .table>tfoot>tr>td.active, .table>tfoot>tr>th.active, .table>thead>tr.active>td, .table>thead>tr.active>th, .table>thead>tr>td.active, .table>thead>tr>th.active {
    background-color: #1d2543!important;
}
            .btn-warning, .btn-warning.disabled {
    background: #ffb136;
    border: 2px solid #ffb136;
    border-radius: 15px;
}
            .btn-warning.disabled.focus, .btn-warning.disabled:focus, .btn-warning.disabled:hover, .btn-warning.focus, .btn-warning:focus, .btn-warning:hover {
    background: #ffb136;
    opacity: .8;
    border: 2px solid #ffb136;
    border-radius: 15px;
}
            .alert {
    border-radius: 15px;
}
            h1, h2, h3, h4, h5, h6 {
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin: 10px 0;
    font-weight: 400;
}
            .customtab li.active a, .customtab li.active a:focus, .customtab li.active a:hover {
                border-bottom: none;
                color: #ffffff;
            }
            .customtab li.active a, .customtab li.active a:focus, .customtab li.active a:hover {
                background: #0283CC;
                border: 0;
                border-bottom: 2px solid #0283cc;
                margin-bottom: -1px;
                color: white;
            }
            blockquote {
                border-left: 1px solid #0283CC !important;
                border: 1px solid #0283CC;
                border-radius: 10px;
            }
            .nav-tabs>li>a {
                border-radius: 15px;
                color: #0283CC;
            }
            .white-box {
                background: none;
                padding: 25px;
                margin-bottom: 30px;
                border: none;
                border-radius: 15px;
            }
            .colorbox-group-widget .info-color-box .media {
                padding: 20px 30px;
                padding-top: 20px;
                padding-right: 30px;
                padding-bottom: 20px;
                padding-left: 30px;
                border: none;
                margin: 0;
                border-radius: 15px;
            }
            .bg-primary {
                background-color: #0283CC!important;
                color: #fff;
                border-radius: 15px;
            }
            .customtab {
                border-bottom: none;
            }
            .panel {
                margin-bottom: 20px;
                background-color: #1D2543;
                border: 1px solid transparent;
                border-radius: 4px;
                -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
                box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
            }
            body {
                background: #fff;
                margin: 0;
                overflow-x: hidden;
                color: #ffffff;
                font-weight: 400;
            }
            .panel-black .panel-heading, .panel-inverse .panel-heading {
                border-color: #1D2543;
                color: #fff;
                background-color: #1D2543;
            }
            .panel .panel-heading {
                border-radius: 15px;
                font-weight: 600;
                text-transform: uppercase;
                padding: 20px 25px;
            }
            .custom-select {
                background-color: #1D2543 !important;
                border-radius: 10px;

            }
        `;
    }

    document.head.appendChild(style);
})();

const wb = qrys('.white-box');
const tableCont = newel('div');
const tableMain = newel('div');

tableMain.innerHTML = wb.innerHTML;
tableMain.style.width = "100%";
tableMain.style.overflow = "scroll";
wb.innerHTML = '';
wb.appendChild(tableMain);

if (document.URL == "https://spot.upi.edu/mhs") {
    const hovlists = document.getElementsByClassName("tablesaw");
    const hovlist = hovlists[0].children[1].children;

    for (let i = 0; i < hovlist.length; i++) {
        const ch = hovlist[i];
        ch.style.color = "white";
        const links = hovlist[i].children[1].children[0];
        links.style.color = "white";

        ch.addEventListener("click", async () => {
            ch.style.translate = "0 -10px";
            await delay(100);
            ch.style.translate = "0";
            window.location.href = links.href;
        })
        ch.addEventListener("mouseover", async () => {
            ch.style.cursor = "pointer";
            ch.style.scale = "1.01";
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
} else if (document.URL.startsWith("https://spot.upi.edu/mhs/dashboard")) {
    const matkul = qrys('.media-body');
    const matkul_old = matkul.innerHTML;

    let matkul_new = '<table><tr><td class="matkul-log">';
    for (let i = 0; i < matkul_old.length; i++) {
        if (
            matkul_old[i - 2] == '>' &&
            matkul_old[i - 3] == 'i' &&
            matkul_old[i - 4] == '/'
        ) {
            matkul_new += '</h3></td><td><h3 class="text-white matkul-tit"><b>'
        }
        if (
            matkul_old[i - 2] == '>' &&
            matkul_old[i - 3] == '3' &&
            matkul_old[i - 4] == 'h' &&
            matkul_old[i - 5] == '/'
        ) {
            matkul_new += '</b><p class="matkul-sub">'
        }
        if (
            matkul_old[i + 0] == '<' &&
            matkul_old[i + 1] == 'b'
        ) {
            i += 3
        }
        if (
            matkul_old[i + 0] == '>' &&
            matkul_old[i + 1] == '/' &&
            matkul_old[i + 2] == 'b'
        ) {
            i += 3;
            matkul_new += '</p>';
        }

        matkul_new += matkul_old[i];
    }
    matkul_new += '</td></tr></table>'

    matkul.innerHTML = matkul_new;

    const matkul_logo = qrys('.matkul-log');
    matkul_logo.style.paddingRight = "15px";

    const matkul_title = qrys('.matkul-tit');
    matkul_title.style.margin = "0";
    matkul_title.style.fontSize = "20px";
    matkul_title.style.lineHeight = "25px";

    const matkul_sub = qrys('.matkul-sub');
    matkul_sub.style.margin = "0";
    matkul_sub.style.fontSize = "12px";
    matkul_sub.style.lineHeight = "15px";

    const wb = qrys('.white-box');
    wb.style.backgroundColor = "transparent";
} else if (document.URL.startsWith("https://spot.upi.edu/mhs/topik")) {}

const pageWrap = qrys('.container-fluid');
pageWrap.style.minHeight = "90vh";

const leftSIDEBAR = qrys('.scroll-sidebar');


const nt_container = newel('div');
nt_container.classList.add('notif-tugas-container');
nt_container.style.color = 'white';
nt_container.style.width = '100%';
nt_container.style.width = '100%';
nt_container.style.paddingBottom = '20px';

const nt_header = newel('h4');
nt_header.classList.add('notif-tugas-header');
nt_header.innerHTML = '<p><b>DAFTAR TUGAS</b></p>';
nt_header.style.color = 'white';
nt_header.style.width = '100%';
nt_header.style.textAlign = 'center';
nt_container.appendChild(nt_header);

const nt_list = newel('div');
nt_list.classList.add('notif-tugas-list');
nt_list.style.width = '100%';
nt_list.style.height = '30vh';
nt_list.style.overflowY = 'scroll';
nt_list.style.textAlign = 'center';
nt_list.style.border = 'solid';
nt_list.style.borderColor = "#1D2543";
nt_list.style.borderWidth = '2px 0 2px 0';
nt_list.style.backgroundColor = '#141a31';
nt_container.appendChild(nt_list);

const nt_space = newel('div');
nt_space.style.width = '100%';
nt_space.style.height = '20px';
nt_list.appendChild(nt_space);


const notify = newel('h5');
notify.classList.add('notify-header');
notify.innerHTML = '<p><b>SEND NOTIFICATION</b></p>';
notify.style.color = 'white';
notify.style.width = '100%';
notify.style.marginTop = '15px';
notify.style.textAlign = 'center';
nt_container.appendChild(notify);
const centerize = (obj) => {
    obj.parentNode.style.textAlign = "center";
    obj.style.display = "inline-block";
}
const notify_STYLE_BTN = (obj,logo,color) => {
    obj.style.color = "white";
    obj.style.border = "none";
    obj.style.padding = "5px 13px 5px 13px";
    obj.style.transition = ".3s";
    obj.style.marginLeft = "10px";
    obj.style.borderRadius = "10px";
    obj.style.backgroundColor = color;
    obj.innerHTML = logo;
}
const notify_STYLE_INP = (obj, color) => {
    obj.placeholder = 'Enter phone number';
    obj.style.border = "solid";
    obj.style.padding = "6px 10px 6px 10px";
    obj.style.textAlign = "center";
    obj.style.transition = ".3s";
    obj.style.borderColor = color;
    obj.style.borderWidth = "1px";
    obj.style.borderRadius = "10px";
    obj.style.backgroundColor = "transparent";
}
const notify_STYLE_CONT = (obj) => {
    obj.style.margin = "10px 0 10px 0";
}
/////////////////////////////////////////////////////02CA8E
const color_TG = "rgb(52,170,240)";
const color_WA = "rgb(80,197,90)";
/////////////////////////////////////////////////////
const notify_CHOICE = newel('table');
notify_CHOICE.style.width = "100%";
/////////////////////////////////////////////////////
const notify_WA = newel('tr');
const notify_TG = newel('tr');
notify_STYLE_CONT(notify_WA); notify_STYLE_CONT(notify_TG);
/////////////////////////////////////////////////////
const notify_INP_WA = newel('input');
notify_STYLE_INP(notify_INP_WA, color_WA);
const notify_BTN_WA = newel('button');
notify_STYLE_BTN(notify_BTN_WA,'<i class="bi bi-whatsapp"></i>', color_WA);
/////////////////////////////////////////////////////
const notify_INP_TG = newel('input');
notify_STYLE_INP(notify_INP_TG, color_TG);
const notify_BTN_TG = newel('button');
notify_STYLE_BTN(notify_BTN_TG,'<i class="bi bi-telegram"></i>', color_TG);
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
notify_TG.addEventListener('click', () => {
})

notify_WA.addEventListener('click', () => {
    const phoneNumber = notify_INP_WA.value;
    const idInstance = "1101791870";
    const apiTokenInstance = "8392906690684c7fa385b19531e350b6a1ae1a8da016458896";

    fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
            message: combinedNotif
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});

notify_WA.appendChild(notify_INP_WA);
notify_WA.appendChild(notify_BTN_WA);
notify_CHOICE.appendChild(notify_WA);

notify_TG.appendChild(notify_INP_TG);
notify_TG.appendChild(notify_BTN_TG);
notify_CHOICE.appendChild(notify_TG);

centerize(notify_WA);
centerize(notify_TG);

nt_container.appendChild(notify_CHOICE);


leftSIDEBAR.appendChild(nt_container);



const hideSIDEBAR = qrys('.sidebartoggler');
const getsSIDEBAR = qrys('.scroll-sidebar');
getsSIDEBAR.style.transition = ".2s";
let openSIDEBAR = true;
hideSIDEBAR.addEventListener('click', async () => {
    if (openSIDEBAR) {
        getsSIDEBAR.style.translate = "-10vw 0";
        await delay(200);
        getsSIDEBAR.style.opacity = "0";
        await delay(200);
        getsSIDEBAR.style.display = "none";
    }
    else {
        getsSIDEBAR.style.display = "block";
        await delay(10);
        getsSIDEBAR.style.opacity = "1";
        getsSIDEBAR.style.translate = "0";
    }
    openSIDEBAR = !openSIDEBAR;
})


// const sendNotification = (message) => {
//     const webhookUrl = webhookUrlInput.value;
//     fetch(webhookUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 content: message
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// sendNotificationButton.addEventListener('click', () => {
//     const message = combinedNotif;
//     sendNotification(message);
// });

// const webhookUrlInput = newel('input');
// webhookUrlInput.placeholder = 'Enter Discord Webhook URL';

// const sendNotificationButton = newel('button');
// sendNotificationButton.textContent = 'Send';















const tbody = document.querySelector('tbody');
(() => {
    try {
        const links = tbody.querySelectorAll('td a');
    } catch (err) {
        console.log(err)
    }
})();
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

let notifs
let combinedNotif

// Check in tasks
const fetch_task = async (map,dir) => {
    const title = map.querySelectorAll('.media-body')[0].children[0].textContent;
    const meets = map.querySelectorAll('.panel-heading')[0].children[0].textContent;
    const menus = map.querySelectorAll('.tab-content')[0].children[0].children[1].children.length;

    let tmpMatkul = "";
    if (title.startsWith(' ')) {
        for (let i = 32; i < title.length; i++) {
            if (title[i] == "(") break;
            tmpMatkul += title[i];
        }
    }
    let notif = "";
    let icons = "";

    if (menus > 0) {
        const deadline = map.querySelectorAll('.table-striped')[0].children[0].children[4].children[2].children[1].textContent;
        notif = `<b>${tmpMatkul}</b><br>Batas : ${deadline}<br>` +
            `${meets}`;

        const qrys  = (inp) => map.querySelector(inp);
        const attend = qrys("#tug1");
        const date = new Date();
        const now = {
        d : date.getDate(),
        m : date.getMonth(),
        y : date.getFullYear(),
        h : date.getHours(),
        n : date.getMinutes(),
        }

        const dl = {
        d : parseInt(deadline[1]+deadline[2]),
        m : parseInt(deadline[4]+deadline[5]),
        y : parseInt(deadline[7]+deadline[8]+deadline[9]+deadline[10]),
        y : parseInt(deadline[7]+deadline[8]+deadline[9]+deadline[10]),
        h : parseInt(deadline[12]+deadline[13]),
        n : parseInt(deadline[15]+deadline[16]),
        }
        
        if (now.y <= dl.y) {
        if (now.m <= dl.m) {
        if (attend.children.length == 4) icons = '<i class="bi bi-check-circle" style="color: rgb(0, 185, 0)"></i>';
        else if (now.d <= dl.d-3) icons = '<i class="bi bi-bell" style="color: #fff"></i>';
        else if (now.d <= dl.d-2) icons = '<i class="bi bi-bell" style="color: rgb(185, 185, 0)"></i>';
        else if (now.d == dl.d-1) icons = '<i class="bi bi-bell-fill" style="color: rgb(185, 185, 0)"></i>';
        else if (now.d == dl.d 
                && now.h <= dl.h 
                && now.n <= dl.n) icons = '<i class="bi bi-bell-fill" style="color: rgb(238, 39, 39)"></i>';
        else 
        icons = '<i class="bi bi-exclamation-diamond-fill" style="color: rgb(238, 39, 39)"></i>';
        }}

        let newElement = document.createElement("a");
        newElement.href = `${dir}`;
        newElement.classList.add('notif-tugas');
        newElement.innerHTML = 
        `<div>
        <table>
        <tbody>
        <tr>
        <td style="padding-right: 15px">
            <h4>${icons}</h4>
        </td>
        <td>
            ${notif}
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        `;
        newElement.style.backgroundColor = "#1D2543";
        newElement.style.textAlign = "left";
        newElement.style.boxShadow = "0 5px 5px rgba(0,0,0,.1)";
        newElement.style.padding = "15px 15px 15px 20px";
        newElement.style.marginLeft = "0";
        newElement.style.marginBottom = "12px";
        newElement.style.width = "90%";
        newElement.style.color = "white";
        newElement.style.borderRadius = "15px";
        newElement.style.opacity = "0";
        newElement.style.display = "inline-block";
        newElement.style.translate = "-30px 0";
        newElement.style.transition = ".5s";
        newElement.style.cursor = "pointer";

        newElement.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.03)";
        });

        newElement.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });

        nt_list.appendChild(newElement);
        await delay(100);
        newElement.style.translate = "0";
        newElement.style.opacity = "1";

        notifs = [];
        const nt_con = document.querySelectorAll('.notif-tugas');
        for (let i = 0; i < nt_con.length; i++) {
            notifs.push(nt_con[i].textContent);
        }
        combinedNotif = notifs.join("\n\n");
    }
}
const fetch_maps = (url,dir) => {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const map = parser.parseFromString(html, "text/html");
            fetch_task(map,dir);
        })
}
const fetch_home = (map,dir) => {
    const tbody = map.querySelector('tbody');
    const links = tbody.querySelectorAll('td a');
    links.forEach(link => {
        fetch(link.href)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const map = parser.parseFromString(html, "text/html");
                const innerLinks = map.querySelectorAll('.row .col-md-6 a');
                innerLinks.forEach(innerLink => {
                    if (!innerLink.href.includes('#')) {
                        const url = innerLink.href.replace('/mhs/topik', '/mhs/tugas');
                        fetch_maps(url,url);
                    }
                })
            })
            .catch(error => console.error(error));
    });
}

fetch("https://spot.upi.edu/mhs")
.then(response => response.text())
.then(html => {
    const parser = new DOMParser();
    const map = parser.parseFromString(html, "text/html");
    fetch_home(map);
})








const link_icons = newel('link');
link_icons.setAttribute("rel", "stylesheet");
link_icons.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

const link_font_1 = newel('link');
link_font_1.setAttribute("rel", "preconnect");
link_font_1.setAttribute("href", "https://fonts.googleapis.com");

const link_font_2 = newel('link');
link_font_1.setAttribute("crossorigin", "");
link_font_1.setAttribute("rel", "preconnect");
link_font_1.setAttribute("href", "https://fonts.gstatic.com");

const link_font_3 = newel('link');
link_font_1.setAttribute("rel", "stylesheet");
link_font_1.setAttribute("href", "https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap");

const navBG = document.querySelector(".navbar-header, .right-sidebar .rpanel-title");
navBG.style.background = "none";

const pomp_font = newel('style');
pomp_font.innerHTML =
    `
body, p, h1, h2, h3, h4, div, span  {
    font-family: 'Lexend', sans-serif !important;
}

.navbar-header {
    background-color : #2C3247 !important;
}
`

document.head.appendChild(link_icons);
document.head.appendChild(link_font_1);
document.head.appendChild(link_font_2);
document.head.appendChild(link_font_3);
document.head.appendChild(pomp_font);


const bioTXT = qrys('.profile-text');
const oldTXT = bioTXT.innerHTML;
const newBIO = ["", ""];
let swap = 0;

for (let i = 1; i < oldTXT.length; i++) {
    if (oldTXT[i + 2] == "<" && oldTXT[i] == " ") {
        swap = 1;
        i += 7;
    }

    if (swap == 0) newBIO[swap] += oldTXT[i];
    else newBIO[swap] += oldTXT[i];
}
bioTXT.innerHTML = `
<b>HELLO,</b>
<br><b class="pp-txt font-16">${newBIO[0]}</b>
<br><b class="pp-txt font-12">${newBIO[1]}</b>
`;
// for (let i = 0; i < 2; i++) {
//   ppTXT[i].style.textAlign = "left";
//   ppTXT[i].style.fontWeight = "bold";
// }
bioTXT.style.textAlign = "left";
bioTXT.style.fontWeight = "bold";
bioTXT.classList.remove('m-t-15');


const bioCON = qrys('.user-pro-body');
bioCON.style.textAlign = "center";

const upsCON = newel('div');
const newCON = newel('div');
newCON.innerHTML = bioCON.innerHTML;
newCON.style.display = "inline-block";
newCON.style.width = "80%";
upsCON.appendChild(newCON);

bioCON.innerHTML = upsCON.innerHTML;




//Layouting

const navNCONT = qrys('.top-left-part');
const navNTEXT = newel('span');
const navLCONT = navNCONT.children[0];

navNTEXT.classList.add('spot-upi-txt');
navNTEXT.innerHTML = '<b>SPOT<i class="invis">i</i>UPI</b>';
navNTEXT.style.color = 'white';

navLCONT.children[1].remove();
navLCONT.appendChild(navNTEXT);

const invis = qrys('.invis');
invis.style.opacity = '0';




const scrollbar = newel('style');
scrollbar.innerHTML =
    `@media only screen and (max-width: 600px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  ::-webkit-scrollbar-button {
    background: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
}
@media only screen and (min-width: 600px) {
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 0;
    background: rgba(33, 40, 65, 1);
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  ::-webkit-scrollbar-button {
    background: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(88, 93, 111, 0.6);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    rgba(217, 217, 217, 1)
  }
}
`;
document.head.appendChild(scrollbar);

const ntl_scroll = newel('style');
ntl_scroll.innerHTML =
    `
.notif-tugas-list::-webkit-scrollbar {
    background: transparent;
}
.notif-tugas-list::-webkit-scrollbar-thumb {
    background: transparent;
}
.slimScrollBar {
    background: transparent !important;
}
.white-box>div::-webkit-scrollbar {
    height: 0;
    background: transparent !important;
}
`
document.head.appendChild(ntl_scroll);

const nt_lists = document.querySelector('.notif-tugas-container').children[1];
nt_lists.addEventListener('mouseover', () => {
    ntl_scroll.innerHTML =
        `
    .notif-tugas-list::-webkit-scrollbar {
        background: rgba(33, 40, 65, 1);
    }
    .notif-tugas-list::-webkit-scrollbar-thumb {
        rgba(217, 217, 217, 1)
    }
    .slimScrollBar {
        background: transparent !important;
    }
    `
});
nt_lists.addEventListener('mouseout', () => {
    ntl_scroll.innerHTML =
        `
    .notif-tugas-list::-webkit-scrollbar {
        background: transparent;
    }
    .notif-tugas-list::-webkit-scrollbar-thumb {
        background: transparent;
    }
    .slimScrollBar {
        background: transparent !important;
    }
    `
});





// Container logo SPOT UPI
const navSPOT = qrys('.navbar-header');
navSPOT.style.backgroundColor = "#2C3247";

// Container title SPOT UPI
const spotUPI = qrys('.top-left-part');
spotUPI.style.backgroundColor = "#0283CC";

// Container logout
const navRIGH = qrys('.navbar-right').children[0].children[0];
navRIGH.style.borderWidth = "0";


// Container navbar kiri
const navLEFT = qrys('.sidebar');
navLEFT.style.backgroundColor = "#161C33";
navLEFT.style.overflow = "hidden";

// Container list matkul
const contLMS = qrys('.sidebar-nav');
contLMS.style.backgroundColor = "transparent";
contLMS.style.textAlign = "center";

const listMKL = qrys('#side-menu');
listMKL.style.backgroundColor = "#0283CC";
listMKL.style.borderRadius = "15px";
listMKL.style.width = "80%";
listMKL.style.display = "inline-block";


// Container display kanan
const disCONT = qrys('.container-fluid');
disCONT.style.backgroundColor = "#171E37";

// Child utama display kanan
const disCHLD = disCONT.children[0].children[0];
disCHLD.style.backgroundColor = "#171E37";

// Child inner display kanan
const disINNR = disCHLD.children[0];
disINNR.style.backgroundColor = "#1D2543";
disINNR.style.borderRadius = "15px";