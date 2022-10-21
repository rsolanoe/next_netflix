import { GetServerSideProps } from 'next';
import requests from 'utils/requests';
import Head from 'next/head';
import Header from 'component/Header';
import Banner from 'component/Banner';
import { Movie } from 'typings';
import Row from 'component/Row';

type HomeProps = {
  actionMovies: Movie[];
  comedyMovies: Movie[];
  documentaries: Movie[];
  horrorMovies: Movie[];
  netflixOriginals: Movie[];
  romanceMovies: Movie[];
  topRated: Movie[];
  trendingNow: Movie[];
  data: any;
};

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
        <section>
          <Row
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
          />
          {/* My List */}
          {/* {list.length > 0 && (
            <Row
              title='My List'
              movies={list}
            />
          )} */}

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
