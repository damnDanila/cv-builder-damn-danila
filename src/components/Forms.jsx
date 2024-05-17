import { Button, Card } from './Card.jsx';
import { Input } from './Input.jsx';
import { ResumeCard } from './ResumeCard.jsx';
import { useState } from 'react';
import { Font } from './Font.jsx';

export function Forms({
  handleChangePerson,
  handleChangeProperty,
  person,
  educationList,
  experienceList,
  handleAddNewItem,
  handleRemoveItem,
  changeFontStyle,
  handleClearCV,
  handleLoadExample,
}) {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="forms">
      <Card>
        <Button
          iconName="doc.svg"
          title="Content"
          clickHandler={() => setShowContent(true)}
          className={showContent ? 'selected' : null}
        />
        <Button
          iconName="hammer.svg"
          title="Customize"
          clickHandler={() => setShowContent(false)}
          className={!showContent ? 'selected' : null}
        />
      </Card>
      <Card>
        <Button
          iconName="bin.svg"
          title="Clear CV"
          isColumn={true}
          clickHandler={handleClearCV}
        />
        <Button
          iconName="upload.svg"
          title="Load Example"
          isColumn={true}
          clickHandler={handleLoadExample}
        />
        <Button
          iconName="print.svg"
          title="Print"
          isColumn={true}
          clickHandler={() => alert('Does not work yet')}
        />
      </Card>
      {!showContent ? (
        <Card title="Font">
          <Font
            fontClass={'encode-font'}
            title={'Encode Sans'}
            changeFontStyle={changeFontStyle}
          />
          <Font
            fontClass={'monospace-font'}
            title={'Monospace'}
            changeFontStyle={changeFontStyle}
          />
        </Card>
      ) : (
        <>
          <Card iconName="person.svg" title="Document" isColumn={true}>
            <Input
              type="text"
              title="Name"
              placeHolder={'Your name'}
              propertyName={'name'}
              handleChange={handleChangePerson}
              value={person.name}
            />
            <Input
              type="email"
              title="Email"
              placeHolder={'example@example.com'}
              propertyName={'email'}
              handleChange={handleChangePerson}
              value={person.email}
            />
            <Input
              type="tel"
              title="Phone"
              placeHolder={'555-555-55555'}
              propertyName={'phone'}
              handleChange={handleChangePerson}
              value={person.phone}
            />
          </Card>
          <Card iconName="education.svg" title="Education" isColumn={true}>
            {educationList.map((eduItem) => (
              <ResumeCard
                title={eduItem.name}
                key={eduItem.id}
                open={!eduItem.name}
                itemId={eduItem.id}
                handleRemoveEducationItem={handleRemoveItem}
              >
                <Input
                  type="text"
                  title="School"
                  placeholder="Harvard"
                  value={eduItem.name}
                  id={eduItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'name'}
                />
                <Input
                  type="text"
                  title="Study"
                  placeholder="Computer Science"
                  value={eduItem.description}
                  id={eduItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'description'}
                />
                <Input
                  type="text"
                  title="Date"
                  placeholder="2024"
                  placeHolder={eduItem.date}
                  id={eduItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'date'}
                />
              </ResumeCard>
            ))}
            <Button
              iconName="add.svg"
              className={'add-btn'}
              clickHandler={handleAddNewItem}
            />
          </Card>
          <Card iconName="work.svg" title="Work Experience" isColumn={true}>
            {experienceList.map((expItem) => (
              <ResumeCard
                title={expItem.name}
                key={expItem.id}
                open={!expItem.name}
                itemId={expItem.id}
                handleRemoveEducationItem={handleRemoveItem}
                isEducation={false}
              >
                <Input
                  type="text"
                  title="School"
                  placeholder="Harvard"
                  value={expItem.name}
                  id={expItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'name'}
                  isEducation={false}
                />
                <Input
                  type="text"
                  title="Study"
                  placeholder="Computer Science"
                  value={expItem.description}
                  id={expItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'description'}
                  isEducation={false}
                />
                <Input
                  type="text"
                  title="Date"
                  placeholder="2024"
                  placeHolder={expItem.date}
                  id={expItem.id}
                  handleChange={handleChangeProperty}
                  propertyName={'date'}
                  isEducation={false}
                />
              </ResumeCard>
            ))}
            <Button
              iconName="add.svg"
              className={'add-btn'}
              isEducation={false}
              clickHandler={handleAddNewItem}
            />
          </Card>
        </>
      )}
    </div>
  );
}
