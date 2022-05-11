const keyboardDiv = document.createElement('div');
const lineDiv = document.createElement('div');
const containerDiv = document.createElement('div');
const textAreaTag = document.createElement('textarea');
const titleTag = document.createElement('title');
const metaTag = document.querySelectorAll('meta');
const body = document.querySelector('body');

metaTag[2].insertAdjacentHTML('afterend', '<title>Virtual Keyboard</title>');
metaTag[2].insertAdjacentHTML('afterend', '<link rel="icon" type="image/png" href="./favicon.ico" sizes="16x16">');

keyboardDiv.className = 'keyboard';
lineDiv.className = 'line';
containerDiv.className = 'container';
textAreaTag.className = 'text';
textAreaTag.type = 'text';
textAreaTag.setAttribute("autofocus", "autofocus");
textAreaTag.setAttribute("cols", "78");
textAreaTag.setAttribute("rows", "100");
textAreaTag.setAttribute("resize", "none");
textAreaTag.textContent = "OS Windows. Для переключения раскладки используйте 'Alt' + 'Shift'";
textAreaTag.id = 'keyboard-input';
let title = document.querySelector('title');
title.insertAdjacentHTML('beforebegin', '<link rel="stylesheet" href="./style.css">');

document.body.prepend(containerDiv);
containerDiv.prepend(textAreaTag);
containerDiv.append(keyboardDiv);
keyboardDiv.prepend(lineDiv);
lineDiv.innerHTML = '<div class="key backquote" on-shift="~" data-lang="`">`</div>';
lineDiv.innerHTML += '<div class="key" on-shift="!" data-lang="1">1</div>';
lineDiv.innerHTML += '<div class="key" on-shift="@" data-lang="2">2</div>';
lineDiv.innerHTML += '<div class="key" on-shift="#" data-lang="3">3</div>';
lineDiv.innerHTML += '<div class="key" on-shift="$" data-lang="4">4</div>';
lineDiv.innerHTML += '<div class="key" on-shift="%" data-lang="5">5</div>';
lineDiv.innerHTML += '<div class="key" on-shift=":" data-lang="6">6</div>';
lineDiv.innerHTML += '<div class="key" on-shift="?" data-lang="7">7</div>';
lineDiv.innerHTML += '<div class="key" on-shift="*" data-lang="8">8</div>';
lineDiv.innerHTML += '<div class="key" on-shift="(" data-lang="9">9</div>';
lineDiv.innerHTML += '<div class="key" on-shift=")" data-lang="0">0</div>';
lineDiv.innerHTML += '<div class="key" on-shift="_" data-lang="-">-</div>';
lineDiv.innerHTML += '<div class="key" on-shift="+" data-lang="=">=</div>';
lineDiv.innerHTML += '<div class="key" on-shift="/" data-lang="\\">\\</div>';
lineDiv.innerHTML += '<div class="key backspace"><p class="back">Back</p><p class="space1">space<p></div>';

keyboardDiv.innerHTML += '<div class="line"></div>';
lineDiv.innerHTML = '<div class="key"></div>';
let line2 = document.querySelectorAll('.line');
line2[1].innerHTML = '<div class="key tab">Tab</div>';
line2[1].innerHTML += '<div class="key" data-lang="Q">Q</div>';
line2[1].innerHTML += '<div class="key" data-lang="W">W</div>';
line2[1].innerHTML += '<div class="key" data-lang="E">E</div>';
line2[1].innerHTML += '<div class="key" data-lang="R">R</div>';
line2[1].innerHTML += '<div class="key" data-lang="T">T</div>';
line2[1].innerHTML += '<div class="key" data-lang="Y">Y</div>';
line2[1].innerHTML += '<div class="key" data-lang="U">U</div>';
line2[1].innerHTML += '<div class="key" data-lang="I">I</div>';
line2[1].innerHTML += '<div class="key" data-lang="O">O</div>';
line2[1].innerHTML += '<div class="key" data-lang="P">P</div>';
line2[1].innerHTML += '<div class="key" data-lang="[" on-shift="{">[</div>';
line2[1].innerHTML += '<div class="key" data-lang="]" on-shift="}">]</div>';
line2[1].innerHTML += '<div class="key del">DEL</div>';

