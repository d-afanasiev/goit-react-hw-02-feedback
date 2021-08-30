import PropTypes from "prop-types";
import { Component } from "react";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    console.log(options);
    return (
      <div className={css.wrapperButtons}>
        <button type="submit">Good</button>
        <button type="submit">Neutral</button>
        <button type="submit">Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
