import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'apps',
    title: 'Applications',
    subtitle: 'Custom made application designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'APPLICATIONS',
    children: [
      {
        id: 'apps.notes',
        title: 'Notes',
        type: 'item',
        icon: 'heroicons-outline:pencil-alt',
        url: '/apps/notes',
        translate: 'NOTES',
      },
    ],
  },
];

export default navigationConfig;
