import { NAME } from "../constant/mainConstatnts";

export const setName = (data: string) => {
  return {
    type: NAME,
    payload: data,
  }
}