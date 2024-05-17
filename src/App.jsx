import './styles/app.css';
import { Forms } from './components/Forms.jsx';
import { CV } from './components/CV.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { exampleData } from './utils/exampleData.js';

function App() {
  const [person, setPerson] = useState(exampleData.person);
  const [educationList, setEducationList] = useState(exampleData.educationList);
  const [experienceList, setExperienceList] = useState(
    exampleData.experienceList
  );
  const [fontStyle, setFontStyle] = useState('default-font');

  function changeFontStyle(fontStyle) {
    setFontStyle(fontStyle);
  }

  function clearCV() {
    setPerson({ name: '', email: '', phone: '' });
    setEducationList([]);
    setExperienceList([]);
  }

  function loadExample() {
    const { person, educationList, experienceList } = exampleData;
    setPerson(person);
    setEducationList(educationList);
    setExperienceList(experienceList);
  }

  function changePersonProperty(propertyName, value) {
    const newPerson = { ...person, [propertyName]: value };
    setPerson(newPerson);
  }

  function changeListProperty(isEducation = false, id, propertyName, value) {
    if (isEducation) {
      setEducationList((prevList) =>
        prevList.map((eduItem) =>
          eduItem.id === id ? { ...eduItem, [propertyName]: value } : eduItem
        )
      );
    } else {
      setExperienceList((prevList) =>
        prevList.map((eduItem) =>
          eduItem.id === id ? { ...eduItem, [propertyName]: value } : eduItem
        )
      );
    }
  }

  function addNewItem(isEducation) {
    if (isEducation) {
      setEducationList((prevList) => [
        ...prevList,
        { id: uuidv4(), name: '', date: '', description: '' },
      ]);
    } else {
      setExperienceList((prevList) => [
        ...prevList,
        { id: uuidv4(), name: '', date: '', description: '' },
      ]);
    }
  }

  function removeEducationItem(isEducation, id) {
    if (isEducation) {
      setEducationList((prevList) =>
        prevList.filter((eduItem) => eduItem.id !== id)
      );
    } else {
      setExperienceList((prevList) =>
        prevList.filter((eduItem) => eduItem.id !== id)
      );
    }
  }

  return (
    <>
      <Forms
        handleChangePerson={changePersonProperty}
        handleChangeProperty={changeListProperty}
        person={person}
        educationList={educationList}
        experienceList={experienceList}
        handleAddNewItem={addNewItem}
        handleRemoveItem={removeEducationItem}
        handleClearCV={clearCV}
        handleLoadExample={loadExample}
        changeFontStyle={changeFontStyle}
      />
      <CV
        person={person}
        educationalList={educationList}
        experienceList={experienceList}
        fontStyle={fontStyle}
      />
    </>
  );
}
export default App;
