import { Grid } from 'antd';
import React from 'react';
import { redirect, Route, Navigate, RouterProps, useNavigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
    isAuthenticated?: boolean;
    redirectTo?: string;
    children?: React.ReactNode
}

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = /*useAuth()*/ { isAuthenticated: true };
    if (!isAuthenticated) {
        navigate("/sign-in");
    }
    return (
        //   <Grid container direction="column" width="100%" flexWrap="nowrap">
        //     <DashboardHeader />
        //     <Grid container direction="row" flexWrap="nowrap">
        //       <Grid item>
        //         <SideBar />
        //       </Grid>
        <Outlet />
        //     </Grid>
        //   </Grid>
    );
};


const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated = false, children, redirectTo = "/login" }) => {
    if (isAuthenticated) return children

    return (
        <Navigate to={redirectTo} />
    );
};

export default PrivateRoute;
