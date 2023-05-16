let field = []

export const addPlant = (seedObj) => {
    Array.isArray(seedObj) ? 
    field.push(...seedObj) : 
    field.push(seedObj) 
}

export const usePlants = () => {
    return field
}