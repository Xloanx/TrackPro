import React from 'react';
import { Box, Card } from '@radix-ui/themes';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const DailyIssueActionsChart = ({issues}) => {

  // Helper function to format the date to 'YYYY-MM-DD'
  const formatDate = (dateString) => dateString.split('T')[0];
  
  // Initialize an empty object to store counts
  const statusCounts = {};
  
  // Iterate through each issue
  issues.forEach(issue => {
      const date = formatDate(issue.updatedAt);
      if (!statusCounts[date]) {
          statusCounts[date] = { day: date, open: 0, resolved: 0, in_progress: 0, closed: 0 };
      }
      // Increment the count for the corresponding status
      switch (issue.status) {
          case 'OPEN':
              statusCounts[date].open++;
              break;
          case 'RESOLVED':
              statusCounts[date].resolved++;
              break;
          case 'IN_PROGRESS':
              statusCounts[date].in_progress++;
              break;
          case 'CLOSED':
              statusCounts[date].closed++;
              break;
      }
  });
  
  // Convert the statusCounts object to an array of objects
  //const data = Object.values(statusCounts);
  
  // Log the result
  //console.log(data);

  const data = [
    { "day": "2024-06-03", "open": 22, "resolved": 12, "in_progress": 16, "closed": 8 },
    { "day": "2024-06-04", "open": 12, "resolved": 3, "in_progress": 15, "closed": 6},
    { "day": "2024-06-05", "open": 33, "resolved": 8, "in_progress": 22, "closed": 1 },
    { "day": "2024-06-07", "open": 12, "resolved": 17, "in_progress": 15, "closed": 10 },
    { "day": "2024-06-10", "open": 1,  "resolved": 12, "in_progress": 0, "closed": 5 }
]

  return (
    <Box width="100%" className='max-w-full'>

      <Card>
          <div className='font-bold text-lg mb-2'>Daily Creation of Issues</div>
            
          <ResponsiveContainer height={250} width="100%">
            <LineChart data={data} margin={{ right: 25, top: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" interval='preserveEnd' />
              <YAxis interval='preserveEnd' />
              <Tooltip />
              <Line type="monotone" dataKey="open" stroke="#FF8042" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="resolved" stroke="#82ca9d" /> 
              <Line type="monotone" dataKey="in_progress" stroke="#FFBB28" /> 
              <Line type="monotone" dataKey="closed" stroke="#0088FE" /> 
            </LineChart>
          </ResponsiveContainer>
      </Card>
      </Box>
  )
}

export default DailyIssueActionsChart

