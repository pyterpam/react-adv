import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/* DOS TÉCNICAS */}
                {/* Técnica 1 */}
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Hola Mundo' } />
                    <ProductCard.Buttons  />
                </ProductCard>
                
                {/* Técnica 2 */}
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={ product }>
                    <h1>hola mundoi</h1>
                </ProductCard>
            </div>
        </div>
    )
}

// otra forma de hacerlo

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;