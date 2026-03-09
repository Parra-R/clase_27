import './TablaPedidos.css'

interface Pedido {
  id: string 
  cliente: string
  total: number
  estado: 'Entregado' | 'Pendiente' | 'Cancelado'
}

const pedidos: Pedido[] = [ 
  { id: "#ORD-772", cliente: "Maria Casals", total: 125.50, estado: 'Entregado' }, 
  { id: "#ORD-891", cliente: "Juan Topo", total: 45.00, estado: 'Pendiente' }, 
  { id: "#ORD-902", cliente: "Sara Vega", total: 210.99, estado: 'Entregado' }, 
  { id: "#ORD-115", cliente: "Pedro Picapiedra", total: 89.00, estado: 'Cancelado' }, 
];

const TablaPedidos = () => {
 const getColorEstado = (estado: Pedido["estado"]) => {
    if (estado === "Entregado") return "bg-green-100 text-green-700"
    if (estado === "Pendiente") return "bg-yellow-100 text-yellow-700"
    if (estado === "Cancelado") return "bg-red-100 text-red-700"
  }

  return (
     <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Últimos pedidos
          </h2>
        </div>

        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Cliente</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Estado</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">

            {pedidos.map((pedido) => (
              <tr
                key={pedido.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {pedido.id}
                </td>

                <td className="px-6 py-4">
                  {pedido.cliente}
                </td>

                <td className="px-6 py-4">
                  {pedido.total} €
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getColorEstado(pedido.estado)}`}
                  >
                    {pedido.estado}
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