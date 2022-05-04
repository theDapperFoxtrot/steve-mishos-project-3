const DateBreakdown = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: '2-digit' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default DateBreakdown;