let quotes = [
  `"Mistakes are always forgivable, if one has the courage to admid them."`,
  `"The more we value things, the less we value ourselves."`,
  `"Be water, my friend."`,
  `"Absorb what is useful, Discard what is not, Add what is uniquely your own."`,
  `"A wise man can learn more from a foolish question than a fool can learn from a wise answer."`,
  `"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."`,
  `"Man, the living creature, the creating individual, is always more important than any established style or system."`,
  `"Do not pray for an easy life, pray for the strength to endure a difficult one."`,
  `"If you love life, don't waste time, for time is what life is made up of."`,
  `"The key to immortality is first living a life worth remembering."`,
  `"Service to others is the rent you pay for your room here on earth."`,
  `"If my mind can conceive it, and my heart can believe it, then I can achieve it."`,
  `"It's hard to be humble when you're as great as I am."`,
  `"A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life."`,
  `"A man who has no imagination has no wings."`,
  `"It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up."`,
  `"Live everyday as if it were your last because someday you're going to be right."`,
  `"It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe."`,
  `"It's the repetition of affirmations that leads to belief. And once that belief becomes a deep conviction, things begin to happen."`,
  `"Friendship... is not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything."`,
];
let min = 0;
let max = quotes.length - 1;
let number = -1;
let timer = setInterval(() => {
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(quotes[number]);
}, 10000);
setTimeout(() => {
  clearInterval(timer);
}, 120000);
