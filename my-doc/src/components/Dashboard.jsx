import React from 'react';
import { useState,useEffect } from 'react';
import '../css/dashboard.css';
import {Chart} from 'chart.js'
import {Button,Spinner} from 'react-bootstrap'
function Dashboard() {
    let [isLoading, setIsLoading] = useState(false);
    const toggleLoading = () =>{
        setIsLoading(!isLoading);
    }
    var refresh = true;
    var x = document.getElementById("demo");
    var STATE = 'TT';
    var state = "India";
    var s = {
      "Andhra Pradesh": "AP",
      "Arunanchal Pradesh": "AR",
      "Assam": "AS",
      "Bihar": "BR",
      "Chattisgarh": "CT",
      "Goa": "GA",
      "Gujrat": "GJ",
      "Haryana": "HR",
      "Himachal Pradesh": "HP",
      "Jharkhand": "JH",
      "Karnataka": "KA",
      "Kerela": "KL",
      "Madhya Pradesh": "MP",
      "Maharashtra": "MH",
      "Manipur": "MN",
      "Meghalaya": "ML",
      "Mizoram": "MZ",
      "Nagaland": "NL",
      "Odisha": "OR",
      "Punjab": "PB",
      "Rajasthan": "RJ",
      "Sikkim": "SK",
      "Tamil Nadu": "TN",
      "Telangana": "TG",
      "Tripura": "TR",
      "Uttar Pradesh": "UP",
      "Uttarakhand": "UT",
      "West Bengal": "WB",
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
    };

    async function showPosition(position) {
      let location_api = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude + "&localityLanguage=en";
      fetch(location_api).then(res => res.json()).then(data => {
        state = data.principalSubdivision;
        console.log(s[state]);
        STATE = s[state];
        var pin = document.getElementById('label2');
        pin.innerHTML += state;
        var w = document.getElementById("Graph");
        var x = document.getElementById("yo");
        var z = document.getElementById("PieChart");
        if (x.style.display === "none") {
          w.style.display = "inline-block";
          x.style.display = "inline-block";
          z.style.display = "none";
          document.getElementById('table-container').style.display = "block";
        }
        var l = document.getElementById("label2");
        l.innerHTML = `District wise COVID19 Statistics : ${state}`;
        // var b = document.getElementById("buttons");
        // b.innerHTML = ``;
        var si = document.getElementById("stateInfo");
        si.innerHTML = `Based on Your Coordinates, Your State is: ${state}`
        trial();
        getJSON();
        refresh = false;
        pieChart();
        chartIt();
        buildTable();
      });
    }
    async function trial() {
      const response = await fetch('https://api.covid19india.org/v4/data.json');
      var table = document.getElementById('myTable')
      const data = await response.json();
      for (var i in data[STATE].districts) {
        var row = `<tr>
                          <td>${i}</td>
                          <td>${data[STATE].districts[i].total.confirmed}</td>
                          <td>${data[STATE].districts[i].total.recovered}</td>
                          <td>${data[STATE].districts[i].total.deceased}</td>
                   </tr>`
        table.innerHTML += row
      }
    }
    var banner = {};
    const table_url = 'https://corona.lmao.ninja/v2/countries';
    async function pieChart() {
      const response = await fetch(table_url);
      const data = await response.json();
      data.forEach(elt => {
        if (elt.country === 'India') {

          const data = {
            datasets: [{
              data: [elt.recovered, elt.active, elt.deaths],
              backgroundColor: ['#91DA43', '#FF8E01', '#DC3546']
            }],
            labels: [
              'Recovered',
              'Active',
              'Deceased'
            ]
          };
          const ctx = document.getElementById('chartPie').getContext('2d');
          var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
          });
        }
      });
    }

    const api_url = 'https://api.covid19india.org/states_daily.json';

    const getJSON = async () => {
      const xs = [];
      const ys = [];
      const rxs = [];
      const rys = [];
      const response = await fetch(api_url);
      const data = await response.json();
      data.states_daily.forEach(elt => {

        if (elt.status == "Confirmed") {
          xs.push(elt.date);
          ys.push(elt[STATE.toLowerCase()]);
        }
        else if (elt.status == "Recovered") {
          rxs.push(elt.date);
          rys.push(elt[STATE.toLowerCase()]);
        }
      });

      return { xs, ys, rys };
    };

    const chartIt = async () => {
      const data = await getJSON();
      const ctx = document.getElementById('chart').getContext('2d');
      var t = document.getElementById("subtitle-chart");
      t.innerHTML = `Date Wise New Cases : ${state}`;
      console.log(state);
      const myChart = new Chart(ctx, {
        type: 'line', fill: false,
        data: {
          labels: data.xs,
          datasets: [{
            label: 'Daily Confirmed COVID19 Cases ' + state,
            data: data.ys,
            pointRadius: 0,
            lineTension: 0,
            backgroundColor: 'rgba(220,53,70, 0.2)',
            borderColor: 'rgba(220,53,70, 1)',
            borderWidth: 1,
            responsive: true,
            mainAspectRatio: false,
            display: false

          },
          {
            label: 'Daily Recovered COVID19 Cases ' + state,
            data: data.rys,
            pointRadius: 0,
            lineTension: 0,
            backgroundColor: 'rgba(145,218,67, 0.2)',
            borderColor: 'rgba(145,218,67, 1)',
            borderWidth: 1,
            responsive: true,
            mainAspectRatio: false,
            type: "line"
          }]

        }, options: {
          scales: {
            xAxes: [{
              ticks: {
                display: false //this will remove only the label
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }],
            yAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                color: "rbga(0,0,0,0)"
              }
            }]
          }
        }
      });
    };

    const buildTable = async () => {
      const response = await fetch('https://api.covid19india.org/v4/data.json');
      const response2 = await fetch("https://corona.lmao.ninja/v2/countries");
      var data2 = await response2.json();
      data2.forEach(elt => {
        if (elt.country == 'India') { data2 = elt; return; }
      })
      var data = await response.json();
      console.log(data[STATE].total);
      var pin1 = document.getElementById('active');
      var pin2 = document.getElementById('recovered');
      var pin3 = document.getElementById('confirmed');
      var pin4 = document.getElementById('deceased');
      var pin5 = document.getElementById('title-element');
      var d1 = `  Active:<br>${data[STATE].total.confirmed - data[STATE].total.recovered - data[STATE].total.deceased}`
      var d2 = `  Recovered:<br>${data[STATE].total.recovered}`
      var d3 = `  Confirmed:<br>${data[STATE].total.confirmed}`
      var d4 = `  Deceased:<br>${data[STATE].total.deceased}`
      var f1, f2, f3, f4;
      if (STATE == 'TT') {
        f1 = `<br><p>[${data2.todayCases - data2.todayRecovered - data2.todayDeaths}]</p>`;
        f2 = `<br><p>[+${data2.todayRecovered}]</p>`;
        f3 = `<br><p>[+${data2.todayCases}]</p>`;
        f4 = `<br><p>[+${data2.todayDeaths}]</p>`;
      }
      else {
        f1 = `<br><p>N/A</p>`;
        f2 = `<br><p>N/A</p> `;
        f3 = `<br><p>N/A</p> `;
        f4 = `<br><p>N/A</p> `;
      }
      console.log(data2);
      var pin6 = document.getElementById("label");
      pin6.innerHTML = `COVID19 Dashboard of ${state}`
      let updatedFormatted = new Date(data2.updated).toLocaleString();
      var d5 = `<p id="title-element">Last Updated On:${updatedFormatted}`;
      pin1.innerHTML = d1 + f1;
      pin2.innerHTML = d2 + f2;
      pin3.innerHTML = d3 + f3;
      pin4.innerHTML = d4 + f4;
      pin5.innerHTML = d5;
    };

    useEffect(() => {
        pieChart();
        getJSON();
        chartIt();
        buildTable();
        // toggleLoading();
    }, [])
    // useEffect(() => {
    //     toggleLoading();
    // }, [state])

    // console.log(isLoading, 'loading');
    return (
    <section id="covid-19-dashboard">
        <div id="card-container">
          <div id="confirmed" className="covid-card">Confirmed:</div>
          <div id="recovered" className="covid-card">Recovered:</div>
          <div id="active" className="covid-card">Active:</div>
          <div id="deceased" className="covid-card">Deceased:</div>
        </div>
        <p id="label">COVID19 Dashboard of India</p>
        <p id="title-element">Last Updated On:</p>
        <section id="diagrams">
          <div id="PieChart">
            <canvas id="chartPie" width="100" height="50"></canvas><br />
            <p id="subtitle-piechart">Case Study : India</p>
          </div>
          <div id="Graph">
            <canvas id="chart" width="100" height="50"></canvas>
            <p id="subtitle-chart"></p>
          </div>
          <div id="table-container">
            <div id="table">
              <table id="table-heading">
                  <tbody>
                        <tr className="bg-info">
                        <th>District </th>
                        <th id="confirmed">Confirmed</th>
                        <th id="recovered">Recovered</th>
                        <th id="deceased">Deceased</th>
                        </tr>
                </tbody>
              </table>
              <div id="yo" style={{display:"none"}}>
                <table>
                  <tbody id="myTable"></tbody>
                </table>
              </div>
            </div>
          </div>
          <p id="label2"></p>
        </section>
        <br />
        <p id="stateInfo"></p>
        {/* <div id="buttons">
          <button onClick={getLocation} id="covid-bttn">Get Data of your state</button>
        </div> */}
        <p id="demo"></p>
        <div className="text-center">
        { isLoading? 
            <Button variant="primary" disabled> <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> Loading</Button>:
            <button className='btn btn-primary' onClick={getLocation}>Get data of your state</button>                
        }
        </div>

    </section>
    )
}

export default Dashboard