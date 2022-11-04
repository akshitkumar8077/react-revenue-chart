import "./App.css";
import Header from "./Header";
import Chartline from "./Chartline";
import React, { useEffect, useState } from "react";
const REVENUE_API_URL = `http://fetest.pangeatech.net/data`;

function App() {
  const [rdata, setRData] = useState([]);
  useEffect(() => {
    const fetchRevenue = async () => {
      await fetch(REVENUE_API_URL)
        .then((res) => res.json())
        .then((json) => {
          setRData(json);
        });
    };
    fetchRevenue();
  }, []);
  return (
    <div className="ui center">
      <Header />
      <Chartline />
      <span>
        <select id="ddMonth" className="sel">
          <option value="All">Months</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
        </select>
        <select id="ddposting_period" className="sel">
          <option value="All">Posting_Period</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
        </select>
      </span>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Line Of Business</th>
              <th>Revenue Type</th>
              <th>Product</th>
              <th colSpan={2}>Posting Period</th>
              <th>ACV</th>
              <th>TCV</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {rdata.map((item) => (
              <tr key={item.id}>
                <td>{item.S_no}</td>
                <td>{item.line_of_business}</td>
                <td>{item.revenue_type}</td>
                <td>{item.product}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>${item.acv}K</td>

                <td>${item.tcv}K</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
