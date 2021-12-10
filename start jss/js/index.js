var hobbyId = 'hobby';
var firstNameId = 'first-name';
var secondNameId = 'secondName';
var adressId = 'adress';
var cityId = 'city';
var screenId = "screen";
var popitkaId = "popitka";
var firstNameEl = document.getElementById(firstNameId);
var secondNameEl = document.getElementById(secondNameId);
var adressEl = document.getElementById(adressId);
var cityEl = document.getElementById(cityId);
var hobbyEl = document.getElementById(hobbyId);
var screenEl = document.getElementById(screenId);
var popitkaEl = document.getElementById(popitkaId);

function alertValue() {
    window.alert('1');
    window.alert('2');
    window.alert('3');
}

alertValue();



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
