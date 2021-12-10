function alerFirstnameValues(params) {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
}
function alertSecondNameValues(params) {
    console.log(secondNameEl.value);
    console.log(secondNameEl.className);
}
function alertAdressValues(params) {
    console.log(adressEl.value);
    console.log(adressEl.className);

}
function alertCityValues(params) {
    console.log(cityEl.value);
    console.log(cityEl.className);
}
function consoleAlerts(params) {
    console.log(params.value);
    console.log(params.className);
}
function alertValue() {
    window.alert('1');
    window.alert('2');
    window.alert('3');
}

var hobbyId = 'hobby';
var hobbyEl = document.getElementById(hobbyId);
var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
consoleAlerts(firstNameEl);
//alerFirstnameValues();
var secondNameId = 'secondName';
var secondNameEl = document.getElementById(secondNameId);
//lertSecondNameValues();
consoleAlerts(secondNameEl);
var adressId = 'adress';
var adressEl = document.getElementById(adressId);
consoleAlerts(adressEl);
//alertAdressValues();
var cityId = 'city';
var cityEl = document.getElementById(cityId);
consoleAlerts(cityEl);
//alertCityValues();
var screenId = "screen";
var screenEl = document.getElementById(screenId);
var popitkaId = "popitka";
var popitkaEl = document.getElementById(popitkaId);

//alertValue();

firstNameEl.value = "Liza";
secondNameEl.value = "Popova";
adressEl.value = 'Grodno';
//secondNameEl.className = "temp";
secondNameEl.className = 'default-input error-input';
secondNameEl.title = "Wrong name";
screenEl.src = "space4.jpg";
screenEl.title = "Space Dream";
cityEl.value = "Kiev";
screenshotEl = "4toto est`?";
popitkaEl.innerHTML = '<ul id="technologies-list"><li>Keep<li>Calm<li>And<li>Make<li>Code</li></ul>';


// window.alert(firstNameEl.className);
// window.alert(secondNameEl.className);
// window.alert(adressEl.className);
// window.alert(cityEl.value);
// window.alert(hobbyEl.value);
// window.alert(screenEl.innerHTML);
// window.alert(screenEl.alt);
// window.alert(screenEl.src);
function setMyNameToAllInputs(inputType1) {
    var inputType1Id = 'inputType1' + inputType1;
    var inputType1El = document.getElementById(inputType1Id);
    inputType1El.value = "Ekaterina";
    
}
setMyNameToAllInputs(inputType1);
setMyNameToAllInputs(inputType2);

// var inputType1Id = 'inputType1';
// var inputType1El = document.getElementById(inputType1Id);
// inputType1El.value = "Ekaterina";

// var inputType2Id = 'inputType2';
// var inputType2El = document.getElementById(inputType2Id);
// inputType2El.value = "Ekaterina";

// var inputType3Id = 'inputType3';
// var inputType3El = document.getElementById(inputType3Id);
// inputType3El.value = "Ekaterina";

// var inputType1Id = 'inputType1';
// var inputType1El = document.getElementById(inputType1Id);
// inputType1El.value = "Great";

// var inputType2Id = 'inputType2';
// var inputType2El = document.getElementById(inputType2Id);
// inputType2El.value = "Great";

// var inputType3Id = 'inputType3';
// var inputType3El = document.getElementById(inputType3Id);
// inputType3El.value = "Great";
// var inputType1Id = 'inputType1';
// var inputType1El = document.getElementById(inputType1Id);
// inputType1El.value = "Ekaterina";

// var inputType2Id = 'inputType2';
// var inputType2El = document.getElementById(inputType2Id);
// inputType2El.value = "Ekaterina";

// var inputType3Id = 'inputType3';
// var inputType3El = document.getElementById(inputType3Id);
// inputType3El.value = "Ekaterina";