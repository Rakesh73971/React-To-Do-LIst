import TodoItem from "./TodoItem";

function TodoItems({todoItems,onDeleteClick}){
    return (
        <div className='contaier'>
            {todoItems.map(item => <TodoItem todoName={item.name} dueDate={item.duedate} onDeleteClick={onDeleteClick}/>)}
        </div>
    )
};

export default TodoItems;