import { useEffect, useRef } from 'react'

const useHorizontalScroll = (disable?: boolean) => {
  const elRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = elRef.current
    if (el && !disable) {
      const onWheel = (event: WheelEvent) => {
        if (event.deltaY === 0) return
        event.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + Math.sign(event.deltaY) * 50,
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [disable])
  return elRef
}

export default useHorizontalScroll
