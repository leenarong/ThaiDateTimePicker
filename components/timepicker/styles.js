import styled from "styled-components";
import {
  FormGroup,
  Label,
  Dropdown,
  DropdownToggle,
} from "reactstrap";

export const TimePickerContainer = styled.div`
  position: relative;
  width: 22rem;
`;

export const TimePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
`;

export const TimePickerLabel = styled(Label)`
  margin: 0;
  padding: 0 1rem;
  font-weight: 600;
  //   font-size: 0.7rem;
  //   letter-spacing: 2px;
  //   text-transform: uppercase;
  color: #06c;
  border-right: 2px solid #06c;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 102, 204, 0.05);
`;

export const TimePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 20em;
  height: 100%;
  top: 0;
  right: 0;
`;

export const TimePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const HourSelect = styled.select`
  width: 4em;
  height: 2em;
  padding-left: 0.5em;
  font-size: 1em;
  //   border: 2px solid #06c;

  option {
    background: #cec;
  }
`;

export const MinuteSelect = styled.select`
  width: 4em;
  height: 2em;
  padding-left: 0.5em;
  font-size: 1em;
  //   border: 2px solid #06c;

  option {
    background: #cec;
  }
`;

export const SecondSelect = styled.select`
  width: 4em;
  height: 2em;
  padding-left: 0.5em;
  font-size: 1em;
  //   border: 2px solid #06c;

  option {
    background: #cec;
  }
`;
