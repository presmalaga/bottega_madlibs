import React, { component } from "react";

import Input from "./input";

class Card extends Component {
  render() {
    return (
      <div classname="card">
        {Input("Color")}
        {Input("Plural Noun")}
      </div>
    );
  }
}

export default Card;
