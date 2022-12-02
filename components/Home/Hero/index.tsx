import { useState } from 'react'
import ResponsiveImage from '../../shared/ResponsiveImage'

function Home() {

  const [ selected, setSelected ] = useState(0)

  const products = [{
    name: 'Dualsense <br><span>Customizado</span>',
    price: 800,
    image: {
      desktop: '/mock/desktop/dualshock.png',
      touch: '/mock/touch/dualshock.png',
    }
  }, {
    name: 'RTX 3050 <br><span>8GB VRAM</span>',
    price: 3000,
    image: {
      desktop: '/mock/desktop/gpu.png',
      touch: '/mock/touch/gpu.png',
    }
  }, {
    name: 'Playstation 4 <br><span>HD 500gb</span>',
    price: 2000,
    image: {
      desktop: '/mock/desktop/ps4.png',
      touch: '/mock/touch/ps4.png',
    }
  }, {
    name: 'Controle <br> Xbox Series S/X <br><span>Edição Especial</span>',
    price: 900,
    image: {
      desktop: '/mock/desktop/xbox-shift.png',
      touch: '/mock/touch/xbox-shift.png',
    }
  }]

  return (
    <div className="hero border-b-2 border-neutral-100">
      <div className="container columns-2 gap-8 mx-auto lg:h-[840px] flex flex-col-reverse lg:flex-row items-center py-10">

        <div className='w-full lg:w-6/12 ml-0 lg:ml-8 xl:ml-16 px-8 lg:px-0 flex flex-col md:block h-[230px] md:h-[300px] lg:h-[350px]'>
          <p 
            className='product-name font-bold 
              text-4xl md:text-[3rem] xl:text-[4rem] md:leading-[3rem] lg:leading-[4rem]' 
            dangerouslySetInnerHTML={{__html: products[selected].name }} 
          />
          <p className='text-4xl md:text-[3rem] font-bold md:mt-4'>R${ products[selected].price },00</p>
          <button className='bg-primary text-white rounded-full px-8 py-3 md:py-5 text-xl md:text-[2rem] font-bold mt-5 md:mt-8'>
            Adicionar ao carrinho
          </button>
        </div>

        <div className="w-full lg:w-6/12">
          <div className={`relative h-[300px] md:h-[480px] selected_${selected+1}`}>
            {products.map((product, index) => {
              return (
                <div 
                  className={`product product_${index+1} ${ selected == index ? 'pointer-events-none!' : '' }`} 
                  onClick={() => setSelected(index)}
                  key={index}
                >
                  <ResponsiveImage {...product.image} />
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