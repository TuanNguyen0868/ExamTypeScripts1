import React from "react";
import datas from "../asset/product.json";
import anh1 from "../asset/h1.jpg";

export default class SearchPro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datas };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.datas.map((item) => {
            return <ProInfo user={item} key={item.proId} />;
          })}
        </tbody>
      </table>
    );
  }
}

function ProInfo(props) {
  return (
    <tr prop-id={props.user.proId}>
      <td>{props.user.proId}</td>
      <td>{props.user.proName}</td>
      <td>{props.user.proPrice}</td>
      <td>
        <img src={anh1} alt="anh ne" width="150px" height="200px" />
      </td>
    </tr>
  );
}
