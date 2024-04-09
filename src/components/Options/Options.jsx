export default function Options({
  onFeedback,
  totalFeedback,
  onResetFeedback,
}) {
  return (
    <>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </>
  );
}
