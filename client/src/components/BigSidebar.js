import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from '../components/Logo'
import NavLinks from './NavLinks'
import { useAppContext } from '../context/appContext'

const BigSidebar = () => {
  const {showSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar? 'sidebar-container show-sidebar':'sidebar-container'}>
      <div className="content">
        <header>
          <Logo />
        </header>
        <NavLinks toggleSidebar={toggleSidebar}/>
      </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar