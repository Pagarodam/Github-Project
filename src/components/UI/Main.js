import { useState } from "react";
import IssueList from "../Issues/IssueList";
import RepoList from "../Repos/RepoList";
import Form from "./Form";
import Modal from "./Modal";

const FIRST_PAGE = 1;
const ELEMENTS_PER_PAGE = 30;

const Main = () => {
  const [userData, setUserData] = useState("");
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [comments, setComments] = useState(null);

  const [modalData, setModalData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [repositoryInput, setRepositoryInput] = useState("");
  const [error, setError] = useState(null);
  const [repoUrl, setRepoUrl] = useState("");
  const [issueUrl, setIssueUrl] = useState("");

  const [page, setPage] = useState(FIRST_PAGE);
  const [lastPage, setLastPage] = useState(FIRST_PAGE);

  const nextPageHandler = () => {
    const pageToNavigate = page < lastPage ? page + 1 : page;
    if (repos.length) {
      getRepos(`${repoUrl}?page=${pageToNavigate}`);
    }
    if (issues.length) {
      getIssues(`${issueUrl}?page=${pageToNavigate}`);
    }
    setPage(pageToNavigate);
  };

  const previousPageHandler = () => {
    const pageToNavigate = page > 1 ? page - 1 : page;
    if (repos.length) {
      getRepos(`${repoUrl}?page=${pageToNavigate}`);
    }
    if (issues.length) {
      getIssues(`${issueUrl}?page=${pageToNavigate}`);
    }
    setPage(pageToNavigate);
  };

  const userNameHandlerSearch = (event) => {
    setUserInput(event.target.value);
  };

  const repositoryHandlerSearch = (event) => {
    setRepositoryInput(event.target.value);
  };

  const getRepoInfo = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setError(null);
          const issuesUrl = res.issues_url.split("{")[0];
          getIssues(issuesUrl);
          setIssueUrl(issuesUrl);
          console.log("repoinfo", res);
          setPage(FIRST_PAGE);
          setRepos([]);
          setUserInput("");
          setLastPage(Math.ceil(res.open_issues_count / ELEMENTS_PER_PAGE));
          setRepositoryInput("");
        }
      });
  };

  const getUserRepos = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setUserData(res);
          getRepos(res.repos_url);
          setRepoUrl(res.repos_url);
          setPage(FIRST_PAGE);
          setLastPage(Math.ceil(res.public_repos / ELEMENTS_PER_PAGE));
          setError(null);
          setIssues([]);
          setError(null);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(FIRST_PAGE);
    if (!repositoryInput && userInput) {
      getUserRepos(userInput);
    } else if (repositoryInput && userInput) {
      getRepoInfo(userInput, repositoryInput);
    }
  };

  const getRepos = (urlRepos) => {
    fetch(urlRepos)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setRepos(res);
          setError(null);
        }
      });
  };

  const getIssues = (urlIssues) => {
    fetch(urlIssues)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setIssues(res);
          setError(null);
        }
      });
  };

  const clickRepository = (repoName, userName) => {
    getRepoInfo(userName, repoName);
  };

  const clickIssue = (event) => {
    getComments(event.comments_url);
    setModalData(event);
  };

  const getComments = (urlComments) => {
    fetch(urlComments)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setComments(res);
          setError(null);
        }
      });
  };

  const closeMessageHandler = () => {
    setModalData(null);
  };

  return (
    <>
      {modalData && (
        <Modal
          data={modalData}
          onClose={closeMessageHandler}
          comments={comments}
        >
          <div>
            <p className="text-center p-5 text-3xl font-mono">
              {modalData.title}
            </p>
          </div>
          {modalData.body && (
            <div>
              <h1 className="text-center pt-8 text-2xl font-mono">
                Description
              </h1>
              <p className="p-4">{modalData.body}</p>
            </div>
          )}

          {!!comments?.length && (
            <ul>
              <h1 className="text-center pt-8 text-2xl font-mono">Comments</h1>
              {comments.map((comment) => (
                <div className="border-2 rounded-lg m-3 p-3 border-blue-500 border-blue-700">
                  <p>
                    <b>Author:</b> {comment.user.login}
                  </p>
                  <p>
                    <b>Creation date: </b>
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                  <li className="p-4">{comment.body}</li>
                </div>
              ))}
            </ul>
          )}
          <button
            className="mb-6  ml-100 ml-6  text-neutral-50 rounded-full bg-blue-600 p-1 w-32"
            onClick={closeMessageHandler}
          >
            Cerrar
          </button>
        </Modal>
      )}
      <Form
        onSubmit={handleSubmit}
        userInput={userInput}
        userNameHandlerSearch={userNameHandlerSearch}
        repositoryInput={repositoryInput}
        repositoryHandlerSearch={repositoryHandlerSearch}
      />
      {error ? (
        <h1 className="text-center p-5 text-3xl font-mono">{error}</h1>
      ) : (
        <>
          {userData && (
            <RepoList
              data={userData}
              currentPage={page}
              lastPage={lastPage}
              onNextPageHandler={nextPageHandler}
              onPreviousPageHandler={previousPageHandler}
              repos={repos}
              onClick={clickRepository}
            />
          )}
          <div className="grid-cols-2">
            {issues.length && (
              <IssueList
                data={userData}
                currentPage={page}
                lastPage={lastPage}
                issues={issues}
                onClick={clickIssue}
                onNextPageHandler={nextPageHandler}
                onPreviousPageHandler={previousPageHandler}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
