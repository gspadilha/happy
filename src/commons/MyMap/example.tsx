import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const MyMap = useMemo(
  () =>
    dynamic(() => import('.'), {
      loading: () => <p>CARREGANDO...</p>,
      ssr: false,
    }),
  [],
);
