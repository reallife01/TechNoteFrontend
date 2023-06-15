import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Welcome = () => {
    const { username, isManager, isAdmin} = useAuth()
    const date = new Date();
    const today = new Intl.DateTimeFormat("en-NG", {
        dateStyle: "full",
        timeStyle: "long",
    }).format(date);

    return (
        <section className="welcome">
            <p>{today}</p>

            <h1>Welcome {username} ! </h1>

            <p>
                <Link to="/dash/notes">View techNotes</Link>
            </p>
            <p>
                <Link to="/dash/notes/newNote">Add New techNote</Link>
            </p>

            {(isManager || isAdmin) &&<p><Link to="/dash/users">View User Settings</Link></p>}
        {(isManager || isAdmin) &&<p><Link to="/dash/users/newUser">Add New User</Link></p>}
        </section>
    );


};

export default Welcome;