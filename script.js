const data = [
    {
        name: "John",
        age: 25,
        city: "New York"
    }
]

const spec = {
    data: {
        values: data
    },
    mark: "bar",
    encoding: {
        x: {
            field: "name",
            type: "nominal"
        },
        y: {
            field: "age",
            type: "quantitative"
        }
    }
}

vegaEmbed("#vis", spec);
