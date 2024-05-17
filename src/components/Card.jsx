import React, { useState, useEffect } from 'react';
import { Icon } from './Icon.jsx';

// export function Card({ children, iconName, title, isColumn = false }) {
//   const [iconUrl, setIconUrl] = useState(null);
//
//   useEffect(() => {
//     if (iconName) {
//       const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });
//       const iconPath = `../assets/icons/${iconName}`;
//
//       if (!icons[iconPath]) {
//         console.error(`Icon ${iconName} not found`);
//         setIconUrl(null);
//       } else {
//         setIconUrl(icons[iconPath].default);
//       }
//     } else {
//       setIconUrl(null); // Ensure state is cleared if iconName is not provided
//     }
//   }, [iconName]);
//
//   if (title) {
//     return (
//       <div className={`card ${isColumn ? 'card__col' : ''}`}>
//         {iconUrl && (
//           <div className="icon-title-card">
//             <Icon iconUrl={iconUrl} iconName={iconName} />
//             <h3>{title}</h3>
//           </div>
//         )}
//         {!iconUrl && title && <h3>{title}</h3>}
//         <div>{children}</div>
//       </div>
//     );
//   }
//
//   return (
//     <div className={`card ${isColumn ? 'card__col' : ''}`}>{children}</div>
//   );
// }

export function Card({ children, iconName, title, isColumn = false }) {
  if (iconName && title) {
    const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });

    // Construct the path to the icon
    const iconPath = `../assets/icons/${iconName}`;

    // Check if the icon exists in the imported icons
    if (!icons[iconPath]) {
      console.error(`Icon ${iconName} not found`);
      return null;
    }

    // Access the default export of the imported icon
    const iconUrl = icons[iconPath].default;

    return (
      <div className="card card__col">
        {iconUrl && (
          <div className="icon-title-card">
            <Icon iconUrl={iconUrl} iconName={iconName} isFilterWhite={true} />
            <h3>{title}</h3>
          </div>
        )}
        {!iconUrl && title && <h3>{title}</h3>}
        <div className={`card-children ${isColumn && 'card__col'}`}>
          {children}
        </div>
      </div>
    );
  }

  return <div className={`card ${isColumn && 'card__col'}`}>{children}</div>;
}

export function Button({
  iconName,
  title,
  isColumn = false,
  clickHandler,
  className,
  isEducation = true,
}) {
  // Use import.meta.globEager to dynamically import icons
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });

  // Construct the path to the icon
  const iconPath = `../assets/icons/${iconName}`;

  // Check if the icon exists in the imported icons
  if (!icons[iconPath]) {
    console.error(`Icon ${iconName} not found`);
    return null;
  }

  // Access the default export of the imported icon
  const iconUrl = icons[iconPath].default;

  return (
    <div
      className={`btn ${isColumn && 'btn__col'} ${className && `${className}`}`}
      onClick={() => clickHandler(isEducation, iconName)}
    >
      <Icon iconUrl={iconUrl} iconName={iconName} isFilterWhite={true} />
      {title && <h3>{title}</h3>}
    </div>
  );
}
