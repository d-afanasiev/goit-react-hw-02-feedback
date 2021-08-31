import "./App.css";
import { Component } from "react";
import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (feedbacks) => {
    const valuesFeedback = Object.values(feedbacks);
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = (feedback) => {
    const goodFeedback = feedback.good;
    const valuesFeedback = Object.values(feedback);
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return Math.round((goodFeedback / totalFeedback) * 100);
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Feedback
          state={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </div>
    );
  }
}

export default App;
