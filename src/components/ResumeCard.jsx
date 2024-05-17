import { Button } from './Card.jsx';
import { useState } from 'react';

export function ResumeCard({
  itemId,
  title,
  children,
  open = false,
  isEducation = true,
  handleRemoveEducationItem,
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="resume-card">
      <h3>{title}</h3>
      <div className="btns-container">
        <Button
          iconName="edit.svg"
          clickHandler={() => setIsOpen(!isOpen)}
        ></Button>
        <Button
          iconName="bin.svg"
          clickHandler={() => handleRemoveEducationItem(isEducation, itemId)}
        />
      </div>
      <div className={`resume-forms ${isOpen && 'active'}`}>{children}</div>
    </div>
  );
}
