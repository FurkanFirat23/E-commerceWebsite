import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdminOrders() {
  const { data, error } = useSWR("/api/orders", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Panel - Orders</h1>
      <ul>
        {data.map((order) => (
          <li key={order._id}>
            Order ID: {order._id}
            <br />
            Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
