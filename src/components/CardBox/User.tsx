import { mdiCheckDecagram } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import { useAppSelector } from '../../stores/hooks'
import CardBox from '.'
import FormCheckRadio from '../Form/CheckRadio'
import PillTag from '../PillTag'
import UserAvatarCurrentUser from '../UserAvatar/CurrentUser'

type Props = {
  className?: string
}

const CardBoxUser = ({ className }: Props) => {
  const userName = "AdminPidecola"
  return (
    <CardBox className={className}>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
        <UserAvatarCurrentUser className="mb-6 lg:mb-0 lg:mx-12" />
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
            <Formik
              initialValues={{
                notifications: ['1'],
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormCheckRadio type="switch" label="Notifications">
                  <Field type="checkbox" name="notifications" value={'1'} />
                </FormCheckRadio>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default CardBoxUser
