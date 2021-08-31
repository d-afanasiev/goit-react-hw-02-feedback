import PropTypes from "prop-types";
import { Component } from "react";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    const keyObject = Object.keys(options);
    return (
      <div className={css.wrapperButtons}>
        {keyObject.map((button, key) => (
          <button key={key} type="submit">
            {button}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
