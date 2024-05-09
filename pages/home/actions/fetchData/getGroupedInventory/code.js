const groupedData = {{data}}.reduce((r, i) => {
  if (!r[i.category]) {
    r[i.category] = {
      name: i.category,
      quantity: i.quantity,
      sold: i.sold,
      toCome: i.toCome,
      inventoryValue: 0,
      children: [],
      icon: 'file-text-outline',
    };
  }
  let g = r[i.category];
  
  g.quantity += i.quantity;
  g.sold += i.sold;
  g.toCome += i.toCome;
  g.children.push(i);
  g.inventoryValue += i.quantity * i.price;
  return r;
}, {});

return Object.values(groupedData).sort((a,b) => a.name.localeCompare(b.name))