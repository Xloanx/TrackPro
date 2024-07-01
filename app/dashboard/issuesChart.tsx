import React from 'react';
import { Box, Card } from '@radix-ui/themes';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Label,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';


const IssuesChart = ({issues}) => {

  const statuses = ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"];

  const doStatusCount = (IssuesArray, statusArray) => {
      const statusCount = IssuesArray.reduce((acc, issue) => {
          acc[issue.status] = (acc[issue.status] || 0) + 1;
          return acc;
      }, {});
    
      return statusArray.reduce((acc, status) => {
                  acc[status] = statusCount[status] || 0;
                  return acc;
              }, {});
  };
  // const data = [
  //   { label: 'Open', value: doStatusCount(issues, statuses).OPEN },
  //   { label: 'In Progress', value: doStatusCount(issues, statuses).IN_PROGRESS },
  //   { label: 'Closed', value: doStatusCount(issues, statuses).CLOSED },
  //   { label: 'Resolved', value: doStatusCount(issues, statuses).RESOLVED },
  // ];

  const data = [
    { label: 'Open', value: 216 },
    { label: 'In Progress', value: 32 },
    { label: 'Closed', value: 84 },
    { label: 'Resolved', value: 311 },
  ];
  console.log(data)
    return (
      <Box width="400px">

      <Card>
          <div className='font-bold text-lg mb-2'>Issue Status Distribution</div>
            
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    barSize={40}
                    style={{ fill: 'var(--accent-9)' }}
                  />
                </BarChart>
              </ResponsiveContainer>
      </Card>
      </Box>
            
       
      )
}

export default IssuesChart