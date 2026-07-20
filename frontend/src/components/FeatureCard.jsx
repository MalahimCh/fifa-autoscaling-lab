import "../styles/FeatureCard.css";

function FeaturedCard({ player }) {

    const medal =
        player.rank === 2 ? "🥈" : "🥉";

    return (

<div
  className={`featuredCard ${
    player.rank === 3 ? "bronze" : ""
  }`}
>
            <div className="featuredLeft">

                <div className="featuredBadge">
                    {medal} #{player.rank}
                </div>

                <h2>{player.name}</h2>

                <div className="featuredCountry">

                    <img
                        src={player.flag}
                        alt={player.country}
                    />

                    <span>{player.country}</span>

                </div>

                <div className="featuredStats">

                    <div>

                        <h3>{player.goals}</h3>

                        <p>Goals</p>

                    </div>

                    <div>

                        <h3>{player.assists}</h3>

                        <p>Assists</p>

                    </div>

                    <div>

                        <h3>{player.minutes}</h3>

                        <p>Minutes</p>

                    </div>

                </div>

            </div>

            <div className="featuredRight">

                <img
                    src={player.image}
                    alt={player.name}
                />

            </div>

        </div>

    );

}

export default FeaturedCard;
