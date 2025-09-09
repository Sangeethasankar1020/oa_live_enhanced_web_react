import {
  CAPGEMINI,
  CLOUDLOGIC,
  CLOUDOLOGIX,
  COGNIZANT,
  DELOITTE,
  EM,
  ESALES,
  HCL,
  HEXAWARE,
  INFOSYS,
  INSPIRSYS,
  KOSOFT,
  KYYBA,
  LENOVA,
  NOVAC,
  SAFA,
  SOCIAL,
  TCS,
  TENTACLE,
  UNISYS,
  VIRTUSA,
  ZOHO,
} from "../assest/Home_students_Works_At";

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { id: "1", name: "Capgemini", logo: CAPGEMINI },
  { id: "2", name: "CloudLogic", logo: CLOUDLOGIC },
  { id: "3", name: "Cloudologix", logo: CLOUDOLOGIX },
  { id: "4", name: "Cognizant", logo: COGNIZANT },
  { id: "5", name: "Deloitte", logo: DELOITTE },
  { id: "6", name: "EM", logo: EM },
  { id: "7", name: "eSales", logo: ESALES },
  { id: "8", name: "HCL", logo: HCL },
  { id: "9", name: "Hexaware", logo: HEXAWARE },
  { id: "10", name: "Infosys", logo: INFOSYS },
  { id: "11", name: "Inspirisys", logo: INSPIRSYS },
  { id: "12", name: "KoSoft", logo: KOSOFT },
  { id: "13", name: "Kyyba", logo: KYYBA },
  { id: "14", name: "Lenovo", logo: LENOVA },
  { id: "15", name: "Novac", logo: NOVAC },
  { id: "16", name: "Safa Technologies", logo: SAFA },
  { id: "17", name: "Societe Generale", logo: SOCIAL },
  { id: "18", name: "TCS", logo: TCS },
  { id: "19", name: "Tentacle Tech", logo: TENTACLE },
  { id: "20", name: "Unisys", logo: UNISYS },
  { id: "21", name: "Virtusa", logo: VIRTUSA },
  { id: "22", name: "Zoho", logo: ZOHO },
];
