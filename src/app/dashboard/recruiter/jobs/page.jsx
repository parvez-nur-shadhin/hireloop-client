import { getCompanyJobs } from "@/lib/api/jobs";
import { Button, Chip, Table } from "@heroui/react";
import React from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

const JobsPage = async () => {
  const companyId = "company_123";

  const jobs = await getCompanyJobs(companyId);
  console.log(jobs);

  return (
    <div className="p-4">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Jobs Table" className="min-w-[900px]">
            <Table.Header>
              <Table.Column isRowHeader>Job Title</Table.Column>
              <Table.Column>Type / Category</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {jobs.map((job) => (
                <Table.Row key={job.id}>
                  <Table.Cell>
                    <div>
                      <p className="font-medium">{job.jobTitle}</p>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex flex-col">
                      <span>{job.type}</span>
                      <span className="text-xs text-default-500">
                        {job.jobCategory}
                      </span>
                    </div>
                  </Table.Cell>

                  <Table.Cell>{job.location}</Table.Cell>

                  <Table.Cell>
                    <Chip
                      size="sm"
                      color={job.status === "Active" ? "success" : "danger"}
                      variant="flat"
                    >
                      {job.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Button isIconOnly size="sm" variant="light">
                        <FiEye />
                      </Button>

                      <Button isIconOnly size="sm" variant="light">
                        <FiEdit />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        color="danger"
                        variant="light"
                      >
                        <FiTrash2 />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default JobsPage;
