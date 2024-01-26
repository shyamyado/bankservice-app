import React from "react";
import MainLayout from "../layout/MainLayout";
import Catalog from "../Views/Catalog";
import CatalogDetail from "../Views/Catalog/catalogDetail";

const MainRoutes = [{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Catalog />
        },
        {
            path: '/:id',
            element: <CatalogDetail />
        }

    ],
},

];

export default MainRoutes;