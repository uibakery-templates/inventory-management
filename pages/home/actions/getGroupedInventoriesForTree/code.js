return {{data}}.map((g) => ({
  data: { name: g.name, quantity: g.quantity, sold: g.sold, toCome: g.toCome, kind: 'dir' },
  children: g.children.map(c => ({ data: c })),
  childrenCount: g.children.length,
  icon: 'folder',
}));