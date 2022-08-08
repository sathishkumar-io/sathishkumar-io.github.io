/* Function for Convert Long number into K, M, B */

function shortNum(x) {
       // for Billion
    return Math.abs(Number(x)) >= 1.0e+9 ?
       (Math.abs(Number(x)) / 1.0e+9).toFixed(2) + "B"
       // for Million
       :
       Math.abs(Number(x)) >= 1.0e+6 ?
       (Math.abs(Number(x)) / 1.0e+6).toFixed(2) + "M"
       // for Thousands (K)
       :
       Math.abs(Number(x)) >= 1.0e+3 ?
       (Math.abs(Number(x)) / 1.0e+3).toFixed(2) + "K"
       // Return the default value
       :
       Math.abs(Number(x));
 }
 
 /* Function for add commas to grater than 3 digits numbers */
 
 function numWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //add comma to long numbers
 }
 
 /********************************** FUNCTION END **********************************/
 
 /* World Case Counts */
 
 // Request the data
 const worldRequest = new Request('https://disease.sh/v3/covid-19/all');
 
 fetch(worldRequest)
    .then(response => response.json())
    .then(data => {
       const world_cases_count = document.querySelector('.world_cases_count');
       const world_total_cases = document.querySelector('.world_total_cases');
       const world_recover_count = document.querySelector('.world_recover_count');
       const world_total_recover = document.querySelector('.world_total_recover');
       const world_deaths_count = document.querySelector('.world_deaths_count');
       const world_total_deaths = document.querySelector('.world_total_deaths');
       const worldTodayCases = data.todayCases;
       const worldTotalCases = data.cases;
       const worldTodayRecovered = data.todayRecovered;
       const worldTotalRecovered = data.recovered;
       const WorldTodayDeaths = data.todayDeaths;
       const worldTotalDeaths = data.deaths;
 
       // Add The collected data to the Choosen Element
       world_cases_count.innerHTML = shortNum(worldTodayCases);
       world_total_cases.innerHTML = "Total: " + shortNum(worldTotalCases);
       world_recover_count.innerHTML = shortNum(worldTodayRecovered);
       world_total_recover.innerHTML = "Total: " + shortNum(worldTotalRecovered);
       world_deaths_count.innerHTML = shortNum(WorldTodayDeaths);
       world_total_deaths.innerHTML = "Total: " + shortNum(worldTotalDeaths);
    });
 
 /* Add All Countries to Select Options */
 
 // Request the data
 const selectCountryListRequest = new Request('https://disease.sh/v3/covid-19/countries');
 const select_country = document.getElementById('select_country');
 let SelectCountryList = "";
 
 fetch(selectCountryListRequest)
    .then(response => response.json())
    .then(data => {
       // Using forEach loop for Add All Countries name to Select option
       data.forEach(item => {
          const SelectListCountryName = item.country;
          const SelectListCountryInfo = item.countryInfo;
          const SelectListCountryCode = SelectListCountryInfo.iso3;
          SelectCountryList += `<option value="${SelectListCountryCode}">${SelectListCountryName}</option>`;
       });
       let defaultOption = `<option value="">Select Country</option>`;
       select_country.innerHTML = defaultOption + SelectCountryList;
 
    });
 
 /* Get Cases details by Selected Country */
 
 const selectBox = document.getElementById('select_country');
 
 selectBox.addEventListener('change', function () {
    const selectedCountryValue = document.getElementById('select_country').value;
    // Get the value of Select Box selected option value
    const optionText = selectBox.options[selectBox.selectedIndex].text;
    const select_country_name = document.querySelector('.select_country_name');
    let SelectedCountryOp = "";
 
    // Request the data
    const CountryRequest = new Request(`https://disease.sh/v3/covid-19/countries/${selectedCountryValue}`);
 
    fetch(CountryRequest)
       .then(response => response.json())
       .then(data => {
          const selectBox = document.querySelector('.selected_country');
          // Assign the value to const variables
          const selectedCountryInfo = data.countryInfo;
          const selectedCountryFlag = selectedCountryInfo.flag;
          const SelectedCountryFlagImg = `<img src="${selectedCountryFlag}" alt="${optionText}" title="${optionText}">${optionText}`;
          const selectedCountryCases = data.cases;
          const selectedCountryTodayCases = data.todayCases;
          const selectedCountryRecovers = data.recovered;
          const selectedCountryTodayRecovers = data.todayRecovered;
          const selectedCountryDeaths = data.deaths;
          const selectedCountryTodayDeaths = data.todayDeaths;
 
          SelectedCountryOp += `<div class="country">
             <div class="box">
                 <div class="box_title_cases">COVID-19 Cases</div>
                 <div class="world_cases_count">${shortNum(selectedCountryCases)}</div>
                 <div class="world_total_cases">Today: ${shortNum(selectedCountryTodayCases)}</div>
             </div>
             <div class="box">
                 <div class="box_title_recovers">Recovers</div>
                 <div class="world_recover_count">${shortNum(selectedCountryRecovers)}</div>
                 <div class="world_total_recover">Today: ${shortNum(selectedCountryTodayRecovers)}</div>
             </div>
             <div class="box">
                 <div class="box_title_deaths">Deaths</div>
                 <div class="world_deaths_count">${shortNum(selectedCountryDeaths)}</div>
                 <div class="world_total_deaths">Today: ${shortNum(selectedCountryTodayDeaths)}</div>
             </div>
         </div>`;
          selectBox.innerHTML = SelectedCountryOp;
          select_country_name.innerHTML = SelectedCountryFlagImg;
       });
 });
 
 /* Cases Table */
 
 // Request the data by sorted cases (list the countries in high cases order)
 const AllCountriesCasesRequest = new Request('https://disease.sh/v3/covid-19/countries?sort=cases');
 
 fetch(AllCountriesCasesRequest)
    .then(response => response.json())
    .then(data => {
       const countriesInfoBox = document.querySelector('.countries_info_box');
       let countryLists = "";
       data.forEach(info => {
          const countryName = info.country;
          const countryInfo = info.countryInfo;
          const countryFlag = countryInfo.flag;
          const cases = info.cases;
          countryLists += `<div class="countries_info">
         <div class="countries_info_left">
             <img src="${countryFlag}" alt="${countryName}" title="${countryName}">
             <div class="countries_name">${countryName}</div>
         </div>
         <div class="countries_cases">${numWithCommas(cases)}</div>
     </div>
     <span class="line"></span>`;
       });
       countriesInfoBox.innerHTML = countryLists;
    });