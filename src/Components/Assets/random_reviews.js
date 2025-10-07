const names = ["Sarah L.", "James R.", "Emma W.", "Noah D.", "Mia K.", "Liam S.", "Olivia T."];
const comments = [
  "Amazing quality and fit perfectly!",
  "Good value for money.",
  "The color is slightly different than the picture.",
  "Fast shipping and excellent packaging!",
  "Love it! I’m buying more soon.",
  "Decent product, but could be softer.",
  "Exceeded my expectations. Highly recommend!"
];

function getRandomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function generateReviews(count = 10) {
  return Array.from({ length: count }, () => ({
    name: names[Math.floor(Math.random() * names.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    comment: comments[Math.floor(Math.random() * comments.length)],
    date: getRandomDate(),
  }));
}

export default generateReviews;
