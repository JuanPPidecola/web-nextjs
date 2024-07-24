"use client";

import CardBoxClient from '@/components/CardBox/Client'
import SectionMain from '@/components/Section/Main';
import SectionTitleLineWithButton from '@/components/Section/TitleLineWithButton';
import { useSampleClients } from '@/hooks/sampleData';
import { Client } from '@/interfaces'
import { mdiAccount, mdiAccountMultiple, mdiChartTimelineVariant } from '@mdi/js';
import React from 'react'

function Users() {
  const { clients } = useSampleClients();

  const clientsListed = clients.slice(0, 4);
  return (
    <SectionMain>
    <SectionTitleLineWithButton
      icon={mdiAccountMultiple}
      title="Usuarios"
      main
    >
    </SectionTitleLineWithButton>
    <div className="grid grid-cols-1 gap-6 mb-6">
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
    <div className="flex flex-col justify-between">
      {clientsListed.map((client: Client) => (
        <CardBoxClient key={client.id} client={client} />
      ))}
    </div>
    </div>
    </SectionMain>
  )
}

export default Users