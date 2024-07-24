"use client";

import {
  mdiFingerprint,
  mdiRoadVariant,
  mdiBagChecked,
  mdiAccountMultiple,
  mdiAccountReactivate,
  mdiSafeSquareOutline,
  mdiInformation,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from "@mdi/js";
import Head from "next/head";
import React, { useState } from "react";
import type { ReactElement } from "react";
import Button from "../../../../../components/Button";
import SectionMain from "../../../../../components/Section/Main";
import SectionTitleLineWithButton from "../../../../../components/Section/TitleLineWithButton";
import CardBoxWidget from "../../../../../components/CardBox/Widget";
import {
  useSampleClients,
  useSampleTransactions,
} from "../../../../../hooks/sampleData";
import CardBoxTransaction from "../../../../../components/CardBox/Transaction";
import { Client, Transaction } from "../../../../../interfaces";
import CardBoxClient from "../../../../../components/CardBox/Client";
import SectionBannerStarOnGitHub from "../../../../../components/Section/Banner/StarOnGitHub";
import CardBox from "../../../../../components/CardBox";
import { sampleChartData } from "../../../../../components/ChartLineSample/config";
import ChartLineSample from "../../../../../components/ChartLineSample";
import NotificationBar from "../../../../../components/NotificationBar";
import TableSampleClients from "../../../../../components/Table/SampleClients";

const DashboardPage = () => {
  const { clients } = useSampleClients();
  const { transactions } = useSampleTransactions();

  const clientsListed = clients.slice(0, 4);

  const [chartData, setChartData] = useState(sampleChartData());

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault();

    setChartData(sampleChartData());
  };

  return (
    <>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title="Overview"
          main
        >
        </SectionTitleLineWithButton>

        <NotificationBar color="contrast" icon={mdiInformation}>
          <b>Los Rendimientos</b> son con respecto al mes anterior.
        </NotificationBar>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="3%"
            trendType="up"
            trendColor="success"
            icon={mdiFingerprint}
            iconColor="contrast"
            number={512}
            numberSuffix=" tnCO2eq"
            label="Huella de Carbono Reducida"
          />
          <CardBoxWidget
            trendLabel="16%"
            trendType="up"
            trendColor="success"
            icon={mdiRoadVariant}
            iconColor="contrast"
            number={7770}
            numberSuffix=" Km"
            label="Km Recorridos"
          />
          <CardBoxWidget
            trendLabel="15%"
            trendType="up"
            trendColor="success"
            icon={mdiBagChecked}
            iconColor="contrast"
            number={2564}
            label="Total de Viajes"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            trendType="up"
            trendColor="success"
            icon={mdiAccountMultiple}
            iconColor="contrast"
            number={14287}
            label="Total Usuarios"
          />
          <CardBoxWidget
            trendLabel="10%"
            trendType="up"
            trendColor="success"
            icon={mdiAccountReactivate}
            iconColor="contrast"
            number={7770}
            label="Total Usuarios Activos"
          />
          <CardBoxWidget
            trendLabel="6%"
            trendType="up"
            trendColor="success"
            icon={mdiSafeSquareOutline}
            iconColor="contrast"
            number={25676}
            numberPrefix="$"
            label="Dinero Ahorrado"
          />
        </div>
        <div className="py-4">
          <SectionTitleLineWithButton
            icon={mdiChartTimelineVariant}
            title="Usuarios Destacados"
            main
          >
          </SectionTitleLineWithButton>
        </div>
        <NotificationBar color="contrast" icon={mdiInformation}>
          <b>Los Viajes</b>  mostrados son los completados el mes anterior.
        </NotificationBar>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>


        <SectionTitleLineWithButton icon={mdiChartPie} title="Dinero Facturado">
          <Button icon={mdiReload} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton>
        <NotificationBar color="contrast" icon={mdiInformation}>
          <b>El Dinero Facturado</b>  se muestra en relación dinero/día de los últimos 30 días.
        </NotificationBar>
        <CardBox className="mb-6">
          {chartData && <ChartLineSample data={chartData} />}
        </CardBox>

        {/* <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />


        <CardBox hasTable>
          <TableSampleClients />
        </CardBox> */}
      </SectionMain>
    </>
  );
};

export default DashboardPage;
