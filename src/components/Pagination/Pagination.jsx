import "./Pagination.scss";

const Pagination = ({ changePage, setChangePage, totalPage }) => {
  return (
    <div className="pagination">
      <button
        disabled={changePage === 1}
        onClick={() => setChangePage(changePage - 1)}
      >{`<`}</button>
      <span>
        {" "}
        {changePage} of {totalPage}{" "}
      </span>
      <button
        disabled={changePage === totalPage}
        onClick={() => setChangePage(changePage + 1)}
      >{`>`}</button>
    </div>
  );
};

export default Pagination;
