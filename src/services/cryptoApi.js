import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {  
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'be5274665amsh264fe6a875457d1p1cdf74jsncb240510b73d'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

// const params = {
//   referenceCurrencyUuid: 'yhjMzLPhuIDl',
//   timePeriod: '24h',
//   tiers: '1',
//   orderBy: 'marketCap',
//   orderDirection: 'desc',
//   limit: '50',
//   offset: '0'
// }

// const createRequest = (url) => ({ url, params: params, headers: cryptoApiHeaders })

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0')
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'be5274665amsh264fe6a875457d1p1cdf74jsncb240510b73d'
//   }
// };