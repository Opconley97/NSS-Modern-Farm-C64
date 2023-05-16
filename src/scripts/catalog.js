export const Catalog = (harvestedFood) => {
    let htmlString = ""
    for (const harvest of harvestedFood) {
        htmlString += `<section class="plant">${harvest.type}</section>`
    }
    return htmlString
}