import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { tempResponseDTO } from "./temp.response.dto.js";
import { flagResponseDTO } from "./temp.response.dto.js";

export const getTempData = () => {
  return tempResponseDTO("This is TEST! >.0");
};

export function CheckFlag(flag) {
  if (flag == 1) throw new BaseError(status.BAD_REQUEST); // 에러 발생시키기!
  else {
    return flagResponseDTO(flag);
  }
}
