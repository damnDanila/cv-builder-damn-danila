export function Font({ fontClass, title, changeFontStyle }) {
  return (
    <div
      className={`font ${fontClass}`}
      onClick={() => changeFontStyle(fontClass)}
    >
      {title}
    </div>
  );
}
