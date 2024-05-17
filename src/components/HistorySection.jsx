export function HistorySection({ title, historyItems }) {
  return (
    <div className={'history-section'}>
      <h4>{title}</h4>
      <ul className={'history-items'}>
        {historyItems.map((item) => (
          <li key={item.id}>
            <HistoryItem
              date={item.date}
              title={item.name}
              position={item.position}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HistoryItem({ date, title, position, description }) {
  return (
    <div className={'item'}>
      <div className={'date'}>{date}</div>
      <div className={'item-info'}>
        <h5>{title}</h5>
        {position && <h6>{position}</h6>}
        <p>{description}</p>
      </div>
    </div>
  );
}
