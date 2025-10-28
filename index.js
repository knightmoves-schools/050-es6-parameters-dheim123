function calcuateTotal = (subtotal, shipping = 2.50) {
  return subtotal + shipping;
}

function printTopThreeHeadlines(...headlines) {
  const topThree = headlines.slice(0, 3)
  return topThree.join('\n');
}



