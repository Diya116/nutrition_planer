import React from 'react'
import Slidebar from './Slidebar'
const product=[
    {
        id:1,
        img:"https://img.freepik.com/free-vector/healthy-nutrition-dietitian-recommendation-flat-composition-with-body-mass-index-control-vegetables-salmon-eggs-supplements_1284-60046.jpg?w=900&t=st=1693562195~exp=1693562795~hmac=ccc0ee3aec29b050947feb5d987e85561ecc30cad1dd806f15f1075be53f6869",
        description:"xyz",
        title:"Kito diet"

    },
    {
        id:1,
        img:"https://img.freepik.com/free-vector/people-world-health-day_24908-56253.jpg?w=740&t=st=1693561978~exp=1693562578~hmac=e104904ac08f582b804003151988121b6bfdefbc560e151f78aa65d136e67741",
        title:"Vegen Diet",
        description:"xyz",

    },
    {
        id:1,
        img:"https://img.freepik.com/premium-photo/ai-generated-illustration-abstract-man-outline-with-vegetables-fruit-vegan-lifestyle_441362-5291.jpg?w=740",
        title:"Fitness Bell Pro",
        description:"xyz",

    },
    {
        id:1,
        img:"https://img.freepik.com/premium-photo/healthy-lifestyle-sport-diet-concept_645697-7665.jpg?w=900",
        title:"No Equipment workout",

    },
    {
        id:1,
        img:"https://img.freepik.com/free-photo/front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-blue-drink-juice-cocktail-fruit-color_140725-24749.jpg?w=900&t=st=1693562070~exp=1693562670~hmac=f00c42f57e49fb2f807bb16032ef508caf32e0678929a67ca12f993fe704f37a",
        title:"Bulk up",

    },
    {
        id:1,
        img:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"Balanced diet plan",
        description:"xyz",

    }
]
function Product() {
  return (
    <div className='px-10 py-10  rounded-3xl'>
       <h3 className='text-6xl bold text-[#003441]'>Our  Plans</h3>
       <Slidebar data={product}  /> 
    </div>
  )
}

export default Product
