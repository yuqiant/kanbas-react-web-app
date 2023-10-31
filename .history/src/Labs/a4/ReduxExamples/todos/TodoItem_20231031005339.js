function TodoItem({
    todo,
    deleteTodo,
    setTodo
}) {
    return (
        <li key={todo.id} className="list-group-item">
