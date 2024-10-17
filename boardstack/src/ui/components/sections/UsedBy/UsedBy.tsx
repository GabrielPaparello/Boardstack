import { urbanist } from "../../common/fonts";
import AmazonIcon from "./icons/Amazon";
import InstagramIcon from "./icons/Instagram";
import SpotifyIcon from "./icons/Spotify";
import AirbnbIcon from "./icons/Airbnb";
export const UsedBy = () => {
  return (
    <section className="mt-10 flex flex-col items-center justify-center dark:bg-dark-secondary bg-light-secondary py-5">
      <article>
        <h3
          className={`text-center ${urbanist.className} font-bold dark:text-dark-title text-light-title md:text-xl lg:text-2xl`}
        >
          Industrias que utilizan Kanban
        </h3>
      </article>

      <article className="flex flex-wrap justify-center gap-10 mt-5 lg:gap-20">
        <AmazonIcon className="lg:max-w-[100px] md:max-w-[80px] lg:max-h-[100px] md:max-h-[80px] dark:fill-dark-accent-secondary fill-light-accent-secondary xs:max-w-[60px] xs:max-h-[60px]" />
        <AirbnbIcon className="lg:max-w-[100px] md:max-w-[80px] lg:max-h-[100px] md:max-h-[80px]  dark:fill-dark-accent-secondary fill-light-accent-secondary xs:max-w-[60px] xs:max-h-[60px]" />
        <InstagramIcon className="lg:max-w-[140px] md:max-w-[100px] lg:max-h-[140px] md:max-h-[100px]  dark:fill-dark-accent-secondary fill-light-accent-secondary xs:max-w-[80px] xs:max-h-[80px]" />
        <SpotifyIcon className="lg:max-w-[140px] md:max-w-[100px] lg:max-h-[140px] md:max-h-[100px]  dark:fill-dark-accent-secondary fill-light-accent-secondary xs:max-w-[80px] xs:max-h-[80px]" />
      </article>
    </section>
  );
};
