import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <div>
        <Outlet />
      </div>
    </DefaultLayoutContainer>
  )
}