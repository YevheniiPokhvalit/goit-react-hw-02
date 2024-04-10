export default function Feedback({
  feedback,
  positivePercentage,
  totalFeedback,
}) {
  return (
    <>
      <p>Good: {feedback.good} </p>
      <p>Neutral: {feedback.neutral} </p>
      <p>Bad: {feedback.bad} </p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
}
