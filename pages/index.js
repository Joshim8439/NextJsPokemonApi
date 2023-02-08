import { Inter } from '@next/font/google'
import Link from 'next/link';
import { useState } from 'react'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ styles, pokeData }) {
  // console.log(pokeData)
  const [pokeArry, setPokeArry] = useState(pokeData.slice(0, 10));
  console.log(pokeArry)
  return (

    <Layout title={"InternWorks"}>

      <div class="bgImage">

        <div className='p-5 mb-40 flex flex-wrap justify-center mx-auto'>
          <img src="/Logo.png" alt="Sunset in the mountains" />

        </div>


        <div className='flex flex-wrap justify-center mx-auto'>
          {
            pokeArry.map((pokeman, i) => {
              return (

                <div class="rounded-b-3xl hover:bg-sky-400 max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
                  <Link href={`/pokemons/${pokeman.id}`}>
                  <div class='bg-red-100 m-5 rounded-md'>
                    <h5 className='mt-5 ml-5'>#010</h5>
                    <img className='h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]' src={pokeman.image.hires} alt="Sunset in the mountains" />
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{pokeman.name.english}</div>
                    <div>
                      {pokeman.type.map((type, j) => {
                        return (
                          <span key={type} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-3.5 py-0.5 
                        rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                            style={{ backgroundColor: styles[type.toLowerCase()] }}>{type}</span>
                        )
                      })}
                    </div>
                  </div>
                  </Link>

                </div>




                /*<div key={pokeman.name.english} className="p-2">
                  <div className='px-5 py-8 bg-white'>
                    <img src={pokeman.image.hires} className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"/>
                  
                  <p>{pokeman.name.english}</p>
                  <div>
                      {pokeman.type.map((type, j) =>{
                        return (
                          <span key={type} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-3.5 py-0.5 
                          rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                          style={{backgroundColor:styles[type.toLowerCase()]}}>{type}</span>
                        )
                      })}
                    </div>
  
                  </div>
  
                </div>*/
              )
            })

          }
        </div>
      </div>

      <div class="flex p-10 m-4">
        <div class="flex-1 w-14 h-14">
        </div>
        <div class="askImage bg-center text-4xl flex-1 w-64 font-extrabold	text-sky-500">
        Ash & Pikachu Arrive In Pokemon University
        </div>
        <div class="flex-1 w-32">
        </div>
      </div>


      <div class="grid grid-rows-3 grid-flow-col gap-2 m-4">
        <div class="row-span-3 col-span-2 ">

          <div class="grid grid-rows gap-2">

            <div class="grid grid-cols text-justify">
              <p>01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s versions of Lorem Ipsum.</p>
              <p>01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s versions of Lorem Ipsum.</p>

            </div>
            <div class="grid grid-cols">
              <div class="grid grid-rows col-span-2">

                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="/Image01.png" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="/Image01.png" />
                </div>


              </div>

            </div>

            <div class="col-span-2 text-justify">01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

          </div>

          

        </div>
        <div class="col-span-2 text-justify ml-4">02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

          <div class="col-span-2 text-justify ml-4">02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          
      </div>







    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.pikaserve.xyz/pokemon/all");
    const data = await res.json();
    return {
      props: {
        pokeData: data,
        styles: {
          normal: "#A8A77A",
          fire: "#EE8130",
          water: "#6390F0",
          electric: "#F7D02C",
          grass: "#7AC74C",
          ice: "#96D9D6",
          fighting: "#C22E28",
          poison: "#A33EA1",
          ground: "#E2BF65",
          flying: "#A98FF3",
          psychic: "#F95587",
          bug: "#A6B91A",
          rock: "#B6A136",
          ghost: "#735797",
          dragon: "#6F35FC",
          dark: "#705746",
          steel: "#B7B7CE",
          fairy: "#D685AD"
        }
      }
    }


  } catch (error) {
    console.log(error)

  }

}


