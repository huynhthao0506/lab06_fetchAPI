const API = "https://corona.lmao.ninja/v2/countries";

//declare function callAPI
function callAPI() {
    //call API
    fetch(API)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        html=`<tr>
        <th>Quốc gia</th>
        <th>Số ca nhiễm</th>
        <th>Số ca nhiễm hôm nay</th>
        <th>Số ca chết</th>
        <th>Số ca chết hôm nay</th>
        <th>Số ca hồi phục</th>
        <th>Đang đièu trị</th>
    </tr>`
    var table2 = document.querySelector("#tb2");
    data.map(function(country){
        return html+= `<tr>
        <td id="country"><span>${country.country}</span><img style="width:40px;" src="${country.countryInfo.flag}" /></td>
        <td id="cases">${country.cases}</td>
        <td id="todayCases">${country.todayCases}</td>
        <td id="deaths">${country.deaths}</td>
        <td id="todayDeaths">${country.todayDeaths}</td>
        <td id="todayRecovered">${country.todayRecovered}</td>
        <td id="active">${country.active}</td>
        </tr>`
    })
    table2.innerHTML=html;
    })
}

//run function call API
callAPI();