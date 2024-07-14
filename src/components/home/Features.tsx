"use client";

import { BanknotesIcon, ClockIcon, GlobeAmericasIcon, LockOpenIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Pidecola Cuando Quieras',
    description:
      'Busca, reserva y confirma al instante, todo desde tu teléfono. ¡No más esperas!',
    icon: ClockIcon,
  },
  {
    name: '¡Ahorra dinero!',
    description:
      'Ahorra mensualmente los costos por transporte y gana tiempo.',
    icon: BanknotesIcon,
  },
  {
    name: 'Libertad para escoger',
    description:
      'Selecciona el tipo de vehículo compartido para tu viaje y reservalo para las horas (o días) que necesites.',
    icon: LockOpenIcon,
  },
  {
    name: 'Reduce Tu Huella De Carbono',
    description:
      'ArAl hacer uso de la aplicación podrás reducir tu huella de carbono considerablemente.',
    icon: GlobeAmericasIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Beneficios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sácale provecho a tu rutina diaria
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
