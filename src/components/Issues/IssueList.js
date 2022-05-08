import Card from "../UI/Card";
import Pagination from "../UI/Pagination";

const IssueList = (props) => {
  return (
    <div>
      <div className={"grid grid-cols-2 gap-1 mb-10"}>
        {props.issues.map((issue) => (
          <Card key={issue.id} data={issue} onClick={props.onClick} />
        ))}
      </div>
      {props.issues.length && (
        <Pagination
          onPreviousPageHandler={props.onPreviousPageHandler}
          onNextPageHandler={props.onNextPageHandler}
        />
      )}
    </div>
  );
};

export default IssueList;
