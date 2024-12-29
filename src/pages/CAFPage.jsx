import React from 'react';
import CAFTable from '../components/CAFTable';

export default function CAFPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">La CAF</h2>
      <p className="mb-4">Le complément de libre choix du mode de garde</p>
      <p className="mb-6">Employer une assistante maternelle vous donne droit à cette aide selon certaines conditions.</p>
      <CAFTable />
    </div>
  );
}