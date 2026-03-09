import './TablaPedidos.css'

interface Order {
  id: string 
  client: string
  total: number
  state: 'Delivered' | 'Pending' | 'Cancel'
}

const orders: Order[] = [ 
  { id: "#ORD-772", client: "Maria Casals", total: 125.50, state: 'Delivered' }, 
  { id: "#ORD-891", client : "Juan Topo", total: 45.00, state: 'Pending' }, 
  { id: "#ORD-902", client: "Sara Vega", total: 210.99, state: 'Pending' }, 
  { id: "#ORD-115", client: "Pedro Picapiedra", total: 89.00, state: 'Cancel' }, 
];

const TablaPedidos = () => {
const colorState = {
  Delivered: 'bg-green-100 text-green-700 border-green-200',
  Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Cancel: 'bg-red-100 text-red-700 border-red-200'
}

return (
  <div className="max-w-4xl mx-auto mt-10 p-4">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Orders Admin</h2>

    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse bg-white">

        <thead className="bg-gray-50 text-gray-600 font-semibold text-sm">
          <tr>
            <th className="px-6 py-4">ID Order</th>
            <th className="px-6 py-4">Client</th>
            <th className="px-6 py-4">Total</th>
            <th className="px-6 py-4">State</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
              
              <td className="px-6 py-4 font-medium text-indigo-600">
                {order.id}
              </td>

              <td className="px-6 py-4 text-gray-700">
                {order.client}
              </td>

              <td className="px-6 py-4 font-bold text-gray-900">
                {order.total.toFixed(2)}
              </td>

              <td className="px-6 py-4">
                {/* Aplicamos la clase dinámica usando el objeto coloresEstado */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorState[order.state]}`}
                >
                  {order.state}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>
)
  
}

export default TablaPedidos