keyboardDiv.innerHTML += '<div class="line"></div>';
line2 = document.querySelectorAll('.line');
line2[2].innerHTML = '<div class="key caps-lock">Caps Lock</div>';
line2[2].innerHTML += '<div class="key" data-lang="A">A</div>';
line2[2].innerHTML += '<div class="key" data-lang="S">S</div>';
line2[2].innerHTML += '<div class="key" data-lang="D">D</div>';
line2[2].innerHTML += '<div class="key" data-lang="F">F</div>';
line2[2].innerHTML += '<div class="key" data-lang="G">G</div>';
line2[2].innerHTML += '<div class="key" data-lang="H">H</div>';
line2[2].innerHTML += '<div class="key" data-lang="J">J</div>';
line2[2].innerHTML += '<div class="key" data-lang="K">K</div>';
line2[2].innerHTML += '<div class="key" data-lang="L">L</div>';
line2[2].innerHTML += '<div class="key" on-shift=":" data-lang=";">;</div>';
line2[2].innerHTML += `<div class="key" on-shift='"' data-lang="'">'</div>`;
line2[2].innerHTML += `<div class="key enter">ENTER</div>`;

keyboardDiv.innerHTML += '<div class="line"></div>';
line2 = document.querySelectorAll('.line');
line2[3].innerHTML = '<div class="key shift">Shift</div>';
line2[3].innerHTML += '<div class="key" data-lang="Z">Z</div>';
line2[3].innerHTML += '<div class="key" data-lang="X">X</div>';
line2[3].innerHTML += '<div class="key" data-lang="C">C</div>';
line2[3].innerHTML += '<div class="key" data-lang="V">V</div>';
line2[3].innerHTML += '<div class="key" data-lang="B">B</div>';
line2[3].innerHTML += '<div class="key" data-lang="N">N</div>';
line2[3].innerHTML += '<div class="key" data-lang="M">M</div>';
line2[3].innerHTML += '<div class="key" on-shift="<" data-lang=",">,</div>';
line2[3].innerHTML += '<div class="key" on-shift=">" data-lang=".">.</div>';
line2[3].innerHTML += '<div class="key" on-shift="?" data-lang="/">/</div>';
line2[3].innerHTML += '<div class="key arrow_up">&uarr;</div>';
line2[3].innerHTML += '<div class="key shift2">Shift</div>';

keyboardDiv.innerHTML += '<div class="line"></div>';
line2 = document.querySelectorAll('.line');
line2[4].innerHTML = '<div class="key ctrl">Ctrl</div>';
line2[4].innerHTML += '<div class="key win">Win</div>';
line2[4].innerHTML += '<div class="key lalt">Alt</div>';
line2[4].innerHTML += '<div class="key spacebar">Space</div>';
line2[4].innerHTML += '<div class="key ralt" id="ralt">Alt</div>';
line2[4].innerHTML += '<div class="key arrow_left">&larr;</div>';
line2[4].innerHTML += '<div class="key arrow_down">&darr;</div>';
line2[4].innerHTML += '<div class="key arrow_right">&rarr;</div>';
line2[4].innerHTML += '<div class="key rctrl"><p class="ctrl_text">Ctrl<p></div>';

const keys = document.querySelectorAll('.key');
const spacebarKey = document.querySelector('.spacebar');
const leftShiftKey = document.querySelector('.shift');
const rightShiftKey = document.querySelector('.shift2');
const leftAltKey = document.querySelector('.lalt');
const rightAltKey = document.getElementById('ralt');
const capsLockKey = document.querySelector('.caps-lock');
const leftCtrlKey = document.querySelector('.ctrl');
const rightCtrlKey = document.querySelector('.rctrl');
const leftStartKey = document.querySelector('.win');
const backspaceKey = document.querySelector('.backspace');
const delKey = document.querySelector('.del');
const enterKey = document.querySelector('.enter');
const arrowDownKey = document.querySelector('.arrow_down');
const arrowLeftKey = document.querySelector('.arrow_left');
const arrowRightKey = document.querySelector('.arrow_right');
const arrowUpKey = document.querySelector('.arrow_up');
const backquoteKey = document.querySelector('.backquote');
const tabKey = document.querySelector('.tab');

const inputText = document.querySelector('.text');
const textarea = document.querySelector('textarea');
var langLayout = '';
let count;
var eventLetter;

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 20 || e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18) {
    return;
  }
  if (e.keyCode == 9) {
    textAreaTag.setRangeText('     ', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
  }
});

const language = {
  'en': {
    '`': '`',
    'Q': 'Q',
    'W': 'W',
    'E': 'E',
    'R': 'R',
    'T': 'T',
    'Y': 'Y',
    'U': 'U',
    'I': 'I',
    'O': 'O',
    'P': 'P',
    '[': '[',
    ']': ']',
    'A': 'A',
    'S': 'S',
    'D': 'D',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    ';': ';',
    "'": "'",
    'Z': 'Z',
    'X': 'X',
    'C': 'C',
    'V': 'V',
    'B': 'B',
    'N': 'N',
    'M': 'M',
    ',': ',',
    '.': '.',
    '/': '/'
  },
  'ru': {
    '`': 'Ё',
    'Q': 'Й',
    'W': 'Ц',
    'E': 'У',
    'R': 'К',
    'T': 'Е',
    'Y': 'Н',
    'U': 'Г',
    'I': 'Ш',
    'O': 'Щ',
    'P': 'З',
    '[': 'Х',
    ']': 'Ъ',
    'A': 'Ф',
    'S': 'Ы',
    'D': 'В',
    'F': 'А',
    'G': 'П',
    'H': 'Р',
    'J': 'О',
    'K': 'Л',
    'L': 'Д',
    ';': 'Ж',
    "'": "Э",
    'Z': 'Я',
    'X': 'Ч',
    'C': 'С',
    'V': 'М',
    'B': 'И',
    'N': 'Т',
    'M': 'Ь',
    ',': 'Б',
    '.': 'Ю',
    '/': '.'
  }
}

function switchLang(lang) {
  if (!language[lang]);
  let translation = language[lang];
  let allDataLang = document.querySelectorAll("[data-lang]");
  allDataLang.forEach(function (item) {
    let translationKey = item.getAttribute('data-lang');
    if (translation[translationKey])
      item.textContent = translation[translationKey];
  });
  setKeysAttributes();
}

function setKeysAttributes() {
  for (i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
  };
}



const keyDownLightning = function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code == 'Tab') {
      e.preventDefault();
    }
    if (e.code == 'Space') {
      spacebarKey.classList.add('active');
    }
    if (e.code == 'ShiftLeft') {
      rightShiftKey.classList.remove('active');
      leftCtrlKey.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      leftShiftKey.classList.remove('active');
    }
    if (e.code == 'CapsLock') {
      capsLockKey.classList.toggle('active');
    }
    if (e.code == 'AltLeft') {
      rightAltKey.classList.remove('active');
      e.preventDefault();
    }
    if (e.code == 'AltRight') {
      leftAltKey.classList.remove('active');
      e.preventDefault();
    }
    if (e.code == 'ControlLeft') {
      leftCtrlKey.classList.add('active');
    }
    if (e.code == 'ControlRight') {
      rightCtrlKey.classList.add('active');
    }
    if (e.keyCode == 91) {
      leftStartKey.classList.add('active');
      e.preventDefault();
    }
    if (e.keyCode == 8) {
      backspaceKey.classList.add('active');
    }
    if (e.code == 'Delete') {
      delKey.classList.add('active');
    }
    if (e.code == 'Enter') {
      enterKey.classList.add('active');
    }
    if (e.code == 'ArrowDown') {
      arrowDownKey.classList.add('active');
    }
    if (e.code == 'ArrowLeft') {
      arrowLeftKey.classList.add('active');
    }
    if (e.code == 'ArrowRight') {
      arrowRightKey.classList.add('active');
    }
    if (e.code == 'ArrowUp') {
      arrowUpKey.classList.add('active');
    }
    if (e.keyCode == 192) {
      backquoteKey.classList.add('active');
    }
    else if (e.code === 'ShiftLeft' && e.code === 'AltLeft') {
      switchLang();
    }
  }
};



