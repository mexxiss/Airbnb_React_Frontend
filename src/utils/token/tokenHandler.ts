import { jwtDecode } from "jwt-decode";
import { clearLoginData } from "../../store/features/authSlice";

export const isTokenExpired = (
  token: string | null,
  dispatch: any
): boolean => {
  if (token) {
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      dispatch(clearLoginData());
      window.location.href = "/login";
      return true;
    }
  }
  return false;
};
