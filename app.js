"use strict";

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


function random(min,max)
{
  return  Math.floor(Math.random() * (max - min + 1)) + min;

}


let shop = [];
let storedCreatedObj = [];

function salmonecookies(name,minCust, maxCust, avgSale) {
this.name=name;
this.minCust=minCust;
this.maxCust=maxCust;
this.avgSale=avgSale;
this.cookieTotal=0;
this.calccust = [];
this.cookiesech=[];
this.total=[];
this.newrow=[];
this. hourlySales= [];

storedCreatedObj.push(this);

}




salmonecookies.prototype.cust= function(){
  
  for(let i = 0; i < hours.length; i++){
    this.calccust.push(random(this.minCust,this.maxCust));
    
    
  }
  
}

salmonecookies.prototype.calccookies=function(){
  for(let i = 0; i < hours.length; i++){
    
    this.cookiesech.push(Math.floor(this.avgSale*this.calccust[i]));
  
    this.cookieTotal += this.cookiesech[i];

  }
}

let Seattle = new salmonecookies ('Seattle',23,65,6.3,0);
let Tokyo =new salmonecookies('Tokyo',3,24,1.2,0);
  let Dubai =new salmonecookies('Dubai',11,38,3.7,0);
  let Paris =new salmonecookies('PAris',20,38,2.3,0);
  let Lima =new salmonecookies('Lima',2,16,4.6,0);  

  console.log( storedCreatedObj);




let parent = document.getElementById('creatTable');
console.log(parent);
let tableEl = document.createElement('table');
parent.appendChild(tableEl);

 
function makeheader (){

  let headingRow = document.createElement('tr');
 tableEl.appendChild(headingRow);


 let nameData = document.createElement('th');
 headingRow.appendChild(nameData);
 nameData.textContent='name';
 
 for (let i = 0; i < hours.length; i++) {
let thlement = document.createElement('th');
headingRow.appendChild(thlement);  
thlement.textContent= hours[i]; 

 }
 let thlement2 = document.createElement('th');
headingRow.appendChild(thlement2);  
thlement2.textContent= 'Daily total'; 

}

makeheader();



salmonecookies.prototype.render =function(){
let drow = document.createElement('tr');
tableEl.appendChild(drow);


let namdata =document.createElement('td');
drow.appendChild(namdata);
namdata.textContent=this.name;


for (let i = 0; i < hours.length; i++) {
  let tdel =document.createElement('td');
  drow.appendChild(tdel); 
tdel.textContent=this.cookiesech[i];

}

let totalday =document.createElement('td');
drow.appendChild(totalday);
totalday.textContent=this.cookieTotal;
}

 
for(let i = 0; i < storedCreatedObj.length; i++){
  storedCreatedObj[i].cust();  
  storedCreatedObj[i].calccookies();
  storedCreatedObj[i].render();
  
}
console.log();


let footerrow =document.createElement('tr');
function makefooter(){

tableEl.appendChild(footerrow);
let footerht =document.createElement('td');
footerrow.appendChild(footerht);
footerht.textContent='Total';


    let megaTotal = 0;
for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (var j = 0; j < storedCreatedObj.length; j++) {
      sum += storedCreatedObj[j].cookiesech[i];
    }

    megaTotal += sum;

    console.log(sum);
     
    let tdEl = document.createElement('td');
    footerrow.appendChild(tdEl);
    tdEl.textContent = sum;
  
  }
  let finaltd = document.createElement('td');
  footerrow.appendChild(finaltd);
  finaltd.textContent=megaTotal;
}
makefooter();


let formWork = document.getElementById('store');
formWork.addEventListener('submit',handleSubmit);
function handleSubmit(event){
  
  event.preventDefault();
  
  console.log(event);
  let location =event.target.location.value;
console.log(location);

  let mini = parseInt(event.target.mini.value);
  console.log(mini);
  let maxi = parseInt(event.target.maxi.value)
  console.log(maxi);


  let avg =parseFloat(event.target.Avg.value)
 
  console.log(avg);

  let newobj = new  salmonecookies( location,mini,maxi,avg,);
  
 newobj.cust();
 newobj.calccookies();
newobj.render();
footerrow.textContent='';
makefooter();
}

