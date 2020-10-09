import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  state = {
    width: 100,
    animate: false,
  };

  onPushHandler = () => {
    this.setState({ width: 100 });
  };

  onPullHandler = () => {
    this.setState((prevState) => {
      return {
        width: prevState.width + 10,
        animate: true,
      };
    });

    this.onRemoveAnimate();
  };

  onCancelHandler = () => {
    this.setState((prevState) => {
      return {
        width: prevState.width - 10,
        animate: true,
      };
    });

    this.onRemoveAnimate();
  };

  onRemoveAnimate = () => {
    setTimeout(() => {
      this.setState({ animate: false });
    }, 500);
  };

  render() {
    let disabled = false;
    if (this.state.width === 0) {
      disabled = true;
    }

    let barColor = "#eee";
    if (this.state.width <= 60) {
      barColor = "orange";
    }
    if (this.state.width <= 30) {
      barColor = "red";
    }

    return (
      <div className="ball">
        <div className="ball__body">
          <div
            className={
              this.state.animate ? "ball__style animate" : "ball__style"
            }
          ></div>
          <div className="ball__bar">
            <div
              style={{
                width: `${this.state.width}%`,
                backgroundColor: barColor,
              }}
              className="ball__barProgress"
            ></div>
          </div>
          <div className="ball__control">
            <button
              onClick={this.onCancelHandler}
              className="push"
              disabled={disabled}
            >
              Push
            </button>
            <button
              onClick={this.onPushHandler}
              className="full"
              disabled={!disabled}
            >
              Full
            </button>
            <button onClick={this.onPullHandler} className="pull">
              Pull
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ball;
