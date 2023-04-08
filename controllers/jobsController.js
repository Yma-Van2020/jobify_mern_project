const createJob = async (req, res) => {
  res.send('cj')
}
const getAllJobs = async (req, res) => {
  res.send('ga')
}
const deleteJob = async (req, res) => {
  res.send('dj')
}
const updateJob = async (req, res) => {
  res.send('uj')
}
const showStats = async (req, res) => {
  res.send('ss')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats}