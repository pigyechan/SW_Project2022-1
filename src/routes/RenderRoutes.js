import { lazy } from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const HeaderStyle = styled.div`
  flex-direction: column;
  weight: 100vw;
`;

const Main = lazy(() => import("../pages/main"));
const Login = lazy(() => import("../pages/login"));
const Training = lazy(() => import("../pages/training"));
const Scouting = lazy(() => import("../pages/scouting"));
const PlayersInfo = lazy(() => import("../pages/playersInfo.js"));
const Private = lazy(() => import("../pages/Profile"));
const Strategy = lazy(() => import("../pages/strategy"));
const Schedule = lazy(() => import("../pages/schedule"));

class routeItem {
  constructor(path, key, exact, component, routes) {
    this.path = path;
    this.key = key;
    this.exact = exact;
    this.component = component;
    this.routes = routes;
  }
}

class routes {
  constructor() {
    this.routes = [
      new routeItem("/main", "MAIN", true, Main, []),
      new routeItem("/login", "LOGIN", true, Login, []),
      new routeItem("/training", "TRAINING", true, Training, []),
      new routeItem("/scout", "SCOUTING", true, Scouting, []),
      new routeItem("/private/playersInfo", "Info", true, PlayersInfo, []),
      new routeItem("/strategy", "STRATEGY", true, Strategy, []),
      new routeItem("/private", "PRIVATE", true, Private, []),
      new routeItem("/schedule", "SCHEDULE", true, Schedule, []),
      // 페이지 추가 시 routeItem 추가
    ];
  }

  get allRoutes() {
    return this.routes;
  }
}

const ROUTES = new routes();

export default ROUTES;

export function RenderRoutes({ routes }) {
  return (
    <BrowserRouter>
      <Center>
        <Sidebar />
        <HeaderStyle>
          <Header />
          <Switch>
            {routes.map((route, i) => {
              console.log(route.path);

              return <RouteWithSubRoutes {...route} />;
              // return route.key !== "LOGIN"
              //         ?  <AuthRoute {...route} />
              //         :  <RouteWithSubRoutes {...route} /> //다른 페이지 접속 시도할 때 로그인 정보 없을 시 로그인 페이지로 Redirect 구현 시 이를 이용
            })}
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route component={() => <h1>Not Found!</h1>} />
          </Switch>
        </HeaderStyle>
      </Center>
    </BrowserRouter>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      key={route.key}
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

// function AuthRoute(route){
//     return (
//          <Route
//             key={route.key}
//             path={route.path}
//             exact={route.exact}
//             render={(props) =>
//                 localStorage.getItem('accessToken') ? ( //localStorage의 토큰으로 로그인 기능 구현 시 사용
//                     <route.component {...props} routes={route.routes} />
//                 ) : (
//                     <Redirect to="/login" />
//                 )
//             }
//         />
//       )
// }
