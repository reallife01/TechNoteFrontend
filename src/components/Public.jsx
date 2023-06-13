import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Lareal Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Lagos City, Lareal Repairs provides a trained staff
          ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
        Lareal Repairs
          <br />
          No 2, computer village,
          <br />
          Lagos City, Nigeria
          <br />
          <a href="tel:+8145647383">(814) 555-4444</a>
        </address>
        <br />
        <p>Owner: Ajibole james</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
};
export default Public;