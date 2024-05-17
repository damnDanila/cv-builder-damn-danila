export const Input = ({
  type,
  title,
  placeHolder,
  propertyName,
  handleChange,
  value,
  id,
  isEducation = true,
}) => {
  const handleChangeProperty = (value) => {
    if (id) {
      handleChange(isEducation, id, propertyName, value);
    } else {
      handleChange(propertyName, value);
    }
  };

  return (
    <div className={'input-container'}>
      <h4>{title}:</h4>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => handleChangeProperty(e.target.value)}
      />
    </div>
  );
};
