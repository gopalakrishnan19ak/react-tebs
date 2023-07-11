import { Component } from "react";
import "./Packagedatastyles.css";
import Package1 from "../assets/6.jpg";
import Package2 from "../assets/12.jpg";
import Package3 from "../assets/5.jpg";

class Packagedata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="package-text">
          <h3>{this.props.heading}</h3>
          <p>{this.props.text}</p>
        </div>

        <div className="package-img">
          <img alt="destination" src={this.props.img1} />
          <img alt="destination" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default Packagedata;
