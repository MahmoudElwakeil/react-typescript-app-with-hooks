export default interface Movie {
    _id: string,
    name: string,
    numberInStock: number,
    dailyRentRate: number,
    publishDate: string,
    liked: boolean;
}