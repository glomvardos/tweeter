import PageTitle from '../../components/UI/PageTitle'
import SettingsForm from './components/SettingsForm'
import Divider from '../../components/UI/Divider'
import DeleteAccount from './components/DeleteAccount'

const Settings = () => {
  return (
    <div className='w-full max-w-[800px] mx-auto'>
      <PageTitle text='Settings'/>
      <SettingsForm/>
      <Divider/>
      <DeleteAccount/>
    </div>
  )
}

export default Settings
