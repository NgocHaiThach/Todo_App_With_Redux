export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoList = (idTodo) => {
    return {
        type: 'todoList/toggleTodo',
        payload: idTodo,
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (status) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: status
    }
}