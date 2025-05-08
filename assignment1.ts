function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == true || toUpper == undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();

    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=>item.rating >= 4.0)
}



