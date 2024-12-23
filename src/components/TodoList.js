import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className={TodoList}
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={56}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );
};
export default React.memo(TodoList);
