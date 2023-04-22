import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext, userAppContext } from '../../context/appContext.js'
import Wrapper from '../../assets/wrappers/DashboardFormPage.js'

const AddJob = () => {
  const { showAlert, displayAlert, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, handleChange, clearValues, isLoading, createJob } = useAppContext()

  const handleSubmit = e => {
    e.preventDefault()
    // if(!position || !company || !jobLocation){
    //   displayAlert()
    //   return 
    // }
    if(isEditing){
      return
    }
    createJob()
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }

  return <Wrapper>
    <form className="form">
      <h3>{isEditing? 'edit job':'add job'}</h3>
      {showAlert && <Alert />}
      <div className="form-center">
        <FormRow type="text" name="position" value={position} handleChange={handleJobInput}/>
        <FormRow type="text" name="company" value={company} handleChange={handleJobInput}/>
        <FormRow type="text" labelText='job location' name="jobLocation" value={jobLocation} handleChange={handleJobInput}/>

        <FormRowSelect name="status" value={status} list={statusOptions} handleChange={handleJobInput}/>
        <FormRowSelect labelText='job type' name='jobType' value={jobType} list={jobTypeOptions} handleChange={handleJobInput}/>
      </div>
      <div className="flex-box">
          <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>
            submit
          </button>
          <button className="btn btn-block clear-btn" onClick={(e) => {
            e.preventDefault()
            clearValues()
          }}>
            clear
          </button>
        </div>
    </form>
  </Wrapper>
}

export default AddJob