window.addEventListener('keydown', keyDownLightning)




const capsToggleActive = function (e) {
  checkLangSwitchKeydown();
  if (e.code == 'CapsLock') {
    capsLockKey.classList.toggle('active');
  }
};

window.addEventListener('keydown', capsToggleActive);


const keyUpLightning = function (e) {
  for (let i = 0; i < keys.length; i++) {

    setTimeout(() => {
      keys[i].classList.remove('remove')
    }, 200);

    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code == 'Space') {
      spacebarKey.classList.remove('active');
      spacebarKey.classList.add('remove');
    }
    if (e.code == 'ShiftLeft') {
      rightShiftKey.classList.remove('active');
      rightShiftKey.classList.remove('remove');
      leftCtrlKey.classList.remove('active');
      leftCtrlKey.classList.remove('remove');
    }
    if (e.code == 'ShiftRight') {
      leftShiftKey.classList.remove('active');
      leftShiftKey.classList.remove('remove');
    }
    if (e.code == 'AltLeft') {
      rightAltKey.classList.remove('active');
      rightAltKey.classList.remove('remove');
      leftCtrlKey.classList.remove('active');
      leftCtrlKey.classList.remove('remove');
    }
    if (e.code == 'AltRight') {
      leftAltKey.classList.remove('active');
      leftAltKey.classList.remove('remove');
    }
    if (e.code == 'ControlLeft') {
      leftCtrlKey.classList.remove('active');
      leftCtrlKey.classList.add('remove');
    }
    if (e.code == 'ControlRight') {
      rightCtrlKey.classList.remove('active');
      rightCtrlKey.classList.add('remove');
    }
    if (e.keyCode == 91) {
      leftStartKey.classList.remove('active');
      leftStartKey.classList.add('remove');
    }
    if (e.keyCode == 8) {
      backspaceKey.classList.remove('active');
      backspaceKey.classList.add('remove');
    }
    if (e.code == 'Delete') {
      delKey.classList.remove('active');
      delKey.classList.add('remove');
    }
    if (e.code == 'Enter') {
      enterKey.classList.remove('active');
      enterKey.classList.add('remove');
    }
    if (e.code == 'ArrowDown') {
      arrowDownKey.classList.remove('active');
      arrowDownKey.classList.add('remove');
    }
    if (e.code == 'ArrowLeft') {
      arrowLeftKey.classList.remove('active');
      arrowLeftKey.classList.add('remove');
    }
    if (e.code == 'ArrowRight') {
      arrowRightKey.classList.remove('active');
      arrowRightKey.classList.add('remove');
    }
    if (e.code == 'ArrowUp') {
      arrowUpKey.classList.remove('active');
      arrowUpKey.classList.add('remove');
    }
    if (e.keyCode == 192) {
      backquoteKey.classList.remove('active');
      backquoteKey.classList.add('remove');
      e.preventDefault();
    }
  }
};
window.addEventListener('keyup', keyUpLightning);


document.addEventListener('click', () => { textarea.focus() });
document.addEventListener('keyup ', () => { textarea.focus() });


function checkLangSwitchKeydown(evt) {

  if (!evt) evt = event;
  if (evt.ctrlKey && evt.altKey && evt.keyCode == 115) {
    console.log('O-o-u');
  }
  if (evt.shiftKey && evt.altKey) {
    count++;
  }
  if (count % 2 == 0) {
    switchLang('ru');
    localStorage.setItem('lang', 'ru');
  }
  if (count % 2 != 0) {
    switchLang('en');
    localStorage.setItem('lang', 'en');
  }
}

