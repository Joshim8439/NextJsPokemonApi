import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const Details = ({ pokeman, styles }) => {
    console.log(pokeman)
    return (
        <Layout title={pokeman.name.english}>
            <div className='p-5 mb-40 flex flex-wrap justify-center mx-auto'>
            <picture><img src="/Logo.png" alt="Sunset in the mountains" /></picture>

            </div>

            <div class="flex w-full p-4 m-auto">
                <div class="flex-1">
                    <p className="text-3xl flex-1 w-64 font-extrabold	text-sky-500">{pokeman.name.english} #00{pokeman.id}</p>
                    <p className='text-xl'>{pokeman.description}</p>
                    <div class="rounded-lg border-solid border-2 border-indigo-600 box-content mt-6 h-64 w-46 p-4 border-4">
                        <div className='flex'>
                            <div className='font-bold text-left p-10 flex-1'>
                                <h3>Height</h3>
                                <h3>{pokeman.profile.height}</h3>

                            </div>
                            <div className='font-bold text-right flex-1 p-10'>
                                <h3>Category</h3>
                                <h3>{pokeman.species}</h3>

                            </div>
                        </div>
                        <div className='flex'>
                            <div className='font-bold text-left p-10 flex-1'>
                                <h3>Weight</h3>
                                <h3>{pokeman.profile.weight}</h3>

                            </div>
                            <div className='font-bold text-right flex-1 p-10'>
                                <h3>Ability</h3>
                                <h3>Overgrow</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div class='m-5 rounded-md flex-1'>
                <picture><img className='m-20 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]' src={pokeman.image.hires} alt="Sunset in the mountains" /></picture>
                </div>
                <div class="flex-1 w-32">
                    <div>
                        <h1 className='text-3xl w-64 mb-8 font-extrabold	text-sky-500"'>Type</h1>
                        {pokeman.type.map((type, j) => {
                            return (


                                <span key={type} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-3.5 py-0.5 
                        rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                    style={{ backgroundColor: styles[type.toLowerCase()] }}>{type}</span>
                            )
                        })}
                    </div>

                    <div className='mt-4'>
                        <h1 className='font-bold text-2xl'>Stats</h1>
                        {Object.keys(pokeman.base).map((stat, i) => {
                            let statPercentFactor = 0
                            let statColor
                            switch (stat) {
                                case "HP":
                                    statPercentFactor = 2.55;
                                    statColor = "#da4343";
                                    break;
                                case "Attack":
                                    statPercentFactor = 1.81;
                                    statColor = "#f38d45";
                                    break;
                                case "Defense":
                                    statPercentFactor = 2.3;
                                    statColor = "#f3d14a";
                                    break;
                                case "Sp. Attack":
                                    statPercentFactor = 1.73;
                                    statColor = "#547fe4";
                                    break;
                                case "Sp. Defense":
                                    statPercentFactor = 2.3;
                                    statColor = "#84df57";
                                    break;
                                case "Speed":
                                    statPercentFactor = 2.0;
                                    statColor = "#f75887";
                                    break;
                            }
                            return <div key={stat}>
                                <div className="flex justify-between">
                                    <span>{stat.toUpperCase()}</span>
                                    <span>{pokeman.base[stat]}</span>
                                </div>
                                <div className="h-2 w-full bg-gray-900 rounded-full">
                                    <div className="h-2 rounded-full" style={{ backgroundColor: statColor, width: parseInt(pokeman.base[stat]) * statPercentFactor }}></div>
                                </div>
                            </div>;
                        })}
                    </div>
                </div>




            </div>

            <div className='flex'>
                <div className='flex-1'>
                </div>
                <div className='flex-1'>
                    <Link href={"http://localhost:3000"}><button class="m-8 bg-orange-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Back To HomePage
                    </button></Link>
                </div>
                <div className='flex-1'>
                </div>

            </div>



        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    try {
        const res = await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`)
        const data = await res.json()
        return {
            props: {
                pokeman: data,
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

export default Details