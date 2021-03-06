import styled from "styled-components";

export const Arrow = styled.button`
  appearance: none;
  user-select: none;
  outline: none !important;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: none;
  border-top: 1em solid transparent;
  border-bottom: 1em solid transparent;
  transition: all 0.25s ease-out;
  background: transparent !important;
`;

export const ArrowLeft = styled(Arrow)`
  border-right: 1em solid #09f;
  left: 1rem;
  :hover {
    border-right-color: #06c;
  }
`;

export const ArrowRight = styled(Arrow)`
  border-left: 1em solid #09f;
  right: 1rem;
  :hover {
    border-left-color: #06c;
  }
`;

export const CalendarContainer = styled.div`
  font-size: 5px;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
  background-color: #cec;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template: repeat(7, auto) / repeat(7, auto);
`;

export const Today = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em;
  color: #fff;
  font-weight: bold;
  background-color: #09f;
  :hover {
    background-color: #06c;
  }
`;

export const CalendarMonth = styled.div`
  font-weight: 500;
  font-size: 3em;
  color: #06c;
  text-align: center;
  padding: 0.5em 0.25em;
  word-spacing: 5px;
  user-select: none;
`;

export const CalendarCell = styled.div`
  text-align: center;
  align-self: center;
  letter-spacing: 0.1rem;
  padding: 0.3em 0.25em;
  position: relative;
  user-select: none;
  grid-column: ${(props) => (props.index % 7) + 1} / span 1;
`;

export const CalendarDay = styled(CalendarCell)`
  font-weight: 600;
  font-size: 3em;
  color: #06c;
  border-top: 2px solid #06c;
  border-bottom: 2px solid #06c;
  border-right: ${(props) =>
    (props.index % 7) + 1 === 7 ? `none` : `2px solid #06c`};
`;

export const CalendarDate = styled(CalendarCell)`
  font-weight: ${(props) => (props.inMonth ? 500 : 300)};
  font-size: 3em;
  cursor: ${(props) => (props.inRange ? "pointer" : "default")};
  border-bottom: ${(props) =>
    (props.index + 1) / 7 <= 5 ? `1px solid #aaa` : `none`};
  border-right: ${(props) =>
    (props.index % 7) + 1 === 7 ? `none` : `1px solid #aaa`};
  color: ${(props) =>
    props.inRange ? (props.inMonth ? `#333` : `#aaa`) : `#aaa !important`};
  background: ${(props) =>
    props.inRange
      ? props.inMonth
        ? `#7c5`
        : "transparent"
      : `rgba(102, 25, 0, 0.04) !important`};
  grid-row: ${(props) => Math.floor(props.index / 7) + 2} / span 1;
  transition: all 0.4s ease-out;
  :hover {
    color: #06c;
    background: rgba(0, 102, 204, 0.075);
  }
`;

export const HighlightedCalendarDate = styled(CalendarDate)`
  ${(props) =>
    props.inRange &&
    `
	  color: #fff !important;
    background: #c60 !important;
    ::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      border: 2px solid #06c;
    }
  `}
`;

export const TodayCalendarDate = styled(HighlightedCalendarDate)`
  ${(props) =>
    props.inRange &&
    `
    color: #f00 !important;
	  background: transparent !important;
    ::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-left: 0.75em solid transparent;
      border-top: 0.75em solid transparent;
    }
    :hover {
      color: #f00 !important;
      background: rgba(0, 102, 204, 0.075) !important;
    }
  `}
`;
