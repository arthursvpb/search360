export const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm.trim()) return [<span key="text">{text}</span>];

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index}>{part}</mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};
