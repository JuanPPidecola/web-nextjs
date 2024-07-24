"use client";

import {
  mdiAccount,
  mdiBallotOutline,
  mdiGithub,
  mdiMail,
  mdiSquareEditOutline,
  mdiUpload,
} from "@mdi/js";
import { Field, Form, Formik } from "formik";
import Head from "next/head";
import { ReactElement } from "react";
import Button from "../../../../../components/Button";
import Buttons from "../../../../../components/Buttons";
import Divider from "../../../../../components/Divider";
import CardBox from "../../../../../components/CardBox";
import FormCheckRadio from "../../../../../components/Form/CheckRadio";
import FormCheckRadioGroup from "../../../../../components/Form/CheckRadioGroup";
import FormField from "../../../../../components/Form/Field";
import FormFilePicker from "../../../../../components/Form/FilePicker";
import SectionMain from "../../../../../components/Section/Main";
import SectionTitle from "../../../../../components/Section/Title";
import SectionTitleLineWithButton from "../../../../../components/Section/TitleLineWithButton";
import { getPageTitle } from "../../../../../config";

const FormsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle("Forms")}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiSquareEditOutline}
          title="Notificaciones"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              fullname: "John Doe",
              email: "john.doe@example.com",
              phone: "",
              color: "green",
              textarea: "Hello",
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField
                label="Título"
                labelFor="titulo"
                help="Introduce el título de tu notificacion"
              >
                <Field name="titulo" placeholder="Título" id="titulo" />
              </FormField>

              <FormField label="Tipo" labelFor="tipo">
                <Field name="Tipo" id="tipo" component="select">
                  <option value="red">Recordatorio</option>
                  <option value="green">Información</option>
                  <option value="blue">Promoción</option>
                </Field>
              </FormField>

              <Divider />

              <FormField label="Descripción" hasTextareaHeight>
                <Field
                  name="descripcion"
                  as="textarea"
                  placeholder="Introduce el texto de tu notificación"
                />
              </FormField>

              <Divider />

              <FormField>
                <FormFilePicker label="Poster" color="info" icon={mdiUpload} />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Enviar" />
                <Button type="reset" color="info" outline label="Resetear" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

export default FormsPage;
