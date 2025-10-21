import styles from "./TodoItem.module.css";

function TodoItem({todoName,dueDate,onDeleteClick}){
    return(
        <div className={styles.container}>
            <div className='row kg-row'>
                <div className='col-6 input-btn'>{ todoName }</div>
                <div className='col-4 input-btn'>{ dueDate }</div>
                <div className='col-1'>
                    <button className='btn btn-danger kg-button' onClick={() => onDeleteClick(todoName)}>Delete</button>
                </div>
            </div>
        </div>

    )
};

export default TodoItem;