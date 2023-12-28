import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function sendRequest<T , V>(
  url: string,
  method: string,
  params?: {
    [key: string]: string;
  },
  body?: V
): Promise<T> {
  const config: AxiosRequestConfig = {
    url,
    method,
    params,
    data: body,
  };
  try {
    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while sending the request");
  }
}
