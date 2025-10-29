const calculateTotal = (subtotal, shipping = 2.50) => {
  return subtotal + shipping;
};

const printTopThreeHeadlines = (...headlines) => {
  return headlines.slice(0, 3).join('\n');
};

const newsHeadlines = [
  'City Marathon Breaks Records',
  'Local Artist Wins National Prize',
  'New Study Reveals Health Benefits of Exercise',
  'Weekend Weather Forecast Calls for Sun',
  'Tech Company Announces Major Layoffs'
];





