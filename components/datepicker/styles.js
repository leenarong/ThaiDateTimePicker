import styled from "styled-components";
import {
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export const DatePickerContainer = styled.div`
  position: relative;
  width: 20rem;
`;

export const DatePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
`;

export const DatePickerLabel = styled(Label)`
  margin: 0;
  padding: 0 1rem;
  font-weight: 600;
  // font-size: 0.7rem;
  // letter-spacing: 2px;
  // text-transform: uppercase;
  color: #06c;
  border-right: 2px solid #06c;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 102, 204, 0.05);
`;

export const DatePickerInput = styled(Input)`
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  box-shadow: none;
  border: none;
  text-align: center;
  letter-spacing: 1px;
  background: transparent !important;
  display: flex;
  align-items: center;
  appearance: textfield;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;

  ::placeholder {
    color: #999;
    font-size: 0.9rem;
  }
`;

export const DatePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 20em;
  height: 100%;
  top: 0;
  right: 0;
`;

export const DatePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const DatePickerDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  transform: none !important;
`;
