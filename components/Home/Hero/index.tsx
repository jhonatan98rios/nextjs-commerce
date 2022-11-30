import { useState } from 'react'

function Home() {

  const [ selected, setSelected ] = useState(1)

  const products = [{
    name: 'Produto 1',
    price: 800,
    image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/brazilian/ds4_controller.png'
  }, {
    name: 'Produto 2',
    price: 1800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PlayStation_3_SIXAXIS_controller.png'
  }, {
    name: 'Produto 3',
    price: 50,
    image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/brazilian/ds4_controller.png'
  }, {
    name: 'Produto 4',
    price: 100,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PlayStation_3_SIXAXIS_controller.png'
  }]

  return (
    <div className="bg-indigo-100">
      <div className="container columns-2 gap-8 mx-auto bg-indigo-200 lg:h-96 flex flex-col-reverse lg:flex-row items-center">

        <div className='w-full lg:w-6/12 ml-0 lg:ml-8 xl:ml-16'>
          <p className='text-[4rem]'>{ products[selected].name }</p>
          <p className='text-[3rem]'>R${ products[selected].price }</p>
          <button className='bg-blue-500 text-white rounded px-8 py-5 text-[2rem]'>
            Adicionar ao carrinho
          </button>
        </div>

        <div className="w-full lg:w-6/12 bg-blue-100 h-96">
          <div className={`relative h-96 selected_${selected+1}`}>
            {products.map((product, index) => {
              return (
                <div 
                  className={`product product_${index+1} ${ selected == index ? 'pointer-events-none!' : '' }`} 
                  onClick={() => setSelected(index)}
                  key={index}
                >
                  <img src={product.image} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home