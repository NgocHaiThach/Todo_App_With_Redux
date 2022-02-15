import { combineReducers } from 'redux';
import filtersReducer from '../components/Filters/FiltersSlice';
import todosReducer from '../components/TodoList/TodosSlice';

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todosReducer,
})

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todosReducer(state.todoList, action),
//     }
// }

export default rootReducer;