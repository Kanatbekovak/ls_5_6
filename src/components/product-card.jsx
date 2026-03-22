import { Card, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useCategory } from '../store/category-store'

const { Paragraph, Text, Title } = Typography

export function ProductCard({ product }) {
    const { data: categories } = useCategory();
    const currentCategory = categories.find((item) => item.value === product.categorie_id)?.label

    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
            <Card
                hoverable
                className="product-card"
                cover={
                    <div className="product-card__image-wrapper">
                        <img
                            src={product.picture}
                            alt={product.name}
                            className="product-card__image"
                        />
                    </div>
                }
            >
                <div className="product-card__body">
                    <Title level={5} className="product-card__title">
                        {product.name}
                    </Title>
                    <Text strong className="product-card__price">
                        {product.price}
                    </Text>
                    <div className="product-card__tags">
                        <Tag color="blue">{product.year}</Tag>
                        <Tag>{currentCategory}</Tag>
                    </div>
                    <Paragraph
                        type="secondary"
                        ellipsis={{ rows: 3 }}
                        className="product-card__description"
                    >
                        {product.description}
                    </Paragraph>
                </div>
            </Card>
        </Link>
    )
}
