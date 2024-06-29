import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/manishthakur9");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @manishthakur9</h4>
      </div>
    );
  }
}
export default UserClass;
