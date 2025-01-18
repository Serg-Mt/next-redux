

import { useStore } from '@nanostores/react'
import { $counter, decrement, increment } from '../store/counter';

export function NanoCounter() {
  console.log('render NanoCounter', Date.now());
  const
    count = useStore($counter);
  return <fieldset>
    <legend>Nanostores Counter</legend>
    <button onClick={() => decrement()}>-</button>
    {count}
    <button onClick={() => increment()}>+</button>
  </fieldset>
}