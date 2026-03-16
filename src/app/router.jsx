import { AppLayout } from "./layout";
import {createBrowserRouter} from 'react-router-dom'
import { Products } from "../pages/products.jsx";
import { ProductDetail } from "../pages/product-detail.jsx";
import { Profile } from "../pages/profile.jsx";
import { Home } from "../pages/home.jsx";
import { AppProvider } from "./app-provider.jsx";



export const router = createBrowserRouter([
    {
        element: (
            <AppProvider>
                <AppLayout/>
            </AppProvider>
        ),
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path:'/products/:id',
                element: <ProductDetail />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
])