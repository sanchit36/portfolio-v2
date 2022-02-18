import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <React.Fragment>
      <Head>
        <title>{slug} | Project</title>
      </Head>
    </React.Fragment>
  );
};

export default ProjectDetailsPage;
