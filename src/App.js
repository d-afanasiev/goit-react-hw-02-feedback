import "./App.css";
import { Component } from "react";
import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 2,
    neutral: 5,
    bad: 2,
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

  render() {
    return (
      <div className="App">
        <Feedback
          state={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
