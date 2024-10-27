import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import { Usuarios } from "../pages/Usuarios"


function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Layout />}>
                <Route index element={<Navigate to="usuarios" />} />
                <Route path="usuarios" element={<Usuarios />} caseSensitive={false} />
            </Route>
        </Routes>
    )
}

export default AppRoutes