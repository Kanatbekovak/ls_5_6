import { ConfigProvider, Layout, Menu, Typography } from "antd"
import { useCartStore } from "../store/cart-store"
import { NavLink, Outlet } from "react-router-dom"
import { CartDrawer } from "../components/cart-drawer"


const {Header,Content} = Layout
const {Title,Text} =Typography

export function AppLayout() {
  const open = useCartStore(state=> state.open)
  return (
    <>
      <ConfigProvider>
        <Layout>
          <Header
          style={{ background: 'none', height: 'auto'}}
          >
            <div className="app-header__left">
              <Title className='app-header__title'>Apple Store</Title>
              <Text type='secondary' className='app-header__subtitle'> Каталог техники Apple</Text>
            </div>
            <Menu
              mode='horizontal'
              selectable={false}
              className='app-header__menu'
              items={[
                {
                  key: 'catalog',
                  label: (
                    <NavLink to='/products' className='app-header__link'>Каталог</NavLink>
                  ),
                },
                {
                  key: 'profile',
                  label: (
                    <NavLink to='/profile' className='app-header__link'>Профиль</NavLink>
                  )
                }, 
                {
                  key: 'cart',
                  label: (
                    <button type="button" className="app-header__link app-header__cart-button" onClick={open}>Корзина</button>
                  ),
                },
              ]}
            />
          </Header>
          <Content className='app-content'>
            <div className="app-content-inner"><Outlet /></div>
          </Content>
          <CartDrawer/>
        </Layout>
      </ConfigProvider>
    </>
  )
}


