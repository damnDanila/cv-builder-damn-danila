export function Icon({ iconUrl, iconName = '', isFilterWhite }) {
  return (
    <div className={`icon-container ${isFilterWhite && 'filter--white'}`}>
      <img src={iconUrl} alt={iconName} />
    </div>
  );
}
