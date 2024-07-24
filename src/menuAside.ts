import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiAccountMultiple,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/admin/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Usuarios',
    icon: mdiAccountMultiple,
    menu: [
      {
        label: 'Crear Usuario',
        href: '/admin/users/create',
      },
      {
        label: 'Usuarios',
        href: '/admin/users',
      },
    ],
  },
  {
    href: '/admin/notifications',
    label: 'Notificaciones',
    icon: mdiSquareEditOutline,
  },
]

export default menuAside
