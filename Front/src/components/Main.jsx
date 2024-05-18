import React, { useState } from "react";
import axios from "axios";
export default function Main() {
  const mystyle = {
    border: "1px solid",
    borderradius: "4px",
  };
  const [name, setName] = useState(""); //name
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  console.log("name: " + name, name1, name2);
  console.log("data: " + data[0]);
  const getData = async () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log("Backwnd response: " + JSON.stringify(res.data));
        var stringifyData = JSON.stringify(res.data);
        var parseData = JSON.parse(stringifyData);
        console.log("Parse data", parseData);
        setName(parseData.data[0].name);
        setName1(parseData.data[1].name);
        setName2(parseData.data[2].name);
        setEmail(parseData.data[0].email);
        setEmail1(parseData.data[1].email);
        setEmail2(parseData.data[2].email);
        setData(parseData.data);
        setStatus(false);
      })
      .catch((err) => {
        console.log("Backend errors", err);
      });
  };
  return (
    <div>
      <h1>Welocome to</h1>{" "}
      {name == "" ? (
        <h1>All students</h1>
      ) : (
        <table style={mystyle}>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button>Delete</button>
                  <button>Update</button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
      {status ? (
        <button onClick={getData}>Get Data</button>
      ) : (
        <button onClick={getData} style={{ cursor: "not-allowed" }} disabled>
          Get Data
        </button>
      )}
    </div>
  );
}
