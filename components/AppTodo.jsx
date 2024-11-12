function AppTodo() {
  return (
    <div className="container">
      <div className="row la-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Text Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary la-btn">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;