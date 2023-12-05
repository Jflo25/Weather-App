import React from "react";

const City = () => {
  return <div>{this.props.match.params.cityId}</div>;
};

export default City;
