import { Card,Button, Typography,Tag } from "antd"

import { useNavigate, useParams } from "react-router-dom"

import { ProductCard } from "../components/product-card"
import { useQuery } from "@tanstack/react-query"
import { productService } from "../services/products.service.js"


const {Text,Title,Paragraph} = Typography


export const ProductDetail=() => {
    const { id } = useParams();
    const { data: oneProduct, isPending, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => productService.getById(id),
        enabled: !!id,
    });

    const navigate = useNavigate()


    if(isPending || !oneProduct) {
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