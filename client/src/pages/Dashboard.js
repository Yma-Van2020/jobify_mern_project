import { useEffect } from 'react'

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1')
      const data = await response.json()
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>Dashboard page</div>
  )
}

export default Dashboard