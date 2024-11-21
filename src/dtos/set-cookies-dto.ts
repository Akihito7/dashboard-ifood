import { ResponseCookie, ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

export interface SetCookiesDTO {
    key : string;
    value : string;
    optionsCookies : ResponseCookie | Partial<ResponseCookie>
}