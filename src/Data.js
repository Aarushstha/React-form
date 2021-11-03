import React from "react";
import { Table } from "antd";

export default function Data() {
  const columns = [
    {
      title: "First Name",
      dataIndex: "First Name",
      key: "First Name",
    },
    {
      title: "Last Name",
      dataIndex: "Last Name",
      key: "Last Name",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Contact Number",
      dataIndex: "Contact Number",
      key: "Contact Number",
    },
    {
      title: "Date of Birth",
      dataIndex: "Date of Birth",
      key: "Date of Birth",
    },
    {
      title: "Designation",
      dataIndex: "Designation",
      key: "Designation",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
    },
  ];

  return (
    <div>
      <Table
        dataSource={JSON.parse(localStorage.getItem("values"))}
        columns={columns}
      />
      ;
    </div>
  );
}
