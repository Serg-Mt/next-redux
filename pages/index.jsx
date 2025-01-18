import { Counter } from '../components/counter';
import { NanoCounter } from '../components/nanostore-counter';
import { ToDo } from '../components/todo';

export default function Page() {
  return <>
    <NanoCounter />
    <NanoCounter />
    <ToDo />
    <ToDo />
    <Counter />
    <Counter />
  </>
}