"use client";

import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../../../../components/Button'
import CardBox from '../../../../components/CardBox'
import SectionFullScreen from '../../../../components/Section/FullScreen'
import { Field, Form, Formik } from 'formik'
import FormField from '../../../../components/Form/Field'
import FormCheckRadio from '../../../../components/Form/CheckRadio'
import Divider from '../../../../components/Divider'
import Buttons from '../../../../components/Buttons'
import { useRouter } from 'next/navigation'

type LoginForm = {
  login: string
  password: string
  remember: boolean
}

export default function LoginPage () {
  const router = useRouter()

  const handleSubmit = (formValues: LoginForm) => {
    router.push('/admin/dashboard')
    console.log('Form values', formValues)
  }

  const initialValues: LoginForm = {
    login: 'admin@pidecola.app',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  return (
    <>
      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <img
            className="text-cennter w-40 py-4 md:ml-1 ml-24"
            alt="Logo Pidecola"
            src="/logos/logoCompleto.png"
          ></img>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Correo" help="Introduce tu correo">
                <Field name="login" />
              </FormField>

              <FormField label="Contraseña" help="Introduce tu Contraseña">
                <Field name="password" type="password" />
              </FormField>

              <FormCheckRadio type="checkbox" label="Recordar">
                <Field type="checkbox" name="Recordar" />
              </FormCheckRadio>

              <Divider />

              <Buttons>
                <Button type="submit" label="Iniciar Sesión" className='bg-primary text-white'/>
                <Button href="/" label="Cerrar"  outline />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}
