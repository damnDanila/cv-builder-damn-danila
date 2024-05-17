import { HistorySection } from './HistorySection.jsx';

export function History({ educationalList, experienceList }) {
  return (
    <div className={'history-container'}>
      <HistorySection title={'Education'} historyItems={educationalList} />
      <HistorySection
        title={'Practical Experience'}
        historyItems={experienceList}
      />
    </div>
  );
}
