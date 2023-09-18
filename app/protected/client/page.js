'use client';

import ProtectedComponent from "@/components/Protected";

const ProtectedClientPage = () => {
  return (
    <div>
      <h1>
        This is a <i style={{ color: 'red' }}>Client-Side</i> protected page
      </h1>

      <ProtectedComponent />
    </div>
  );
};

export default ProtectedClientPage;
