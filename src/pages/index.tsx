import type { NextPage } from 'next'
import { Calendars } from 'components/Calendars'
import { Form } from 'components/Form'
import { Notifications } from 'components/Notifications'
import { RTE } from 'components/RTE'
import { Services } from 'components/Services'
import { Spotlight } from 'components/Spotlight'

const Home: NextPage = () => {
  return (
    <>
      <Services />
      <Form />
      <Notifications />
      <Calendars />
      <RTE />
      <Spotlight />
    </>
  )
}

export default Home
