import { ListaDeParticipantesDoTorneioSelecionado } from "@/app/services"
import { useAppSelector } from "@/redux/hookes"

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
    console.log(participantes)
    return (
      <div className="">
        <div className="">
          <div className="mx-auto  lg:mx-0 sm:mx-0 pt-5">
            <h2 className=" text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Participantes</h2>
          </div>
          <div className="mx-auto mt-1 grid max-w-2xl sm:mx-0 grid-cols-1 gap-x-8 gap-y-1 border-t border-gray-200 pt-5 sm:mt-1 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {participantes?.map((post) => (
              <article key={post.id} className="bg-white p-3 rounded-lg flex max-w-xl flex-col items-start justify-between">
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.emblemaDoTime} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.nome}>
                        <span className="absolute inset-0" />
                        {post.time}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.nome}</p>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.nome}>
                      <span className="absolute inset-0" />
                      {post.saldo}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.jogadores.length} jogadores</p>
                </div>
              
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  