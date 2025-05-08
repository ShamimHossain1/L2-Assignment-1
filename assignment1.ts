function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == true || toUpper == undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();

    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4.0)
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    result = result.concat(...arrays);
    return result;
}



class Vehicle {
    constructor(private make: string, private year: number) { }
    getInfo(): void {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel(): void {
        console.log(`Model: ${this.model}`);
    }
}


function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2;
}



interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) {
        return null;
    }else{
        return products.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    }
}



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{

    if(day == Day.Saturday || day == Day.Sunday){
        return "Weekend";
    }else{
        return "Weekday";
    }
}





