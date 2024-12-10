import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(text);
      setText('');
      // submit 이벤트는 브라우저에서 새로고침을 발생시킴.
      e.preventDefault();
    },
    [onInsert, text],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={text}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
