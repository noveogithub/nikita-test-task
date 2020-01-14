import { IContractType } from "./IContractType";
import { IWebsiteUrl } from "./IWebsiteUrl";

export type IJob = {
  id: number;
  name: string;
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
  websites_urls: IWebsiteUrl[];
}