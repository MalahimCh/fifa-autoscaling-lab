import "../styles/HeroCard.css";

function HeroCard({ player }) {
  return (
    <section className="heroCard">

      <div className="heroLeft">

        <div className="rankBadge">
         🥇 #1
        </div>

        <h2>{player.name}</h2>

        <div className="countryRow">

          <img
            src={player.flag}
            alt={player.country}
          />

          <span>{player.country}</span>

        </div>

        <div className="stats">

          <div className="stat">

            <h3>{player.goals}</h3>

            <p>Goals</p>

          </div>

          <div className="stat">

            <h3>{player.assists}</h3>

            <p>Assists</p>

          </div>

          <div className="stat">

            <h3>{player.minutes}</h3>

            <p>Minutes</p>

          </div>

        </div>

        <div className="goldenBoot">

          <img
            src="/images/icons/ball.jpg"
            alt=""
          />
Current Golden Boot Leader
        </div>

      </div>

      <div className="heroRight">

        <img
          src={player.image}
          alt={player.name}
        />

      </div>

    </section>
  );
}

export default HeroCard;
