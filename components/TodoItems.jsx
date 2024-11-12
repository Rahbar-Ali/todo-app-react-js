import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="container">
        <div className="row la-row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">25 / 10 / 2024</div>
          <div className="col-2">
            <button className="btn btn-danger la-btn">REMOVE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
