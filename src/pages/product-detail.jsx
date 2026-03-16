import { Card,Button, Typography,Tag } from "antd"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProductsStore } from "../store/products-store"
import { ProductCard } from "../components/product-card"

const {Text,Title,Paragraph} = Typography


export const ProductDetail=() => {
    const { id } = useParams();
    const { loading ,error,loadDataOneProduct,oneProduct } = useProductsStore()

    const navigate = useNavigate()

    useEffect(()=> {
        loadDataOneProduct(id)
    },[id])

    if(loading || !oneProduct) {
    return <div>LOADING...</div>
    }

    if(error) {
    return <div>NO FIND PRODUCT</div>
    }

    return(
    <>
        <Button onClick={()=> navigate(-1)}>Назад</Button>
            {/* <Card
                style={{maxWidth: '400px', margin: '0 auto' }}
                hoverable
                cover={
                <img src='https://cdn-icons-png.flaticon.com/256/11565/11565122.png' alt={oneProduct.name}
            />
            }
            onClick={()=> navigate(`/products/${oneProduct.id}`)}
                >
                <div>
                    <Title level={5}>
                        {oneProduct.name}
                    </Title>
                            <Text>
                                {oneProduct.price}
                            </Text>
                                <Tag color={'blue'}>{oneProduct.year}</Tag>
                                    <Paragraph type={'secondary'}>{oneProduct.description}</Paragraph>
                                    <Button type="primary" size="large">Добавить в корзину</Button>
                </div>
            </Card> */}
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <ProductCard product={oneProduct} />
            </div>
    </>
    )
}