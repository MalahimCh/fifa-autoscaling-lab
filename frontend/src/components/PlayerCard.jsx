import "../styles/PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <div className="playerCard">

      <div className="playerRank">
        #{player.rank}
      </div>

      <img
        className="playerImage"
        src={player.image}
        alt={player.name}
      />

      <h3>{player.name}</h3>

      <div className="playerCountry">
        <img src={player.flag} alt={player.country} />
        <span>{player.country}</span>
      </div>

      <div className="playerStats">

        <div>
          <h4>{player.goals}</h4>
          <p>Goals</p>
        </div>

        <div>
          <h4>{player.assists}</h4>
          <p>Assists</p>
        </div>

        <div>
          <h4>{player.minutes}</h4>
          <p>Minutes</p>
        </div>

      </div>

    </div>
  );
}

export default PlayerCard;
