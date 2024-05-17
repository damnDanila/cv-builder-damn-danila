import { Header } from './Header.jsx';
import { History } from './History.jsx';

export const CV = ({ person, educationalList, experienceList, fontStyle }) => {
  return (
    <div className={`cv ${fontStyle}`}>
      <Header
        name={person.name}
        email={person.email}
        phoneNumber={person.phone}
      />
      <History
        educationalList={educationalList}
        experienceList={experienceList}
      />
    </div>
  );
};
