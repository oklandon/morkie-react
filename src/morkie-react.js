import React from "react";
import styled from "styled-components";

export default class Morkie extends React.Component {
  state = {
    margin: 600,
    count: 0,
  };

  componentDidMount() {
    this.start();
  }
  render() {
    return (
      <StyledMarquee>
        <h3 style={{ "margin-left": `${this.state.margin}px` }}>
          {this.props.text}
        </h3>
      </StyledMarquee>
    );
  }

  start() {
    this.moving = setInterval(this.move.bind(this), 25);
  }

  move() {
    this.setState((prevState, props) => {
      if (prevState.count > 800) {
        clearInterval(this.moving);
      }
      return {
        count: prevState.count + 1,
        margin: prevState.margin > -100 ? prevState.margin - 5 : 2000,
      };
    });
  }
}
const StyledMarquee = styled.div`
  width: 100%;
  overflow: hidden;
  h3 {
    position: relative;
    white-space: nowrap;
  }
`;
