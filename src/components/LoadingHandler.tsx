"use client"
import React from 'react';
import { useLoading } from '@/context/LoadingContext';
import Loading from '@/components/Loading';

const LoadingHandler = () => {
  const { loading } = useLoading();
  return loading ? <Loading /> : null;
};

export default LoadingHandler;
