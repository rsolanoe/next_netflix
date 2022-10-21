import Image from 'next/image';
import { BannerProps } from './types';
import { useEffect, useState } from 'react';
import { Movie } from 'typings';
import { baseUrl } from 'constants/movies';
import { FaPlay } from 'react-icons/fa';
import * as styles from './styles';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

const Banner = ({ netflixOriginals }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div className={styles.wrapper.banner}>
      <div className={styles.wrapper.image}>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <h1 className={styles.headline}>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className={styles.subTitle}>{movie?.overview}</p>

      <div className={styles.wrapper.buttons}>
        <button className={styles.playButton}>
          <FaPlay className={styles.icons.play} />
        </button>
        <button className={styles.infoButton}>
          More info <InformationCircleIcon className={styles.icons.info} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
