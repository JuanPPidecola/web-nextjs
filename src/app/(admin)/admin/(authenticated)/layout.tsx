"use client";

import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import menuAside from "../../../../menuAside";
import menuNavBar from "../../../../menuNavBar";
import Icon from "../../../../components/Icon";
import NavBar from "../../../../components/NavBar";
import NavBarItemPlain from "../../../../components/NavBar/Item/Plain";
import AsideMenu from "../../../../components/AsideMenu";
import FooterBar from "../../../../components/FooterBar";
import FormField from "../../../../components/Form/Field";
import { Field, Form, Formik } from "formik";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function LayoutAuthenticated({ children }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false);
      setIsAsideLgActive(false);
    };

    // This effect will run on route changes
    handleRouteChangeStart();
  }, [pathname]);

  const layoutAsidePadding = "xl:pl-60";

  return (
    <div className={`overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
          }`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <Icon
              path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger}
              size="24"
            />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <Icon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain useMargin>
            <Formik
              initialValues={{
                search: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  <Field name="search" placeholder="Search" />
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
        <FooterBar>Invierte en Pidecola</FooterBar>
      </div>
    </div>
  );
}
