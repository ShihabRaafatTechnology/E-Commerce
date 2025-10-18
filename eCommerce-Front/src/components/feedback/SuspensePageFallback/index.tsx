import React, { Suspense } from 'react';
import LottieHandler from '../lottieHandler';



const SuspensePageFallback = ({children}: {children: React.ReactNode}) => {
  return (
  <Suspense fallback={
    <LottieHandler type="loading" message="Loading please wait..."/>
  }>{children}</Suspense>
  );
};

export default SuspensePageFallback;
