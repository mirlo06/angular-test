import { Provider } from "./provider.model";

export interface Opportunity {

  id: number;
  name: string;
  imgSrc : string;
  imgSrcFull : String
  provider : Provider;
}
