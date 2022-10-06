import { data } from "../constants/fake-data"


export function Table() {

  return (
    <div className="w-[100vw] h-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%] h-[60vh]  overflow-x-auto scrollbar-thin scrollbar-thumb-[rgb(36,41,51)] scrollbar-track-slate-700 hover:scrollbar-thumb-[rgb(36,41,51)] rounded-2xl">
        <table className="w-full table-fixed bg-[#11172a] text-[#fefefe9d]">
          <thead className="sticky top-0 w-full bg-slate-800  uppercase text-sm h-12 text-[#fefefe]">
            <tr className="text-center">
              <th>Título</th>
              <th>Data de criação</th>
              <th>Última alteração</th>
              <th>Data de finalização</th>
              <th>Atendido por</th>
              <th>Tempo decorrido</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(({created_at,finished_at,solver,title,updated_at},index) =>(
                <tr key={index} className="text-center border-solid border-b-[1px] border-[#bc3a41ab] h-16">
                  <td>{title}</td>
                  <td>{created_at}</td>
                  <td>{updated_at}</td>
                  <td>{finished_at}</td>
                  <td>{solver.name}</td>
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
