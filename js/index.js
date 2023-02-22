const svg = d3.select("#circle")
const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
]

//console.log(svg)

const baseRadius = 10
const cheapColor = 'green'
const expColor = 'yellow'

// Add circle
svg.selectAll('circle')
    .data(sandwiches)
    .enter()
  .append('circle')
    .attr('r', ({ size }) => (size === "small") ? baseRadius : baseRadius * 2)
    .attr('fill', ({price}) => (price < 7.00) ? cheapColor : expColor )
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .attr('cy', 100)
    .attr('cx', (d, index) => index * 60 + 50)