import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { Connect } from "react-redux";
import { employeeUpdate } from "../actions";
class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ props: "name", value })
            }
            label="Name"
            placeholder="username"
          />
        </CardSection>

        <CardSection>
          <Input
            label="phone"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ props: "phone", value })
            }
            placeholder="555-555-555"
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default Connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
