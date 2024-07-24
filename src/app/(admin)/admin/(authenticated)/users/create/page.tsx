"use client";


import {
    mdiAccount,
    mdiAsterisk,
    mdiFormTextboxPassword,
    mdiGithub,
    mdiMail,
    mdiUpload,
  } from '@mdi/js'
  import { Formik, Form, Field } from 'formik'
  import Head from 'next/head'
  import type { ReactElement } from 'react'
  import Button from '../../../../../../components/Button'
  import Buttons from '../../../../../../components/Buttons'
  import Divider from '../../../../../../components/Divider'
  import CardBox from '../../../../../../components/CardBox'
  import CardBoxComponentBody from '../../../../../../components/CardBox/Component/Body'
  import CardBoxComponentFooter from '../../../../../../components/CardBox/Component/Footer'
  import FormField from '../../../../../../components/Form/Field'
  import FormFilePicker from '../../../../../../components/Form/FilePicker'
  import SectionMain from '../../../../../../components/Section/Main'
  import SectionTitleLineWithButton from '../../../../../../components/Section/TitleLineWithButton'
  import CardBoxUser from '../../../../../../components/CardBox/User'
  import type { UserForm } from '../../../../../../interfaces'
  import { getPageTitle } from '../../../../../../config'
  import { useAppSelector } from '../../../../../../stores/hooks'
  
  const ProfilePage = () => {
  
    const userForm: UserForm = {
      name: "Pidecola Admin",
      email: "admin@pidecola.app",
    }
  
    return (
      <>
        <Head>
          <title>{getPageTitle('Profile')}</title>
        </Head>
  
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiAccount} title="Crear Usuario" main>
          </SectionTitleLineWithButton>
  
          <CardBoxUser className="mb-6" />
  
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <CardBox className="mb-6">
                <FormField label="Avatar" help="Max 500kb">
                  <FormFilePicker label="Subir" color="info" icon={mdiUpload} />
                </FormField>
              </CardBox>
  
              <CardBox className="flex-1" hasComponentLayout>
                <Formik
                  initialValues={userForm}
                  onSubmit={(values: UserForm) => alert(JSON.stringify(values, null, 2))}
                >
                  <Form className="flex flex-col flex-1">
                    <CardBoxComponentBody>
                      <FormField
                        label="Nombre"
                        help="Introduce el nombre"
                        labelFor="nombre"
                        icons={[mdiAccount]}
                      >
                        <Field name="Nombre" id="Nombre" placeholder="Nombre" />
                      </FormField>
                      <FormField
                        label="Correo"
                        help="Introduce el correo"
                        labelFor="correo"
                        icons={[mdiMail]}
                      >
                        <Field name="correo" id="correo" placeholder="Correo" />
                      </FormField>
                    </CardBoxComponentBody>
                    <CardBoxComponentFooter>
                    </CardBoxComponentFooter>
                  </Form>
                </Formik>
              </CardBox>
            </div>
  
            <CardBox hasComponentLayout>
              <Formik
                initialValues={{
                  currentPassword: '',
                  newPassword: '',
                  newPasswordConfirmation: '',
                }}
                onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
              >
                <Form className="flex flex-col flex-1">
                  <CardBoxComponentBody>
                    <FormField
                      label="Usuario"
                      help="Introduce un Usuario"
                      labelFor="usuario"
                      icons={[mdiAsterisk]}
                    >
                      <Field
                        name="usuario"
                        id="usuario"
                      />
                    </FormField>
  
                    <Divider />
  
                    <FormField
                      label="Nueva Contraseña"
                      help="Introduce tu constraseña"
                      labelFor="newconstrasena"
                      icons={[mdiFormTextboxPassword]}
                    >
                      <Field
                        name="newconstrasena"
                        id="newconstrasena"
                        type="constrasena"
                        autoComplete="new-constrasena"
                      />
                    </FormField>
  
                    <FormField
                      label="Confirmar Contraseña"
                      help="Introduce tu constraseña una vez mas"
                      labelFor="newconstrasenaConfirmation"
                      icons={[mdiFormTextboxPassword]}
                    >
                      <Field
                        name="newconstrasenaConfirmation"
                        id="newconstrasenaConfirmation"
                        type="constrasena"
                        autoComplete="new-constrasena"
                      />
                    </FormField>
                  </CardBoxComponentBody>
  
                  <CardBoxComponentFooter>
                    <Buttons>
                      <Button color="info" type="submit" label="Crear" />
                      <Button color="info" label="Cancelar" outline />
                    </Buttons>
                  </CardBoxComponentFooter>
                </Form>
              </Formik>
            </CardBox>
          </div>
        </SectionMain>
      </>
    )
  }
  
  export default ProfilePage