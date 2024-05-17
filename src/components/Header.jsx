import { Icon } from './Icon.jsx';

export function Header({ name, email, phoneNumber }) {
  const iconNameOne = 'email.svg';
  const iconNameTwo = 'phone.svg';
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });

  // Construct the path to the icon
  const iconPath = `../assets/icons/${iconNameOne}`;
  const iconPathTwo = `../assets/icons/${iconNameTwo}`;

  // Check if the icon exists in the imported icons
  if (!icons[iconPath]) {
    console.error(`Icon ${iconNameOne} not found`);
    return null;
  }

  // Access the default export of the imported icon
  const iconUrl = icons[iconPath].default;
  const iconUrlTwo = icons[iconPathTwo].default;

  return (
    <div className={'header'}>
      {name && <h1>{name}</h1>}
      {(email || phoneNumber) && (
        <div>
          {email && (
            <div className={'header-info'}>
              <Icon iconUrl={iconUrl} isFilterWhite={true} />
              {email}
            </div>
          )}
          {phoneNumber && (
            <div className={'header-info'}>
              <Icon iconUrl={iconUrlTwo} isFilterWhite={true} />+{phoneNumber}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
