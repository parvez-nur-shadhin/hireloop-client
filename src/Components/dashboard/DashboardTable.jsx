'use client'

import { Checkbox, Table } from "@heroui/react";
import React, { useState } from "react";

const DashboardTable = () => {
  const users = [
    {
      email: "kate@acme.com",
      id: 1,
      name: "Kate Moore",
      role: "CEO",
      status: "Active",
    },
    {
      email: "john@acme.com",
      id: 2,
      name: "John Smith",
      role: "CTO",
      status: "Active",
    },
    {
      email: "sara@acme.com",
      id: 3,
      name: "Sara Johnson",
      role: "CMO",
      status: "On Leave",
    },
    {
      email: "michael@acme.com",
      id: 4,
      name: "Michael Brown",
      role: "CFO",
      status: "Active",
    },
  ];

  const [selectedKeys, setSelectedKeys] = useState(new Set());

  return (
    <div>
      <h1 className="font-medium text-2xl mb-4 mt-4">Recent Applications</h1>
      <div className="flex flex-col gap-3">
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Table with selection"
              className="min-w-[600px]"
              selectedKeys={selectedKeys}
              selectionMode="multiple"
              onSelectionChange={setSelectedKeys}
            >
              <Table.Header>
                <Table.Column className="pr-0">
                  <Checkbox aria-label="Select all" slot="selection">
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                  </Checkbox>
                </Table.Column>
                <Table.Column isRowHeader>Candidate Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Date Applied</Table.Column>
                <Table.Column>Experience</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>
                {users.map((user) => (
                  <Table.Row key={user.id} id={user.id}>
                    <Table.Cell className="pr-0">
                      <Checkbox
                        aria-label={`Select ${user.name}`}
                        slot="selection"
                        variant="secondary"
                      >
                        <Checkbox.Control>
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                      </Checkbox>
                    </Table.Cell>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>{user.status}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
        <p className="text-sm text-muted">
          Selected:{" "}
          <span className="font-medium">
            {selectedKeys === "all"
              ? "All"
              : selectedKeys.size > 0
                ? Array.from(selectedKeys).join(", ")
                : "None"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashboardTable;
