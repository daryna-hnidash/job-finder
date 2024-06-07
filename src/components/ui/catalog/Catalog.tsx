import { IJob } from '@/types/job.interface';
import React from 'react';
import { JobCard } from '../JobCard/JobCard';

type Props = {
  jobs: IJob[];
};

const Catalog: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      {jobs.map((item) => (
        <React.Fragment key={item.job_id}>
          <JobCard job={item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Catalog;
