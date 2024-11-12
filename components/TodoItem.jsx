function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container text-start">
      <div className="row la-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 text-center">
          <button className="btn btn-danger la-btn">REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
