const Pagination = (props) => {
  return (
    <div className="flex justify-center mb-10">
      <button
        onClick={props.onPreviousPageHandler}
        className="my-10 text-neutral-50 rounded-full bg-blue-600 p-1 w-32"
      >
        pre
      </button>
      <button
        onClick={props.onNextPageHandler}
        className="my-10 text-neutral-50 rounded-full bg-blue-600 p-1 w-32"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
