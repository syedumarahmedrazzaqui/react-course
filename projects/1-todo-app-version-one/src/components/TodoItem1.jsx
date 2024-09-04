function TodoItem1(){
    let todoitem = 'Buy Milk'
    let todoDate = '04/10/2023'
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-6 text-start">
                    {todoitem}
                </div>
                <div className="col-4 text-start">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem1;