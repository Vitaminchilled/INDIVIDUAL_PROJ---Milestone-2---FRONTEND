import React, { useEffect, useState } from "react";
import "../App.css";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error("Error fetching customers:", err));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(cust => (
          <li key={cust.customer_id}>
            {cust.first_name} {cust.last_name} – {cust.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomersPage;
