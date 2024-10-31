export const ALPACA_BASE_URL_PAPER = "https://paper-api.alpaca.markets/v2"
export const ALPACA_BASE_URL_REAL = "https://api.alpaca.markets/v2"
export const ALPACA_BASE_URL_DATA = "https://data.alpaca.markets/v2"

/**
 * Sends an alpaca request to the alpaca api.  Depends on the alpaca api key and secret key being set in the environment variables.
 *
 * @param url The url string
 * @param method The method of the request (GET, POST, DELETE, etc)
 * @param body The body of the request
 * @returns a promise with the response from the alpaca api
 */
export const sendAlpacaRequest = async (url: string, method: string, body: any): Promise<Response> => {
    return await fetch(url, {
        method: method,
        body: body,
        headers: {
            "APCA-API-KEY-ID": Deno.env.get("ALPACA_API_KEY") ?? "",
            "APCA-API-SECRET-KEY": Deno.env.get("ALPACA_SECRET_KEY") ?? "",
            accept: 'application/json'
        }
    })
}


export type * as Types from './types/MarketTypes.ts';