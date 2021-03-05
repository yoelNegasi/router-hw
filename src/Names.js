import React, { Component } from "react";
import Table from "./Table";

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          name: "Essey",
          age: 31,
          seniority: "4 years",
        },
        {
          name: "Nathan",
          age: 35,
          seniority: "5 years",
        },
        {
          name: "Sinod",
          age: 22,
          seniority: "2 years",
        },
        {
          name: "Heldana",
          age: 40,
          seniority: "8 years",
        },
        {
          name: "Evan",
          age: 26,
          seniority: "1 years",
        },
        {
          name: "Lulya",
          age: 40,
          seniority: "10 years",
        },
        {
          name: "Sabrina",
          age: 28,
          seniority: "4 years",
        },
        {
          name: "Fiyona",
          age: 39,
          seniority: "6 years",
        },
        {
          name: "Danait",
          age: 45,
          seniority: "12 years",
        },
        {
          name: "Frena",
          age: 20,
          seniority: "6 month",
        },
      ],
    };
  }
  render() {
    let people = this.state.groups.map((el) => {
      return <Table name={el.name} age={el.age} seniority={el.seniority} />;
    });
    return (
      <div>
        <table>
          <tr>
            <th>
              <h2>NAME</h2>
            </th>
            <th>
              <h2>AGE</h2>
            </th>
            <th>
              <h2>SENIORITY</h2>
            </th>
          </tr>
          {people}
        </table>
      </div>
    );
  }
}

export default Names;
