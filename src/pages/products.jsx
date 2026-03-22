
import { useDebounce } from "../hooks/use-debounce"
import { useProductsStore } from "../store/products-store"
import { useFiltersStore } from "../store/use-filter"
import { Button, Col, Empty, Input, Row, Segmented, Spin, Typography } from "antd"
import { ProductCard } from "../components/product-card"
import { SearchOutlined } from '@ant-design/icons'
import { useCategory } from "../store/category-store"

const {Text} = Typography

export function Products() {

    const { data: categories, isPending: CategoryLoading } = useCategory();
    const {search,setSearch,categoryId,setCategoryId} = useFiltersStore()
    const debouncedSearch = useDebounce(search,500)

    const {data,isPending,error} = useProductsStore({
            name: `*${debouncedSearch}`,
            categorie_id: categoryId,
        }
    )


    const resetFilters = () => {
        setCategoryId(null)
        setSearch('')
    }

    if(isPending) {
        return <div>LOADING...</div>
    }
    return (
        <div className="page page-products">
            <div className="page-products__controls">
                <Input
                    allowClear
                    size='large'
                    placeholder="Поиск по названию (например, iPhone)..."
                    prefix={<SearchOutlined/>}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='page-products__search'
                />

                <Segmented
                    sixe='large'
                    options={categories}
                    value={categoryId}
                    onChange={(val)=>setCategoryId(val)}
                    className="page-products__categories"
                 />
                 <Button onClick={resetFilters}>Сбросить фильтры</Button>
            </div>
            {error && (
                <Text type='danger' className='page-products__error'>{error}</Text>
            )}

            <Spin spinning={isPending}>
                {data?.length === 0 && !isPending ? (
                    <div className="page-products__empty">
                        <Empty
                            description={
                                <span>Ничего не найдено. Измените поисковый запрос или фильтры.</span>
                            }
                        />
                    </div>
                ) : (
                    <Row gutter={[24,24]}>
                        {data?.map((product) => (
                            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Spin>
        </div>
    )
}