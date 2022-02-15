const initState = [
    { id: 1, name: 'Lau nha', completed: false, priority: 'Medium' },
    { id: 2, name: 'Hoc bai', completed: true, priority: 'High' },
    { id: 3, name: 'Choi game', completed: false, priority: 'Low' },
    { id: 4, name: 'Nghe nhac', completed: false, priority: 'Medium' },
]


const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleTodo':
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo)
        default:
            return state
    }
}

export default todosReducer;