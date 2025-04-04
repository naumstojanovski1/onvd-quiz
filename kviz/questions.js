const questions = [
    { question: "Кој селектор има повисока специфичност?", answers: [
            { text: "#main", correct: true },
            { text: ".menu .item", correct: false },
            { text: "nav ul li a", correct: false },
            { text: "a:hover", correct: false }
        ]},
    { question: "Што селектира p.intro + span?", answers: [
            { text: "Сите span во p со класа intro", correct: false },
            { text: "Првиот span веднаш по p.intro", correct: true },
            { text: "Сите span елементи после p", correct: false },
            { text: "Сите intro класи со span", correct: false }
        ]},
    { question: "Каков е ефектот на 'display: none' во CSS?", answers: [
            { text: "Елементот ќе биде невидлив, но ќе го задржи својот простор", correct: false },
            { text: "Елементот ќе биде невидлив и ќе го изгуби својот простор", correct: true },
            { text: "Елементот ќе се прикаже како празен простор", correct: false },
            { text: "Нема никаков ефект", correct: false }
        ]},
    { question: "Што прави селекторот 'div > p'?", answers: [
            { text: "Селектира сите p елементи", correct: false },
            { text: "Селектира само p елементи кои се деца на div", correct: true },
            { text: "Селектира сите p елементи внатре во div", correct: false },
            { text: "Селектира само p елементи со класа 'div'", correct: false }
        ]},
    { question: "Како се додава CSS класата 'active' на елемент во HTML?", answers: [
            { text: 'class="active"', correct: true },
            { text: 'id="active"', correct: false },
            { text: 'style="active"', correct: false },
            { text: 'active="true"', correct: false }
        ]},
    { question: "Што прави селекторот '.menu > li'?", answers: [
            { text: "Селектира сите li елементи внатре во .menu", correct: false },
            { text: "Селектира само li елементи кои се директни деца на .menu", correct: true },
            { text: "Селектира сите li елементи", correct: false },
            { text: "Селектира само .menu класи", correct: false }
        ]},
    { question: "Како може да се селектира единечен елемент со id во CSS?", answers: [
            { text: "#elementId", correct: true },
            { text: ".elementId", correct: false },
            { text: "elementId", correct: false },
            { text: "element#id", correct: false }
        ]},
    { question: "Што прави 'float: left' во CSS?", answers: [
            { text: "Елементот се појавува на десниот дел од неговиот родител", correct: false },
            { text: "Елементот се појавува на левиот дел од неговиот родител", correct: true },
            { text: "Елементот се појавува на целата ширина", correct: false },
            { text: "Нема никакво влијание", correct: false }
        ]},
    { question: "Како може да се направи прелив во боја со CSS?", answers: [
            { text: "background-color: linear-gradient();", correct: false },
            { text: "background: linear-gradient();", correct: true },
            { text: "background-image: gradient();", correct: false },
            { text: "color: linear-gradient();", correct: false }
        ]},
    { question: "Што прави 'position: absolute' во CSS?", answers: [
            { text: "Елементот се поставува во однос на неговиот непосреден родител", correct: false },
            { text: "Елементот се поставува во однос на најблискиот позициониран родител", correct: true },
            { text: "Елементот се поставува на почетната позиција на страницата", correct: false },
            { text: "Елементот се поставува на крајот на страницата", correct: false }
        ]},
    { question: "Како може да се постави маргина на сите страни на елементот?", answers: [
            { text: "margin: 10px;", correct: true },
            { text: "padding: 10px;", correct: false },
            { text: "border: 10px;", correct: false },
            { text: "width: 10px;", correct: false }
        ]},
    { question: "Што прави 'text-align: center' во CSS?", answers: [
            { text: "Поравнува текстот по десната страна", correct: false },
            { text: "Поравнува текстот по левата страна", correct: false },
            { text: "Поравнува текстот во центарот", correct: true },
            { text: "Поравнува текстот по врвот на елементот", correct: false }
        ]},
    { question: "Како се селектира сеопфатно елемент во HTML?", answers: [
            { text: "Ова не може да се направи", correct: false },
            { text: "*", correct: true },
            { text: "all", correct: false },
            { text: "every", correct: false }
        ]},
    { question: "Што прави 'z-index' во CSS?", answers: [
            { text: "Одредува како елементите ќе се прикажат во однос на други елементи по осната на Z", correct: true },
            { text: "Дава редослед на елементите", correct: false },
            { text: "Одредува големина на елементот", correct: false },
            { text: "Променува боја на елементот", correct: false }
        ]},
    { question: "Како да се направи адаптивен дизајн за мобилни уреди?", answers: [
            { text: "Постави фиксна ширина за сите елементи", correct: false },
            { text: "Користи media queries", correct: true },
            { text: "Избегнувај ширина под 800px", correct: false },
            { text: "Не користи any CSS properties", correct: false }
        ]},
    { question: "Што прави 'box-sizing: border-box'?", answers: [
            { text: "Вклучува маргињи во ширината на елементот", correct: false },
            { text: "Вклучува и padding и border во ширината на елементот", correct: true },
            { text: "Дава ширина на елементот без padding", correct: false },
            { text: "Го поставува сите елементи да се појавуваат во еден ред", correct: false }
        ]},
    { question: "Како се прави анимација во CSS?", answers: [
            { text: "animation: slide 2s infinite;", correct: true },
            { text: "transition: slide 2s;", correct: false },
            { text: "hover: slide 2s;", correct: false },
            { text: "keyframes: slide 2s;", correct: false }
        ]},
    { question: "Како да се постави фонска слика во CSS?", answers: [
            { text: "background-image: url('image.jpg');", correct: true },
            { text: "image-background: url('image.jpg');", correct: false },
            { text: "background: image('image.jpg');", correct: false },
            { text: "img-background: url('image.jpg');", correct: false }
        ]},
    { question: "Што прави 'clear: both' во CSS?", answers: [
            { text: "Го чисти текстот од сите празни пространства", correct: false },
            { text: "Го спречува следниот елемент да се постави на истото место", correct: true },
            { text: "Го додава padding на сите елементи", correct: false },
            { text: "Го поставува елементот на центар", correct: false }
        ]},
    { question: "Како се селектира елемент со класата 'highlight'?", answers: [
            { text: ".highlight", correct: true },
            { text: "#highlight", correct: false },
            { text: "highlight", correct: false },
            { text: "element.highlight", correct: false }
        ]},
    { question: "Како да се направи hyperlink во HTML?", answers: [
            { text: "<a href='https://www.example.com'>Притисни овде</a>", correct: true },
            { text: "<a>Притисни овде</a>", correct: false },
            { text: "<link href='https://www.example.com'>Притисни овде</link>", correct: false },
            { text: "<href='https://www.example.com'>Притисни овде</href>", correct: false }
        ]},
    { question: "Како да се создаде табела во HTML?", answers: [
            { text: "<table><tr><td>Content</td></tr></table>", correct: true },
            { text: "<table><row><td>Content</td></row></table>", correct: false },
            { text: "<table><tr><th>Header</th></tr></table>", correct: false },
            { text: "<table><td>Content</td></table>", correct: false }
        ]},
    { question: "Како се поставува ширината на елементот во HTML?", answers: [
            { text: "width: 100%;", correct: true },
            { text: "width: 100px;", correct: false },
            { text: "height: 100%;", correct: false },
            { text: "margin: 100%;", correct: false }
        ]},
    { question: "Што прави 'flex' во CSS?", answers: [
            { text: "Создава флексибилна поставеност на елементите", correct: true },
            { text: "Прави елементите флексибилни во ширина", correct: false },
            { text: "Прави елементите течно прилагодливи", correct: false },
            { text: "Дава помалку просторот", correct: false }
        ]},
    { question: "Како се додава нов елемент во HTML?", answers: [
            { text: "<new-element></new-element>", correct: true },
            { text: "<div></div>", correct: false },
            { text: "<section></section>", correct: false },
            { text: "<span></span>", correct: false }
        ]},
    { question: "Што означува 'em' во CSS?", answers: [
            { text: "Единица за измерување која зависи од големината на фонтовите", correct: true },
            { text: "Параметар за ширина на елементот", correct: false },
            { text: "Големина на пиксели", correct: false },
            { text: "Тип на боја", correct: false }
        ]},
    { question: "Како да се направи прелив во CSS?", answers: [
            { text: "background: linear-gradient(to right, red, yellow);", correct: true },
            { text: "background-color: red; background-color: yellow;", correct: false },
            { text: "background-image: gradient(red, yellow);", correct: false },
            { text: "color: gradient(red, yellow);", correct: false }
        ]},
    { question: "Како да се постави слика во позадина на веб-страница?", answers: [
            { text: "background-image: url('image.jpg');", correct: true },
            { text: "background: url('image.jpg');", correct: false },
            { text: "img-background: url('image.jpg');", correct: false },
            { text: "image: background(url('image.jpg'));", correct: false }
        ]},
    { question: "Што прави 'position: relative' во CSS?", answers: [
            { text: "Позиционира елементот во однос на неговото нормално место во текот на протокот", correct: true },
            { text: "Позиционира елементот во однос на најблискиот родителски елемент", correct: false },
            { text: "Позиционира елементот во однос на прозорецот", correct: false },
            { text: "Позиционира елементот на крајот на страницата", correct: false }
        ]},
    { question: "Како да се постават растојанија помеѓу елементите во CSS?", answers: [
            { text: "margin: 20px;", correct: true },
            { text: "padding: 20px;", correct: false },
            { text: "border: 20px;", correct: false },
            { text: "height: 20px;", correct: false }
        ]},
    { question: "Како да се направи линк за отворање нова страница во HTML?", answers: [
            { text: "<a href='https://www.example.com' target='_blank'>Отвори нова страница</a>", correct: true },
            { text: "<a href='https://www.example.com'>Отвори нова страница</a>", correct: false },
            { text: "<link href='https://www.example.com'>Отвори нова страница</link>", correct: false },
            { text: "<a href='https://www.example.com' target='_self'>Отвори нова страница</a>", correct: false }
        ]},
    { question: "Што прави 'border-radius' во CSS?", answers: [
            { text: "Дава заоблени рабови на елементот", correct: true },
            { text: "Поставува рабови за елементот", correct: false },
            { text: "Поставува распоред на елементот", correct: false },
            { text: "Променува ширината на елементот", correct: false }
        ]},
    { question: "Како може да се постави боја на текст во CSS?", answers: [
            { text: "color: red;", correct: true },
            { text: "font-color: red;", correct: false },
            { text: "text-color: red;", correct: false },
            { text: "background-color: red;", correct: false }
        ]},
    { question: "Што прави 'font-size' во CSS?", answers: [
            { text: "Одредува големината на фонтовите", correct: true },
            { text: "Одредува големината на страницата", correct: false },
            { text: "Одредува ширина на елементот", correct: false },
            { text: "Одредува висина на елементот", correct: false }
        ]},
    { question: "Како да се постави хоризонтална линија во HTML?", answers: [
            { text: "<hr>", correct: true },
            { text: "<line>", correct: false },
            { text: "<br>", correct: false },
            { text: "<horizontal>", correct: false }
        ]},
    { question: "Како да се изврши прелив на боја на дугме?", answers: [
            { text: "button:hover { background-color: red; }", correct: true },
            { text: "button:hover { color: red; }", correct: false },
            { text: "button:active { background-color: red; }", correct: false },
            { text: "button:focus { color: red; }", correct: false }
        ]},
    { question: "Што прави 'visibility: hidden' во CSS?", answers: [
            { text: "Елементот ќе биде невидлив, но ќе го задржи својот простор", correct: true },
            { text: "Елементот ќе биде невидлив и ќе го изгуби својот простор", correct: false },
            { text: "Елементот ќе биде скриен од корисникот", correct: false },
            { text: "Нема ефект на елементот", correct: false }
        ]},
    { question: "Како да се постави padding на елемент во CSS?", answers: [
            { text: "padding: 10px;", correct: true },
            { text: "margin: 10px;", correct: false },
            { text: "border: 10px;", correct: false },
            { text: "width: 10px;", correct: false }
        ]},
    { question: "Што прави 'text-decoration: underline' во CSS?", answers: [
            { text: "Подвлекува текст", correct: true },
            { text: "Дава рамка околу текстот", correct: false },
            { text: "Ја менува бојата на текстот", correct: false },
            { text: "Поставува текстот да биде врзан", correct: false }
        ]},
    { question: "Што прави 'display: flex' во CSS?", answers: [
            { text: "Поставува елементите во флексибилен распоред", correct: true },
            { text: "Поставува елементите во табеларен распоред", correct: false },
            { text: "Прикажува елементите на една линија", correct: false },
            { text: "Поставува елементите да се прикажуваат на различни редови", correct: false }
        ]},
    { question: "Како се додава маргина само на горниот дел на елементот?", answers: [
            { text: "margin-top: 10px;", correct: true },
            { text: "margin-bottom: 10px;", correct: false },
            { text: "padding-top: 10px;", correct: false },
            { text: "padding: 10px;", correct: false }
        ]},
    { question: "Што прави 'overflow: hidden' во CSS?", answers: [
            { text: "Скрива се прележаните делови од елементот", correct: true },
            { text: "Ја поставува ширината на елементот", correct: false },
            { text: "Секој елемент ќе се појави во нов ред", correct: false },
            { text: "Сите елементи ќе се прикажат со рамка", correct: false }
        ]},
    { question: "Како да се создаде табела со две колони во HTML?", answers: [
            { text: "<table><tr><td>Колона 1</td><td>Колона 2</td></tr></table>", correct: true },
            { text: "<table><row><td>Колона 1</td><td>Колона 2</td></row></table>", correct: false },
            { text: "<table><tr><th>Колона 1</th><th>Колона 2</th></tr></table>", correct: false },
            { text: "<table><td>Колона 1</td><td>Колона 2</td></table>", correct: false }
        ]}



];