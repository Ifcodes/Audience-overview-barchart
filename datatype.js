const barSelector = document.querySelector('.chart-area');

let barData = [45, 80, 95, 30, 20, 55, 100, 110, 10, 75, 65, 5];

// console.log(barData)
function render(){
  let bars = '';

  barData.forEach(dataValue=> {
    bars += `<div class="bar-cont">
        <span style="height: ${dataValue/120 * 100}%" title="Audience: ${dataValue}k"></span>
        <span style="height: ${(dataValue + 15)/150 * 100}%" title="Audience: ${dataValue + 15}k"></span>
        </div>`  
  });
  barSelector.innerHTML = bars 
}
render();