"use strict";

let open = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}


// let shop = [];
let storedCreatedObj = [];

function salmone(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieTotal = 0;
  this.calc = [];
  this.cookie = [];
  // this.total = [];
  // this.newRow = [];
  // this.hourlySales = [];
  console.log(this);
  
  storedCreatedObj.push(this);
}




salmone.prototype.cust = function () {

  for (let i = 0; i < open.length; i++) {
    this.calc.push(random(this.min, this.max));


  }

}

salmone.prototype.calco = function () {
  for (let i = 0; i < open.length; i++) {

    this.cookie.push(Math.floor(this.avg * this.calc[i]));

    this.cookieTotal += this.cookie[i];

  }

}

let Seattle = new salmone('Seattle', 23, 65, 6.3, 0);
let Tokyo = new salmone('Tokyo', 3, 24, 1.2, 0);
let Dubai = new salmone('Dubai', 11, 38, 3.7, 0);
let Paris = new salmone('PAris', 20, 38, 2.3, 0);
let Lima = new salmone('Lima', 2, 16, 4.6, 0);

console.log(storedCreatedObj);

// Seattle.calco();



let parent = document.getElementById('creatTable');
console.log(parent);
let tableEl = document.createElement('table');
parent.appendChild(tableEl);


function makeheader() {

  let headingRow = document.createElement('tr');
  tableEl.appendChild(headingRow);


  let nameData = document.createElement('th');
  headingRow.appendChild(nameData);
  nameData.textContent = 'name';

  for (let i = 0; i < open.length; i++) {
    let thlement = document.createElement('th');
    headingRow.appendChild(thlement);
    thlement.textContent = open[i];

  }
  let thlement2 = document.createElement('th');
  headingRow.appendChild(thlement2);
  thlement2.textContent = 'Daily total';

}





salmone.prototype.render = function () {
  let drow = document.createElement('tr');
  tableEl.appendChild(drow);


  let namdata = document.createElement('td');
  drow.appendChild(namdata);
  namdata.textContent = this.name;


  for (let i = 0; i < open.length; i++) {
    let tdel = document.createElement('td');
    drow.appendChild(tdel);
    tdel.textContent = this.cookie[i];

  }

  let totalday = document.createElement('td');
  drow.appendChild(totalday);
  totalday.textContent = this.cookieTotal;
}
makeheader();

for (let i = 0; i < storedCreatedObj.length; i++) {
  storedCreatedObj[i].cust();
  storedCreatedObj[i].calco();
  storedCreatedObj[i].render();


}
makefooter();

function makefooter() {
  let footerRow = document.createElement('tr');

  tableEl.appendChild(footerRow);
  let footerht = document.createElement('td');
  footerRow.appendChild(footerht);
  footerht.textContent = 'Total';


  let megaTotal = 0;
  for (let i = 0; i < open.length; i++) {
    let sum = 0;
    for (var j = 0; j < storedCreatedObj.length; j++) {
      sum += storedCreatedObj[j].cookie[i];
    }

    megaTotal += sum;

    console.log(megaTotal);

    let tdEl = document.createElement('td');
    footerRow.appendChild(tdEl);
    tdEl.textContent = sum;

  }
  let finaltd = document.createElement('td');
  footerRow.appendChild(finaltd);
  finaltd.textContent = megaTotal;
}


let formWork = document.getElementById('SalmonForm');
formWork.addEventListener('submit', handleSubmit);
function handleSubmit(event) {

  event.preventDefault();

  console.log(event);
  let location = event.target.namefield.value;
  console.log(location);

  let mini = parseInt(event.target.mincust.value);
  let max = parseInt(event.target.maxcust.value)
  console.log(max);


  let avg = parseFloat(event.target.avgCookies.value)

  console.log(avg);

  let newShop = new salmone(location, mini, max, avg,);

  newShop.cust();
  newShop.calco();
  let deleted = tableEl.rows.length - 1; 
  tableEl.deleteRow(deleted)
  newShop.render();
  makefooter();
}


// Seattle.cust();
// Seattle.calco();
// Tokyo.cust();
// Tokyo.calco();
// Dubai.cust();
// Dubai.calco();
// Paris.cust();
// Paris.calco();
// Lima.cust();
// Lima.calco();