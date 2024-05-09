return {{data}}.sort((a,b) => b.inventoryValue - a.inventoryValue).splice(0,6).map(i => ({
  ...i,
  inventoryValue: Math.ceil(i.inventoryValue)
}))