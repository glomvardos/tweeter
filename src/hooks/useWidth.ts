import { useEffect, useState } from 'react'

const useWidth = () => {
  const [width, setWidth] = useState<number | null>(null)

  const getWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    getWindowWidth()
    window.addEventListener('resize', getWindowWidth)
    return () => window.removeEventListener('resize', getWindowWidth)
  }, [])

  return { width }
}

export default useWidth
