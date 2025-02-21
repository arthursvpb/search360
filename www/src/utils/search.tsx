export const highlightTextWithCount = (text: string, searchTerm: string) => {
  if (!searchTerm.trim())
    return { highlightedText: [<span key="text">{text}</span>], count: 0 };

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  const count = (text.match(regex) || []).length;

  return {
    highlightedText: parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          style={{
            backgroundColor: '#ffeb3b',
            padding: '2px',
            borderRadius: '4px',
          }}
        >
          {part}
        </mark>
      ) : (
        <span key={index}>{part}</span>
      )
    ),
    count,
  };
};
