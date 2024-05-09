return {{data}}.map (d => ({
  ...d,
  sold: Math.floor(Math.random() * d.quantity / 2),
  toCome: Math.floor(Math.random() * d.quantity / 3),
}));