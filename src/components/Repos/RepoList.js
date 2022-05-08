import DataInfo from "../DataInfo/DataInfo";
import CardMini from "../UI/CardMini";
import Pagination from "../UI/Pagination";

const RepoList = (props) => {
  return (
    <>
      <div>
        <DataInfo
          data={props.data}
          currentPage={props.currentPage}
          lastPage={props.lastPage}
        />
        <div className="grid grid-cols-5 gap-2 mb-10">
          {props.repos.map((repo) => (
            <CardMini key={repo.id} data={repo} onClick={props.onClick} />
          ))}
        </div>
        {props.repos.length && (
          <Pagination
            onPreviousPageHandler={props.onPreviousPageHandler}
            onNextPageHandler={props.onNextPageHandler}
          />
        )}
      </div>
    </>
  );
};

export default RepoList;
