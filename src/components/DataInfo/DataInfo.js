const DataInfo = ({ data, currentPage, lastPage }) => {
  return (
    <div className="text-center">
      <h1 className="text-center p-5 text-3xl font-mono">{data.repos_url}</h1>
      <p>User: {data.login}</p>
      {data.public_repos && <p>Public repos: {data.public_repos}</p>}
      {data.issues && <p>Number of issues: {data.issues}</p>}
      <p>
        Page: {currentPage} of {lastPage}
      </p>
    </div>
  );
};

export default DataInfo;
