import { ListaDeParticipantesDoTorneioSelecionado, calculaFolha, formatoMonetario } from "@/app/services"

import { Button } from "@mui/material"
import ModalDeletarParticipantes from "../Modais/modalDeletarParticipantes"

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // Mor text-centere posts...
  ]
  
  export default function CardParticipantes() {
    const participantes = ListaDeParticipantesDoTorneioSelecionado()
    return (
      <div className="">
        <div className="">
          <div className="mx-auto  lg:mx-0 sm:mx-0 pt-5">
            <h2 className=" text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Participantes</h2>
          </div>

          <div className="mx-auto mt-1 grid max-w-2xl sm:mx-0 grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 pt-5 sm:mt-1 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {participantes?.map((post) => (
              <div key={post.id} className="bg-white p-3 rounded-lg flex max-w-xl flex-col items-start justify-between">
                <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                  <div style={{display:"flex"}}>
                    <img src={post.emblemaDoTime} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6 mx-2">
                      <div className="font-semibold text-gray-900">
                        <div>
                          {post.time}
                        </div>
                      </div>
                      <div className="text-gray-600">{post.nome}</div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <ModalDeletarParticipantes elenco={post}/>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div>
                      Saldo {formatoMonetario(post?.saldo)}
                    </div>
                  </h3>
                  <div>Folha {calculaFolha((post.jogadores))}</div>
                  <Button variant="outlined" color="secondary" sx={{width:"100%", mt:1}}>gerenciar elenco</Button>
                  <Button variant="outlined" color="success" sx={{width:"100%", mt:1}}>comprar jogadore</Button>                  
                  <div className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">{post.jogadores.length} jogadores</div>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  