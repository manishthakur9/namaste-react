import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Prent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1> About Class Component</h1>
        <h2> Here is the Information About this Page</h2>
        <UserClass name={" First "} location={" Aligarh Class"} />
      </div>
    );
  }
}

export default About;
