import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Orders } from '../components/Orders/Orders';
import { Analytics } from '../components/Analytics/Analytics';
import { Tracking } from '../components/Tracking/Tracking';
import { useEffect, useState } from 'react';


export const AppRoutes = (): JSX.Element => {

    const allOrders: { id: string, from: string, to: string, status: string, name: string }[] = [
        {
            id: '1',
            name: 'María Pérez',
            from: 'Bogotá',
            to: 'Medellín',
            status: 'En preparación'
        },
        {
            id: '2',
            name: 'Juan Rodríguez',
            from: 'Cali',
            to: 'Barranquilla',
            status: 'En camino'
        },
        {
            id: '3',
            name: 'Luisa Martínez',
            from: 'Medellín',
            to: 'Cartagena',
            status: 'Entregado'
        },
        {
            id: '4',
            name: 'Carlos Sánchez',
            from: 'Bogotá',
            to: 'Cali',
            status: 'En camino'
        },
        {
            id: '5',
            name: 'Ana Gómez',
            from: 'Barranquilla',
            to: 'Bogotá',
            status: 'En preparación'
        },
        {
            id: '6',
            name: 'Pedro Ramos',
            from: 'Medellín',
            to: 'Barranquilla',
            status: 'Entregado'
        },
        {
            id: '7',
            name: 'Laura Ortega',
            from: 'Cali',
            to: 'Bogotá',
            status: 'En camino'
        },
        {
            id: '8',
            name: 'Andrés López',
            from: 'Bogotá',
            to: 'Cartagena',
            status: 'En preparación'
        },
        {
            id: '9',
            name: 'Isabel Torres',
            from: 'Medellín',
            to: 'Cali',
            status: 'Entregado'
        },
        {
            id: '10',
            name: 'Diego García',
            from: 'Cali',
            to: 'Medellín',
            status: 'En camino'
        },
        {
            id: '11',
            name: 'Sofía Herrera',
            from: 'Bogotá',
            to: 'Cali',
            status: 'En preparación'
        },
        {
            id: '12',
            name: 'Javier Castro',
            from: 'Cali',
            to: 'Cartagena',
            status: 'Entregado'
        },
        {
            id: '13',
            name: 'Carmen Pérez',
            from: 'Barranquilla',
            to: 'Medellín',
            status: 'En camino'
        },
        {
            id: '14',
            name: 'Roberto Mendoza',
            from: 'Cartagena',
            to: 'Barranquilla',
            status: 'En preparación'
        },
        {
            id: '15',
            name: 'Patricia Gómez',
            from: 'Cali',
            to: 'Bogotá',
            status: 'Entregado'
        },
        {
            id: '16',
            name: 'Eduardo Pérez',
            from: 'Medellín',
            to: 'Cartagena',
            status: 'En camino'
        },
        {
            id: '17',
            name: 'Marta Torres',
            from: 'Bogotá',
            to: 'Barranquilla',
            status: 'En preparación'
        },
        {
            id: '18',
            name: 'Felipe Rojas',
            from: 'Barranquilla',
            to: 'Cali',
            status: 'Entregado'
        },
        {
            id: '19',
            name: 'Camila Sánchez',
            from: 'Cali',
            to: 'Medellín',
            status: 'En camino'
        },
        {
            id: '20',
            name: 'Luis Morales',
            from: 'Bogotá',
            to: 'Cali',
            status: 'En preparación'
        }
    ];
    const [search, setSearch] = useState<string>('');
    const [orders, setOrders] = useState<{ id: string, from: string, to: string, status: string, name: string }[]>([]);
    const [option, setOption] = useState<string>('');
    const options: {
        value: string;
        optionName: string;
    }[] = [{ optionName: 'En preparación', value: 'En preparación' },
    { optionName: 'En camino', value: 'En camino' },
    { optionName: 'Entregado', value: 'Entregado' }]

    useEffect(() => {
        console.log(search)
        search !== '' && setOrders([...allOrders.filter(e => e.id.includes(search))]);
        search === '' && setOrders(allOrders);
        if(search === ''){
            option !== 'Estado' && setOrders([...allOrders.filter(e => e.status === option)])
        }
        else if(search !== ''){
            option !== 'Estado' && setOrders([...allOrders.filter(e => e.status === option && e.id.includes(search))])
        }
    }, [search, option])

    useEffect(()=>{
        setOrders(allOrders)
    },[])

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<Dashboard search={search} setSearch={setSearch} />} >
                <Route path='' element={<Orders orders={orders} options={options} setFormValue={setOption} formValue={option} />} />
                <Route path='analytics' element={<Analytics />} />
                <Route path='tracking/:id' element={<Tracking orders={allOrders}/>} />
            </Route>

            {/* <Route path='/office' element={userState.login ? <PurchasingOffice /> : <Navigate to="/login" />} >
                <Route path='' element={<Start />} />
                <Route path='orders' element={<OrderTable title='ORDENES OFICINA CENTRAL' />} />
                <Route path='catalogs' element={<CatalogsList />} />
                <Route path='products/:id' element={<ProductList />} />
                <Route path='users' element={<UserList />} />
                <Route path='create-necessity' element={<CreateNecessity />} />
                <Route path='create-requirement' element={<CreateRequirement />} />
                <Route path='send-requirement' element={<ShopingCar />} />
                <Route path='profile' element={<Profile />} />
            </Route> */}



        </Routes>
    )
}
