import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>
            We are delightes to have you {" "} <span className='text-pink-500'>Here! :)</span>

        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque laudantium pariatur repellat? Obcaecati suscipit sit magni aperiam, neque eligendi, porro ea a ipsa atque dolores voluptatibus vero laborum quod culpa!ss provident id, dolorem obcaecati sed, vel non natus officia autem repudiandae excepturi ducimus perspiciatis eum porro explicabo dolore laboriosam.s Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo optio maxime assumenda perspiciatis repellat impedit eaque earum, inventore sunt voluptatum aliquid beatae rem ad, iusto odio nostrum facere. Deserunt! 
        </p>
       <Link to="/">
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back 
       </button>
       </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))  
        }
    </div>
    </div>
    </>
  );
}

export default Course;
