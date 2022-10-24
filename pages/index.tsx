import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Row from 'components/Row';

import requests from 'utils/requests';
import { HomeProps } from 'typings';

const Home = ({
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  netflixOriginals,
  romanceMovies,
  topRated,
  trendingNow,
}: HomeProps) => {
  const movieA = [
    { title: 'Trending Now', movies: trendingNow },
    { title: 'Top Rated', movies: topRated },
    { title: 'Action Thrillers', movies: actionMovies },
  ];

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Create Next App</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <Header />

      <main className='relative  pl-4 pb-24 lg:gap-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          {movieA.map((movie) => (
            <Row
              key={movie.title}
              title={movie.title}
              movies={movie.movies}
            />
          ))}
          {/* <Row
            title='Trending Now'
            movies={trendingNow}
          />
          <Row
            title='Top Rated'
            movies={topRated}
          />
          <Row
            title='Action Thrillers'
            movies={actionMovies}
          /> */}
          {/* My List */}

          <Row
            title='Comedies'
            movies={comedyMovies}
          />
          <Row
            title='Scary Movies'
            movies={horrorMovies}
          />
          <Row
            title='Romance Movies'
            movies={romanceMovies}
          />
          <Row
            title='Documentaries'
            movies={documentaries}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all(
    Object.values(requests).map((movieUrl) =>
      fetch(movieUrl).then((res) => res.json())
    )
  );

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
