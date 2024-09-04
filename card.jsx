import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Card() {

    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get('https://raw.githubusercontent.com/pharn001/rest-api/main/example.json')
            .then(response => {
                setData(response.data);
            })
    }, []);
  console.log(data);
    return (

        <div className="flex flex-wrap gap-6 justify-center " id='team'>
            <div data-aos="fade-up" className="flex flex-wrap justify-center text-center mb-10">
                <div className="w-full lg:w-screen px-4">
                    <h1 className=" text-gray-900 text-4xl font-bold mb-8">
                        Developer Teams
                    </h1>
                </div>
            </div>
            {data.map((item, ind) => (
                <div className="" key={ind}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src={item.img} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{item.name}</div>
                            <p class="text-gray-700 text-base">
                                Rank: {item.rank}
                            </p>
                            <p class="text-gray-700 text-base">
                                XP: {item.xp} / 20,000
                            </p>
                            <p class="text-gray-700 text-base">
                                Skill: {item.skill} / 64
                            </p>
                            <p class="text-gray-700 text-base">
                                project: {item.project}
                            </p>
                            <p class="text-gray-700 text-base">
                                Year: {item.Year}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
