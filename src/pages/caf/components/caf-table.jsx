export function CAFTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age de l'enfant gardé
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tranche 1
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tranche 2
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tranche 3
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Moins de 3 ans</td>
            <td className="px-6 py-4 whitespace-nowrap">506 euros</td>
            <td className="px-6 py-4 whitespace-nowrap">319.07 euros</td>
            <td className="px-6 py-4 whitespace-nowrap">191.41 euros</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">De 3 ans à 6 ans</td>
            <td className="px-6 py-4 whitespace-nowrap">253 euros</td>
            <td className="px-6 py-4 whitespace-nowrap">159.56 euros</td>
            <td className="px-6 py-4 whitespace-nowrap">95.71 euros</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}