return {{data}}.sort((a,b) => new Date(b.purchase_date) - new Date(a.purchase_date))