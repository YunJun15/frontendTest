import React, { useEffect } from 'react';

const DataTransformer = () => {
  const userIds = ['U01', 'U02', 'U03'];
  const orderIds = ['T01', 'T02', 'T03', 'T04'];
  const userOrders = [
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
  ]
  const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
  const orderData = {
    'T01': { name: 'A', price: 499 },
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 },
    'T04': { name: 'D', price: 799 },
  };

  const result = userIds.map((userId) => {
    const orderIds = userOrders.find((item) => item.userId === userId)?.orderIds ?? [];
    const user = { id: userId, name: userData[userId] };
    const orders = orderIds.map((item) => ({ id: item, ...orderData[item] }));

    return { user, orders };
  });

  console.log('3. 實作 Data Transformer result', result)


  return (
    <>
      <div>3. 實作 Data Transformer</div>
    </>
  )
}

export default (DataTransformer);