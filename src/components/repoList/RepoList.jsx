import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReadMe, fetchRepos } from "../../redux/thunk/repoThunk";
import ListItem from "./ListItem";
import "./repolist.css";

const RepoList = () => {
  // useDispatch så vi kan dispatcha våra API-anrop.
  const dispatch = useDispatch();
  // destructing allt från state.repos.
  const { repos, readmes, reposStatus, readmesStatus, error } = useSelector(
    (state) => state.repos
  );

  useEffect(() => {
    // Om våran reposStatus är idle så körs fetchRepos.
    if (reposStatus === "idle") {
      dispatch(fetchRepos());
    }
  }, [reposStatus, dispatch]);

  useEffect(() => {
    /* Om reposStatus är secceeded dvs att den är klar och har lyckats samt att readmesStatis är idle */
    if (reposStatus === "succeeded" && readmesStatus === "idle") {
      repos.forEach((repo) => {
        // om det inte finns någon readme för ett repo så körs den till alla har en readme med fetchRreadMe och repo namnet.
        if (!readmes[repo.name]) {
          dispatch(fetchReadMe(repo.name));
        }
      });
    }
  }, [repos, reposStatus, readmesStatus, readmes, dispatch]);

  // Om status är loading så skrivs det u.
  if (reposStatus === "loading" || readmesStatus === "loading") {
    return <h1 className="loading-msg">Loading....</h1>;
  }
  // Om status är failed så skrivs det ut att ett fel uppstod  samt error medelande som vi får från våran state.
  if (reposStatus === "failed" || readmesStatus === "failed") {
    return <h1 className="failed-msg">ett fel uppstod... {error}</h1>;
  }
  // Skapar en array så at vi kan anända array metoder i listitem komponenten.
  const readmeArray = Object.entries(readmes);
  console.log(readmes);
  console.log(readmeArray);

  return <ListItem readmeArray={readmeArray} />;
};

export default RepoList;
