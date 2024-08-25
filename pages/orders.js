import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders').then(response => {
            setOrders(response.data);
        });
    }, []);

    return (
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>PAID</th>
                        <th>RECIPIENT</th>
                        <th>PRODUCTS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map(order => (
                        <tr key={order._id}>
                            <td>{(new Date(order.CreatedAt)).toLocaleString()}</td>

                            <td className={order.paid ? 'text-green-700' : 'text-red-700' }>{order.paid ? 'YES' : 'NO'}</td>
                                
                            <td>
                                {order.name} {order.email}<br />
                                {order.city} {order.postalCode} {order.country}<br />
                                {order.streetAddress}
                            </td>
                            <td>
                                {order.stripe_lineItems.map(line => (
                                    <>
                                        {line.price_data?.book_data.name} x {line.quantity}<br />
                                    </>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}