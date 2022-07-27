import React from 'react'
import MenuLateral from '../MenuLateral/MenuLateral';

import './main.scss'

export default function Main(props) {

    const imgMoscow = props.images.find(image => image.name === "imgMoscow");
    const imgHonduras = props.images.find(image => image.name === "imgHonduras");
    const imgPuertoRico = props.images.find(image => image.name === "imgPuertoRico");
    
    return (
        <main className='main'>
            <div className="container-center">
                <h2 className='title_line'>Offers</h2>
                <div className='flex space-between wrap'>
                    <article className='main__article'>
                        <div className='flex space-between'>
                            <div className='main__article__plan'>
                                <div className='main__article__plan__info'>
                                    <img src={imgMoscow.url} alt={imgMoscow.title} />
                                    <div className='main__article__plan__info__trip'>
                                        <div className='flow-column'>
                                            <p>
                                            Trip to Moscow<br />
                                            <strong>Price $600,86</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='main__article__plan'>
                                <div className='main__article__plan__info'>
                                    <img src={imgPuertoRico.url} alt={imgPuertoRico.title} />
                                    <div className='main__article__plan__info__trip'>
                                        <div className='flow-column'>
                                            <p>
                                            Trip to Puerto Rico<br />
                                            <strong>Price $600,86</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='main__article__plan'>
                                <div className='main__article__plan__info'>
                                    <img src={imgHonduras.url} alt={imgHonduras.title} />
                                    <div className='main__article__plan__info__trip'>
                                        <div className='flow-column'>
                                            <p>
                                            Trip to Honduras<br />
                                            <strong>Price $600,86</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className='main__aside'>
                        <MenuLateral />
                    </aside>
                </div>
            </div>
        </main>
    )
}
