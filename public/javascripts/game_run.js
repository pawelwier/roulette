var field0 = {
    val : 0,
    col: 'green',
};

var field1 = {
    val : 1,
    col: 'red',
};

var field3 = {
    val : 3,
    col: 'red',
};

var field5 = {
    val : 5,
    col: 'red',
};

var field1 = {
    val : 1,
    col: 'red',
};

var field1 = {
    val : 1,
    col: 'red',
};

var field7 = {
    val : 7,
    col: 'red',
};

var field9 = {
    val : 9,
    col: 'red',
};

var field12 = {
    val : 12,
    col: 'red',
};

var field14 = {
    val : 14,
    col: 'red',
};

var field2 = {
    val : 2,
    col: 'black',
};

var field4 = {
    val : 4,
    col: 'black',
};
var field6 = {
    val : 6,
    col: 'black',
};
var field8 = {
    val : 8,
    col: 'black',
};
var field10 = {
    val : 10,
    col: 'black',
};
var field11 = {
    val : 11,
    col: 'black',
};
var field13 = {
    val : 13,
    col: 'black',
};

var field15 = {
    val : 15,
    col: 'black',
};

var fieldArr = [];

fieldArr.push(field0);
fieldArr.push(field1);
fieldArr.push(field2);
fieldArr.push(field3);
fieldArr.push(field4);
fieldArr.push(field5);
fieldArr.push(field6);
fieldArr.push(field7);
fieldArr.push(field8);
fieldArr.push(field9);
fieldArr.push(field10);
fieldArr.push(field11);
fieldArr.push(field12);
fieldArr.push(field13);
fieldArr.push(field14);
fieldArr.push(field15);

var rollResult = '';

document.getElementById('roll').addEventListener('click', () => {
    var credit = parseInt(document.getElementById('credit').textContent);
    rollResult = Math.floor(Math.random() * 16);
    var rollColorDisplay = getRollDetails(rollResult);
    console.log(rollResult);
    document.getElementById('printRoll').textContent = rollResult + ", " + rollColorDisplay;

    betOnColor(rollColorDisplay, credit);
    betOnEven(credit);

    document.getElementById('colorInput').value = 'empty';
    document.getElementById('evenInput').value = 'empty';
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
        console.log("ZGADLES!");

        document.getElementById('credit').textContent = (sum + 10);
    } else {
        document.getElementById('credit').textContent = (sum - 10);
    }
}

function betOnEven (sum) {
    var rollIsEven = (parseInt(rollResult) % 2 == 0);

    console.log('rollIsEven: ' + rollIsEven);
    console.log('doc: ' + document.getElementById('evenInput').value);
    
    if (document.getElementById('evenInput').value == 'empty') return;
    if (document.getElementById('evenInput').value == rollIsEven.toString()) {
        console.log("ZGADLES!");

        document.getElementById('credit').textContent = (sum + 10);
    } else {
        document.getElementById('credit').textContent = (sum - 10);
    }
}