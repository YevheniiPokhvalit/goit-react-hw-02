export default function Feedback({ feedback, positivePercentage }) {
  return (
    <>
      <p>Good: {feedback.good} </p>
      <p>Neutral: {feedback.neutral} </p>
      <p>Bad: {feedback.bad} </p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
}
