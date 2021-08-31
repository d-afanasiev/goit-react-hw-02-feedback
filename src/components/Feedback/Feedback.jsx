import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Feedback.module.css";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Feedback extends Component {
  render() {
    const {
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this.props;
    const { good, neutral, bad } = state;

    return (
      <header className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback(state) === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(state)}
              positivePercentage={countPositiveFeedbackPercentage(state)}
            />
          )}
        </Section>
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
