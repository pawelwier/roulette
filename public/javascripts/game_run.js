function Field (val, col) {
        this.val = val;
        this.col = col;
    };

var fieldArr = [field0 = new Field(), field1 = new Field(), field2 = new Field(), field3 = new Field(), field4 = new Field(), field5 = new Field(),
field6 = new Field(), field7 = new Field(), field8 = new Field(), field9 = new Field(), field10 = new Field(), field11 = new Field(), 
field12 = new Field(), field13 = new Field(), field14 = new Field(), field15 = new Field(), field16 = new Field(), field17 = new Field(),
field18 = new Field(), field19 = new Field(), field20 = new Field(), field21 = new Field(), field22 = new Field(), field23 = new Field(),
field24 = new Field(), field25 = new Field(), field26 = new Field(), field27 = new Field(), field28 = new Field(), field29 = new Field(),
field30 = new Field(), field31 = new Field(), field32 = new Field(), field33 = new Field(), field34 = new Field(), field35 = new Field(), 
field36 = new Field()];

var redFields = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

for (var i = 0; i < fieldArr.length; i++) {
    fieldArr[i].val = i;
    fieldArr[i].col = i == 0 ? "green" : (redFields.includes(i) ? "red" : "black");
}

var boardRow0 = [];
var boardRow1 = [];
var boardRow2 = [];

for (var i = 1; i < fieldArr.length; i++) {
    if ( i % 3 == 0) boardRow0.push(fieldArr[i].val);
    if ( i % 3 == 2) boardRow1.push(fieldArr[i].val);
    if ( i % 3 == 1) boardRow2.push(fieldArr[i].val);
};

document.getElementById('boardRow0').textContent = boardRow0;
document.getElementById('boardRow1').textContent = boardRow1;
document.getElementById('boardRow2').textContent = boardRow2;

var rollResult, rollColorDisplay;
var startCash = 100;
document.getElementById('credit').textContent = startCash;
var credit = parseInt(document.getElementById('credit').textContent);

document.getElementById('roll').addEventListener('click', () => {
    
    rollResult = Math.floor(Math.random() * 37);
    rollColorDisplay = getRollDetails(rollResult);
    document.getElementById('printRoll').textContent = rollResult + ", " + rollColorDisplay;

    placeBets(rollColorDisplay);

    document.getElementById('credit').textContent = credit;
});

function getRollDetails(x) {
    var colorDisplay = '';
    for(var i = 0; i < fieldArr.length; i++) {
        if (fieldArr[i].val == x) {
            colorDisplay = fieldArr[i].col == 'red' ? 'Czerwony' : (fieldArr[i].col == 'black' ? 'Czarny' : ' - ');
        }
    }
    return colorDisplay;
}

function checkIfCredit(sum1, sum2, sum3) {
    if(sum1 > credit || sum2 > credit || sum3 > credit) {
        alert("Nie masz tyle $");
        document.getElementById('credit').textContent = credit;
        return false;
    }
    return true;
}

function betOnColor(color, sum) {
    if (document.getElementById('colorInput').value == 'empty') return;
    if (document.getElementById('colorInput').value == color) {
       credit += sum;
    } else {
       credit -= sum;
    }
}

function betOnEven (sum) {
    var rollIsEven = (parseInt(rollResult) % 2 == 0);

    if (document.getElementById('evenInput').value == 'empty') return;
    if (document.getElementById('evenInput').value == rollIsEven.toString()) {
       credit += sum;
    } else {
      credit -= sum;
    }
}

function betOnDozen(sum) {
    if (document.getElementById('dozenInput').value == 'empty') return;
    if ((document.getElementById('dozenInput').value == '0' && rollResult > 0 && rollResult <= 12) ||
    (document.getElementById('dozenInput').value == '1' && rollResult > 12 && rollResult <= 24) ||
    (document.getElementById('dozenInput').value == '2' && rollResult > 25)) {
        credit += (sum * 2);
    } else {
        credit -= sum;
    }
}

function placeBets(color) {
    var colorBid = parseInt(document.getElementById('colorBid').value);
    var evenBid = parseInt(document.getElementById('evenBid').value);
    var dozenBid = parseInt(document.getElementById('dozenBid').value);

    if (checkIfCredit(colorBid, evenBid, dozenBid)) {
        if (colorBid) betOnColor(color, colorBid);
        if (evenBid) betOnEven(evenBid);
        if (dozenBid) betOnDozen(dozenBid);
    }
}