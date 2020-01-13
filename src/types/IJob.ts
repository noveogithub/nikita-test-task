import { IContractType } from "./IContractType";

type WebsiteUrl = {
  website_reference: string;
  url: string;
}

export type IJob = {
  id: number;
  reference: string;
  name: string;
  slug: string;
  description: string;
  published_at: string;
  profile: string;
  contract_type: IContractType;
  office: {
    name: string;
  };
  department: {
    name: string;
  };
  websites_urls: WebsiteUrl[];
}