function promptGetLang(nameAlert) {
  nameAlert = "Эта виртуальная клавиатура была создана в OS Windows. Введите несколько букв для определения текущей раскладки клавиатуры";
  langLayout = prompt(nameAlert, '');
  checklangLayout();
}

function checklangLayout() {
  if (langLayout == null || langLayout == '') {
    promptGetLang();
  }
  else {
    for (let i = 0; i < langLayout.length; i++) {
      if (langLayout.charCodeAt(i) < 1040 || langLayout.charCodeAt(i) > 1103) {
        count = 1;
        switchLang('en');
        localStorage.setItem('lang', 'en');
      }
      else {
        count = 2;
        switchLang('ru');
        localStorage.setItem('lang', 'ru');
      }
    }
  }
}

promptGetLang();

line2 = document.querySelector('.keyboard');



capsLockKey.addEventListener('click', function () {
  capsLockKey.classList.toggle('active');
})





line2.addEventListener('click', function (event) {
  let pathToOnclickKey = event.target.classList[1];
  let targetClassList0 = event.target.classList[0];

  if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active') || capsLockKey.classList.contains('active')) {
    if (event.target.closest('.key') && pathToOnclickKey != 'tab' && pathToOnclickKey != "spacebar" && pathToOnclickKey != "lalt" && pathToOnclickKey != "ralt" && pathToOnclickKey != "shift" && pathToOnclickKey != "ctrl" && pathToOnclickKey != "win" && targetClassList0 != "space1" && targetClassList0 != "back" && pathToOnclickKey != "arrow_left" && pathToOnclickKey != "arrow_right" && pathToOnclickKey != "arrow_up" && pathToOnclickKey != "arrow_down" && targetClassList0 != "ctrl_text" && pathToOnclickKey != "shift2" && pathToOnclickKey != "enter" && pathToOnclickKey != "del" && pathToOnclickKey != "caps-lock" && targetClassList0 != "ctrl_text" && targetClassList0 != 'rctrl' && pathToOnclickKey != "backspace") {
      eventLetter = event.target.outerText;
      textAreaTag.focus();
      textAreaTag.value += (event.target.attributes[2].nodeValue).toUpperCase();
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }

    if (pathToOnclickKey == 'spacebar') {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      textAreaTag.setRangeText(' ', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == 'tab') {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      textAreaTag.setRangeText('     ', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == "shift") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "shift2") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "ctrl") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (targetClassList0 == "ctrl_text") {
      eventLetter = targetClassList0;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "win") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "lalt") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "ralt") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_down") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_left") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_right") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_up") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }

    else if (event.target.outerText == 'Back') {
      eventLetter = event.target.outerText;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      if(textAreaTag.selectionStart == 0) {
        return
      }
      textAreaTag.setRangeText('', textAreaTag.selectionStart-1, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == "enter") {
      eventLetter = "enter";
      onclickKeyLightning("enter");
      mouseUpKeyLightning("enter");
      textAreaTag.setRangeText('\n', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    if (pathToOnclickKey == 'del') {
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      eventLetter = 'del';
      if (textAreaTag.value == '') {
        return
      } else {
        textAreaTag.selectionStart = textAreaTag.selectionStart + 1;
        textAreaTag.setRangeText('', textAreaTag.selectionStart - 1, textAreaTag.selectionEnd, "end")
      }
    }
    else {
      if (event.target.innerHTML == 'Tab') {
        event.preventDefault();
        textAreaTag.textContent += "     ";
      }
      if (eventLetter == 'Caps Lock') {
        return
      }
      else {
        if (event.target.client == 'key tab') {
          event.preventDefault();
          return;
        }


      }

    }
    pathToOnclickKey = event.target.classList[1];
    targetClassList0 = event.target.classList[0];
  }

  else if
    (!leftShiftKey.classList.contains('active') || !rightShiftKey.classList.contains('active') || !capsLockKey.classList.contains('active')) {
    if (event.target.closest('.key') && pathToOnclickKey != 'tab' && pathToOnclickKey != "spacebar" && pathToOnclickKey != "lalt" && pathToOnclickKey != "ralt" && pathToOnclickKey != "shift" && pathToOnclickKey != "ctrl" && pathToOnclickKey != "win" && targetClassList0 != "space1" && targetClassList0 != "back" && pathToOnclickKey != "arrow_left" && pathToOnclickKey != "arrow_right" && pathToOnclickKey != "arrow_up" && pathToOnclickKey != "arrow_down" && targetClassList0 != "ctrl_text" && pathToOnclickKey != "shift2" && pathToOnclickKey != "enter" && pathToOnclickKey != "del" && pathToOnclickKey != "caps-lock" && targetClassList0 != "ctrl_text" && pathToOnclickKey != 'rctrl' && pathToOnclickKey != "backspace") {
      eventLetter = event.target.attributes[3].nodeValue;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      textAreaTag.focus();
      textAreaTag.value += eventLetter.toLowerCase();
    }
    if (pathToOnclickKey == 'spacebar') {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      textAreaTag.setRangeText(' ', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == 'tab') {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      textAreaTag.setRangeText('     ', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == "shift") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "shift2") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "ctrl") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (targetClassList0 == "ctrl_text" || event.target.classList[1] == 'rctrl') {
      eventLetter = targetClassList0;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "win") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "lalt") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "ralt") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_down") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_left") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_right") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }
    else if (pathToOnclickKey == "arrow_up") {
      eventLetter = pathToOnclickKey;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
    }

    else if (event.target.outerText == 'Back') {
      eventLetter = event.target.outerText;
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      if(textAreaTag.selectionStart == 0) {
        return
      }
      textAreaTag.setRangeText('', textAreaTag.selectionStart-1, textAreaTag.selectionEnd, "end");
    }
    else if (pathToOnclickKey == "enter") {
      eventLetter = "enter";
      onclickKeyLightning("enter");
      mouseUpKeyLightning("enter");
      textAreaTag.setRangeText('\n', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
    }
    if (pathToOnclickKey == 'del') {
      onclickKeyLightning(eventLetter);
      mouseUpKeyLightning(eventLetter);
      eventLetter = 'del';
      if (textAreaTag.value == '') {
        return
      } else {
        textAreaTag.selectionStart = textAreaTag.selectionStart + 1;
        textAreaTag.setRangeText('', textAreaTag.selectionStart - 1, textAreaTag.selectionEnd, "end")
      }
    }
    else {
      if (event.target.innerHTML == 'Tab') {
        event.preventDefault();
        textAreaTag.textContent += "     ";
      }
      if (eventLetter == 'Caps Lock') {
        return
      }
      else {
        if (event.target.client == 'key tab') {
          event.preventDefault();
          return;
        }

      }
    }
  }
})


