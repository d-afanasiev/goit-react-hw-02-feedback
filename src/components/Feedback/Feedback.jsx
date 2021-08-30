import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Feedback.module.css";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

class Feedback extends Component {
  render() {
    const { state, countTotalFeedback, countPositiveFeedbackPercentage } =
      this.props;
    const { good, neutral, bad } = state;
    return (
      <header className={css.feedback}>
        <h1 className={css.titleFeedback}>Please leave feedback</h1>
        <FeedbackOptions options={state} />
        {/* <div className={css.wrapperButtons}>
          <button type="submit">Good</button>
          <button type="submit">Neutral</button>
          <button type="submit">Bad</button>
        </div> */}

        <h2 className={css.titleStatistics}>Statistics</h2>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(state)}
          positivePercentage={countPositiveFeedbackPercentage(state)}
        />
      </header>
    );
  }
}

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default Feedback;
