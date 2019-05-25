import React, { Component } from "react";
import { Picker, Text, Platform } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
class EmployeeCreate extends Component {
  shiftView() {
    if (Platform.OS === "ios") {
      return <Text style={style.pickerText}>Shift</Text>;
    }
  }
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
        <CardSection>
          {this.shiftView()}

          <Picker
            style={{ flex: 1, flexDirection: "column" }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ props: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wenesday" value="Wenesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
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

const style = {
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
    position: "absolute",
    marginTop: 16,
    marginLeft: 5
  }
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
