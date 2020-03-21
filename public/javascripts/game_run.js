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

for (var i = 0; i < 37; i++) {
    fieldArr[i].val = i;
    fieldArr[i].col = i == 0 ? "green" : (redFields.includes(i) ? "red" : "black");
}


var rollResult = '';
var startCash = 100;
document.getElementById('credit').textContent = startCash;
var credit = parseInt(document.getElementById('credit').textContent);

// disableInputsWhenEmpty();

document.getElementById('roll').addEventListener('click', () => {

    var colorBid = parseInt(document.getElementById('colorBid').value);
    var evenBid = parseInt(document.getElementById('evenBid').value);
    
    rollResult = Math.floor(Math.random() * 16);
    var rollColorDisplay = getRollDetails(rollResult);
    document.getElementById('printRoll').textContent = rollResult + ", " + rollColorDisplay;

    if (colorBid) betOnColor(rollColorDisplay, colorBid);
    if (evenBid) betOnEven(evenBid);

    document.getElementById('credit').textContent = credit;

    // document.getElementById('colorInput').value = 'empty';
    // document.getElementById('evenInput').value = 'empty';
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

    console.log('rollIsEven: ' + rollIsEven);
    console.log('doc: ' + document.getElementById('evenInput').value);
    
    if (document.getElementById('evenInput').value == 'empty') return;
    if (document.getElementById('evenInput').value == rollIsEven.toString()) {
       credit += sum;
    } else {
      credit -= sum;
    }
}

// function disableInputsWhenEmpty() {
//     if (document.getElementById('colorInput').value == 'empty') document.getElementById("colorBid").disabled = true;
//     if (document.getElementById('evenInput').value == 'empty') document.getElementById("evenBid").disabled = true;
// }