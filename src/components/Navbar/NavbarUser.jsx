import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/thunk/userThunk";
import "./navbaruser.css";

const NavbarUser = () => {
  // Hämtar useDispatch så vi kan använada den i våran useEffect.
  const dispatch = useDispatch();
  /* Hämta alla information, våran userStatus för att useEffect kan veta när den ska köra
      user med all data från github api som handlar om user, dvs min profil.
      hämtar även errors om något blir fel när vi hämtar våran data från api:n */
  const { userStatus, user, error } = useSelector((state) => state.user);

  /* useEffect är sideffekten av att userStatus eller dispatch ändras, om userStatus ändras
  och är idle så kommer vi anropa fetchusers med dispatch.*/

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);
  /* Det finns en status som man använder sig av som heter loading, den visas när
  apin har börjat köra och inte blivit successed eller failed. så för att meddela användaren
  så skrivs loading... ut om UserStatus är loading. */
  if (userStatus === "loading") {
    return <h1 className="loading">Loading....</h1>;
  }
  /*detta är efter loading om API anropet inte skulle lyckas, meddelar användaren att något har
  gått fel och vad som har gått fel med våran error som vi hämtade tidigare. */
  if (userStatus === "failed") {
    return <h1>ett fel uppstod... {error}</h1>;
  }
  /*Om allt har gått som det ska så är userStatus succeeded nu och all data som vi vill
  använda oss av kan vi använda genom att skriva user. den data vi vill hämta som
  t.ex user.avatar_url hämtar min avatar från github.  */
  return (
    <section className="github-container">
      <img
        className="user-avatar"
        src={user.avatar_url}
        alt={`${user.login} Github avatar.`}
      />
      <article className="user-info-container">
        <h3 className="user-login">{user.login}</h3>
        <p className="followers">Followers: {user.followers}</p>
      </article>
    </section>
  );
};

export default NavbarUser;
