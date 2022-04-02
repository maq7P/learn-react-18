const items = new Array(10000)
		.fill("")
		.map((_, i) => ({
			id: i,
			name: `item ${i + 1}`
		}))

export const filterItems = (filter) => filter
		?  items.filter(i => i.name.includes(filter))
		:  items