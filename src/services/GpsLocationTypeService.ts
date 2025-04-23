import axios from "axios";
import type { IGpsSessionType } from "@/domain/IGpsSessionType";
import type { IResultObject } from "@/types/IResultObject";

export abstract class GpsLocationTypeService{

  private static axios = axios.create(
    {
      baseURL: "https://sportmap.akaver.com/api/v1/GpsLocationTypes/",
      headers: {
        common: {
            'Content-Type': 'application/json'
            }
        }
    }
  )

  static async getAll(): Promise<IResultObject<IGpsSessionType[]>> {
    const url = "";
    try {
        const response = await this.axios.get<IGpsSessionType[]>(url);

        // console.log('getAll response', response)
        if (response.status <= 300) {
            return {data: response.data};
        }
        return {
          errors: [(response.status.toString() + " " + response.statusText).trim()]
      }
  } catch (error) {
    console.log("error: ", (error as Error).message)
      return {
          errors: [JSON.stringify(error)]
      };
}
}
}
