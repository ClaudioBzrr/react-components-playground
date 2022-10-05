import { data } from "./fake-data"
export function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[60vw] h-[60vh]  overflow-x-auto ">
        <table className="table table-zebra w-full table-fixed dark">
          <thead>
            <tr className="text-center">
              <th>Título</th>
              <th>Data de criação</th>
              <th>Última atualização</th>
              <th>Atendido por</th>
              <th>Tempo decorrido</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(({title,created_at,updated_at,solver_name},index) =>(
                <tr key={index} className="text-center">
                  <td>{title}</td>
                  <td>{created_at}</td>
                  <td>{updated_at}</td>
                  <td>{solver_name}</td>
                  <td>1 dia</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
