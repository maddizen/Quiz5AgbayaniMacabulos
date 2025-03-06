import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Table from '../components/Table';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await axios.get('/api/products/');
      const userData = await axios.get('/api/users/');
      setProducts(productData.data);
      setUsers(userData.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="product-list">
        {products.map(product => <Card key={product.uuid} product={product} />)}
      </div>
      <h2>Users</h2>
      <Table users={users} />
    </div>
  );
};

export default Dashboard;
