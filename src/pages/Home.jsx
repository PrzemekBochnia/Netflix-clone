import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Requests'

export const Home = () => {
  return (
    <>
      <Main/>
      <Row rowId='1' title ='Up Coming Movies' fetchURL={requests.requestUpcoming} />
      <Row rowId='2' title ='Popular Movies' fetchURL={requests.requestPopular} />
      <Row rowId='3' title ='Top Rated Movies' fetchURL={requests.requestTopRated} />
      <Row rowId='4' title ='Trending Movies' fetchURL={requests.requestTrending} />
      <Row rowId='5' title ='Popular Shows' fetchURL={requests.requestPopularShows} />
      <Row rowId='6' title ='Top Rated Shows' fetchURL={requests.requestTopRatedShows} />
      <Row rowId='7' title ='Horrors' fetchURL={requests.requestHorror} />
      <Row rowId='8' title ='Comedy' fetchURL={requests.requestComedy} />
    </>
  )
}
