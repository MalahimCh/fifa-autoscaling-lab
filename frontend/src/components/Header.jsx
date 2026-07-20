import "../styles/Header.css";

function Header() {
  return (
    <header className="header">

      <img
        src="/images/icons/logo.jpg"
        alt="FIFA"
        className="fifaLogo"
      />

      <div className="headerText">

        <p className="subtitle">
          FIFA WORLD CUP™
        </p>

        <h1>
          adidas Golden Boot
        </h1>

        <p className="description">
          Top 10 Goal Scorers
        </p>

      </div>

      <img
        src="/images/icons/trophy.jpg"
        alt="Golden Boot"
        className="trophy"
      />

    </header>
  );
}

export default Header;
