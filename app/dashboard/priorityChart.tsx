import React from 'react';
import { Box, Card } from '@radix-ui/themes';
import {
    ResponsiveContainer,
    PieChart,
    Tooltip,
    Pie,
    Cell
  } from 'recharts';

const PriorityChart = ({issues}) => {

  const priorities = ["LOW", "MEDIUM", "HIGH"];

  const doPriorityCount = (IssuesArray, priorityArray) => {

    const priorityCount = IssuesArray.reduce((acc, issue) => {
      acc[issue.priority] = (acc[issue.priority] || 0) + 1;
      return acc;
  }, {});
  
  return priorityArray.reduce((acc, priority) => {
      acc[priority] = priorityCount[priority] || 0;
      return acc;
  }, {});
  };

  const prioritiesCounts = doPriorityCount(issues, priorities);

  console.log(prioritiesCounts)
    const data = [
        { label: 'Low', value: prioritiesCounts.LOW },
        { label: 'Medium', value: prioritiesCounts.MEDIUM },
        { label: 'High', value: prioritiesCounts.HIGH },
      ];
    // const data = [
    //     { label: 'Low', value: 68},
    //     { label: 'Medium', value: 33 },
    //     { label: 'High', value: 43 },
    //   ];
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  return (
    <Box width="400px">
    <Card>
        <div className='font-bold text-lg mb-2'>Issue Priority Distribution</div>

          <PieChart width={300} height={300}>
          <Tooltip />
            <Pie
              data={data}
              // cx="50%"
              // cy="50%"
              // outerRadius={80}
              labelLine={false}
              label
              cx={180}
              cy={140}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              legendType='rect'
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>


          
          </PieChart>
        
    </Card>
    </Box>
  )
}

export default PriorityChart