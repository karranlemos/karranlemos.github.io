import { useRef, useState, type Dispatch, type RefObject, type SetStateAction } from 'react'

export function useStateRef<T>(initialValue: T): [T, Dispatch<SetStateAction<T>>, RefObject<T>] {
  const [state, setState] = useState<T>(initialValue)
  const internalRef = useRef<T>(state)
  const exposedRef = useRef<T>(state)

  const setStateAndRef: Dispatch<SetStateAction<T>> = (value) => {
    const next = value instanceof Function
      ? value(internalRef.current)
      : value
    internalRef.current = next
    exposedRef.current = next
    setState(next)
  }

  return [state, setStateAndRef, exposedRef]
}