const onclickKeyLightning = function (eventLetter) {
  for (let i = 0; i < keys.length; i++) {
    if (eventLetter == keys[i].getAttribute('keyname') || eventLetter == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
  }
  if (eventLetter == 'tab') {
  }
  if (eventLetter == 'spacebar') {
    spacebarKey.classList.add('active');
  }
  if (eventLetter == 'shift') {
    rightShiftKey.classList.remove('active');
    leftCtrlKey.classList.remove('active');
  }
  if (eventLetter == 'shift2') {
    leftShiftKey.classList.remove('active');
    rightShiftKey.classList.add('active');
  }
  if (eventLetter == 'CapsLock') {
    capsLockKey.classList.toggle('active');
  }
  if (eventLetter == 'lalt') {
    leftAltKey.classList.add('active');
  }
  if (eventLetter == 'ralt') {
    rightAltKey.classList.add('active');
  }
  if (eventLetter == 'ctrl') {
    leftCtrlKey.classList.add('active');
  }
  if (eventLetter == 'ctrl_text') {
    rightCtrlKey.classList.add('active');
  }
  if (eventLetter == 'win') {
    leftStartKey.classList.add('active');
  }
  if (eventLetter == 'Back' || eventLetter == 'space') {
    backspaceKey.classList.add('active');
  }
  if (eventLetter === 'del') {
    delKey.classList.add('active');
  }
  if (eventLetter == 'enter') {
    enterKey.classList.add('active');
  }
  if (eventLetter == 'arrow_down') {
    arrowDownKey.classList.add('active');
    textAreaTag.setRangeText('↓', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
  }
  if (eventLetter == 'arrow_left') {
    arrowLeftKey.classList.add('active');
    textAreaTag.setRangeText('←', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
  }
  if (eventLetter == 'arrow_right') {
    arrowRightKey.classList.add('active');
    textAreaTag.setRangeText('→', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
  }
  if (eventLetter == 'arrow_up') {
    arrowUpKey.classList.add('active');
    textAreaTag.setRangeText('↑', textAreaTag.selectionStart, textAreaTag.selectionEnd, "end");
  }
  if (eventLetter == 192) {
    backquoteKey.classList.add('active');
  }
  else if (eventLetter === 'ShiftLeft' && e.code === 'AltLeft') {
    switchLang();
  }
}

window.addEventListener('mousedown', onclickKeyLightning);


const mouseUpKeyLightning = function (eventLetter) {
  for (let i = 0; i < keys.length; i++) {

    setTimeout(() => {
      keys[i].classList.remove('remove')
    }, 200);

    if (eventLetter == keys[i].getAttribute('keyname') || eventLetter == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (eventLetter == 'spacebar') {
      spacebarKey.classList.remove('active');
      spacebarKey.classList.add('remove');
    }
    if (eventLetter == 'shift') {
      rightShiftKey.classList.remove('active');
      rightShiftKey.classList.remove('remove');
      leftCtrlKey.classList.remove('active');
      leftCtrlKey.classList.remove('remove');
    }
    if (eventLetter == 'shift2') {
      leftShiftKey.classList.remove('active');
      rightShiftKey.classList.add('remove');
      rightShiftKey.classList.remove('active');
    }
    if (eventLetter == 'lalt') {
      rightAltKey.classList.remove('active');
      rightAltKey.classList.remove('remove');
      leftAltKey.classList.remove('active');
      leftAltKey.classList.add('remove');
    }
    if (eventLetter == 'ralt') {
      leftAltKey.classList.remove('active');
      leftAltKey.classList.remove('remove');
      rightAltKey.classList.remove('active');
      rightAltKey.classList.add('remove');
    }
    if (eventLetter == 'ctrl') {
      rightCtrlKey.classList.remove('active');
      rightCtrlKey.classList.remove('remove');
    }
    if (eventLetter == 'ctrl_text') {
      rightCtrlKey.classList.remove('active');
      rightCtrlKey.classList.add('remove');
    }
    if (eventLetter == 'win') {
      leftStartKey.classList.remove('active');
      leftStartKey.classList.add('remove');
    }
    if (eventLetter == 'Back' || eventLetter == 'space') {
      backspaceKey.classList.remove('active');
      backspaceKey.classList.add('remove');
    }
    if (eventLetter == 'del') {
      delKey.classList.remove('active');
      delKey.classList.add('remove');
    }
    if (eventLetter == 'enter') {
    }
    if (eventLetter == 'arrow_down') {
      arrowDownKey.classList.remove('active');
      arrowDownKey.classList.add('remove');
    }
    if (eventLetter == 'arrow_left') {
      arrowLeftKey.classList.remove('active');
      arrowLeftKey.classList.add('remove');
    }
    if (eventLetter == 'arrow_right') {
      arrowRightKey.classList.remove('active');
      arrowRightKey.classList.add('remove');
    }
    if (eventLetter == 'arrow_up') {
      arrowUpKey.classList.remove('active');
      arrowUpKey.classList.add('remove');
    }
    if (eventLetter == 192) {
      backquoteKey.classList.remove('active');
      backquoteKey.classList.add('remove');
      e.preventDefault();
    }
  }
};

window.addEventListener('mouseup', mouseUpKeyLightning);







