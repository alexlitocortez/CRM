import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  company: string;
  position: string;
  salary: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
];

const data: DataType[] = [
  {
    key: "1",
    company: "Indeed",
    position: "Full-Stack Engineer",
    salary: 120000,
  },
  {
    key: "2",
    company: "Roblox",
    position: "Frontend Engineer",
    salary: 130000,
  },
];

const JobTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default JobTable;
