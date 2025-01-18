import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { selectCount } from '../redux/selectors';

export function Counter() {
  console.log('render Counter', Date.now());
  const
    count = useSelector(selectCount),
    dispatch = useDispatch();
  return <fieldset>
    <legend>Counter</legend>
    <button onClick={() => dispatch(decrement())}>-</button>
    {count}
    <button onClick={() => dispatch(increment())}>+</button>
  </fieldset>
}