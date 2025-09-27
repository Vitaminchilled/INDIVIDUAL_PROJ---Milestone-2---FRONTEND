import React, { useEffect, useState } from "react";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCustomers = (pageNum) => {
    fetch(`/api/customers?page=${pageNum}&per_page=10`)
      .then(res => res.json())
      .then(data => {
        setCustomers(data.customers);
        setPage(data.page);
        setTotalPages(data.total_pages);
      });
  };

  useEffect(() => {
    fetchCustomers(1);
  }, []);

  return (
    <div>
      <h2>Customers (Page {page} of {totalPages})</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.customer_id}>
              <td>{c.customer_id}</td>
              <td>{c.first_name} {c.last_name}</td>
              <td>{c.email}</td>
              <td>{c.active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        <button 
          onClick={() => fetchCustomers(page - 1)} 
          disabled={page === 1}
        >
          Prev
        </button>
        <button 
          onClick={() => fetchCustomers(page + 1)} 
          disabled={page === totalPages}
          style={{ marginLeft: "5px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomersPage;
