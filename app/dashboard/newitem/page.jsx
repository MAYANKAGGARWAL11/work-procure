"use client"
import React, { useState } from 'react';
import SideNav from '../_components/SideNav';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { supplier } from '@/utils/schema';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function Newitem() {
  const [supplierName, setSupplierName] = useState('');
  const [productInformation, setProductInformation] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [location, setLocation] = useState('');
  const [requiredFor, setRequiredFor] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Ensure that quantity is parsed correctly as an integer
      const parsedQuantity = parseInt(quantity, 10);
      if (isNaN(parsedQuantity)) {
        throw new Error('Quantity must be a valid number');
      }

      const resp = await db.insert(supplier)
        .values({
          supplierName,
          productInformation,
          category,
          quantity: parsedQuantity, // Ensure this is an integer
          timeline,
          location,
          requiredFor
        })
        .returning({ id:supplier.id });

      console.log('Inserted ID:', resp);
       router.push('/dashboard');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex'>
      <SideNav />
      <div className='flex-1 p-10'>
        <h2 className='font-bold text-4xl mb-10'>Add New Supplier</h2>
        <form onSubmit={handleSubmit} className='p-10 border rounded-xl'>
          {/* Name of Supplier */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Name of Supplier</label>
            <input
              type='text'
              placeholder='Adobe'
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              className='w-full border rounded-md p-2'
            />
          </div>

          {/* Product Information */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Product Information</label>
            <input
              type='text'
              placeholder='Adobe License'
              value={productInformation}
              onChange={(e) => setProductInformation(e.target.value)}
              className='w-full border rounded-md p-2'
            />
          </div>

          {/* Category */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full border rounded-md p-2'
            >
              <option>Software</option>
              {/* Add other categories here if needed */}
            </select>
          </div>

          {/* Quantity */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Quantity</label>
            <input
              type='number'
              placeholder='3'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='w-full border rounded-md p-2'
            />
          </div>

          {/* Timeline */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Timeline</label>
            <input
              type='date'
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className='w-full border rounded-md p-2'
            />
          </div>

          {/* Location */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='w-full border rounded-md p-2'
            >
              <option>N/A</option>
              {/* Add other locations here if needed */}
            </select>
          </div>

          {/* Required For */}
          <div className='mb-6'>
            <label className='block text-sm font-medium mb-2'>Required For</label>
            <input
              type='text'
              placeholder='New Project'
              value={requiredFor}
              onChange={(e) => setRequiredFor(e.target.value)}
              className='w-full border rounded-md p-2'
            />
          </div>

          {/* Submit Button */}
          <div className='mt-10 flex justify-end'>
            <Button type='submit' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newitem;
