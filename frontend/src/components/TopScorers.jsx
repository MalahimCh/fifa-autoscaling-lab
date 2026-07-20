import Header from "./Header";
import HeroCard from "./HeroCard";
import FeaturedCard from "./FeatureCard";
import PlayerCard from "./PlayerCard";
import players from "../data/players.json";
import Footer from "./Footer";
import "../styles/TopScorers.css";

function TopScorers() {

  return (

    <div className="page">

      <Header />

      <HeroCard player={players[0]} />

      <div className="featuredSection">

        <FeaturedCard player={players[1]} />

        <FeaturedCard player={players[2]} />

      </div>
<div className="playerGrid">

  {players.slice(3).map((player) => (

    <PlayerCard
      key={player.rank}
      player={player}
    />

  ))}

</div>
<Footer />
    </div>

  );

}

export default TopScorers;
