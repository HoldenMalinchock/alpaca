export interface HistoricalDataObj {
    c: number,
    h: number,
    l: number,
    n: number,
    o: number,
    t: string, // This is a date iso string ex: "2023-11-20T05:00:00Z"
    v: number
    vw: number
}

export interface HistoricalData {
    bars: {
        [key: string]: HistoricalDataObj[] // key is the stock symbol
    }
}