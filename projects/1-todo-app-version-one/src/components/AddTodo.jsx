function AddTodo(){
    return (
    <div className="container ">
        <div className="row">
            <div className="col-6">
                <input type="text" class="py-1 form-control" placeholder="Enter Todo Here" />
            </div>
            <div className="col-4">
                <input type="date" className="py-1 form-control" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success px-4">Add</button>
            </div>
        </div>
    </div>
    );
}

export default AddTodo;