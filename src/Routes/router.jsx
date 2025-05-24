import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import CreateGroup from "../pages/CreateGroup";
import PrivateRoute from "../Provider/PrivateRoute";
import MyProfile from "../pages/MyProfile ";
import MyGroups from "../pages/MyGroups";
import AllGroups from "../pages/AllGroups";
import Group from "../pages/Group";
import UpdateHobby from "../pages/UpdateHobby";
import ErrorPage from "../pages/ErrorPage";
import GroupDetails from "../pages/GroupDetails";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    index: true,
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                }
            ]
        },
        {
            path: "/my-profile",
            element: <PrivateRoute>
                <MyProfile />
            </PrivateRoute>,
        },
        {
            path: "/group/:id",
            loader: ({params})=>fetch(`https://hobby-hub-server-fawn.vercel.app/hobbies/${params.id}`),
            element: <PrivateRoute>
                <GroupDetails></GroupDetails> ,
            </PrivateRoute>,
        },
        {
            path: "/groups",
            element:<AllGroups></AllGroups>,
        },
        {
            path: "/updateGroup/:id",
            loader: ({params})=> fetch(`https://hobby-hub-server-fawn.vercel.app/hobbies/${params.id}`),
            element: <PrivateRoute>
                <UpdateHobby></UpdateHobby>
            </PrivateRoute>,
        },
        {
            path: "/createGroup",
            element: <PrivateRoute>
                <CreateGroup></CreateGroup>
            </PrivateRoute>,
        },
        {
            path: "/mygroups",
            loader: ()=>fetch('https://hobby-hub-server-fawn.vercel.app/hobbies'),
            element: <PrivateRoute>
            <MyGroups></MyGroups>,
            </PrivateRoute>,
        },
        {
            path: "/*",
            element: <ErrorPage />,
        }
    ]
)

export default router;