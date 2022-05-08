const CardMini = ({ data, onClick }) => {
  return (
    <>
      <div
        key={data.id}
        onClick={() => onClick(data.name, data.owner.login)}
        className="hover:cursor-pointer hover:bg-gray-100 hover:border-blue-300 rounded-lg bg-gray-300 border-4 m-6 p-5 border-blue-500"
      >
        <div>Name: {data.name}</div>
        <div>Id: {data.id}</div>
      </div>
    </>
  );
};
export default CardMini;
