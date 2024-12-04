import Layout from '@/components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    axios.get('/api/products').then(response => {
      console.log(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white rounded-md py-1 px-2"
        href={'/products/new'}
      >
        Add New Product
      </Link>
    </Layout>
  );
}
