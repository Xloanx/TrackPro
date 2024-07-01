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


const IssuesChart = ({statusesCounts}) => {

  // const data = [
  //   { label: 'Open', value: statusesCounts.OPEN },
  //   { label: 'In Progress', value: statusesCounts.IN_PROGRESS },
  //   { label: 'Closed', value: statusesCounts.CLOSED },
  //   { label: 'Resolved', value: statusesCounts.RESOLVED },
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