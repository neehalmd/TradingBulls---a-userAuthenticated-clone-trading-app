
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TransactionPage from './pages/Transactions/transactionpage'
import Support from './pages/Support/support'
import Signin from "./pages/auth/Signin/Signin";
import Signup from "./pages/auth/Signup/Signup";
import RegisterEmailverfy from "./pages/auth/RegisterEmailVerify/RegisterEmailverfy";
import Registersuccess from "./pages/auth/RegisterSuccess/Registersuccess";
import ForgotPassword from "./pages/auth/Forgotpassword/ForgotPassword";
import SuccessfullySent from "./pages/auth/Successfullysent/SuccessfullySent";
import ResetSuccess from "./pages/auth/ResetPassSuccess/ResetSuccess";
import Resetpassword from "./pages/auth/ResetPassword/Resetpassword";
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Dashboard from "./pages/Dashboard/dashboard";
import ProtectedRoute from "./pages/Dashboard/components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./pages/Dashboard/components/Auth/AlreadySigninRoute";

function App() {
   const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Dashboard/>
      </ProtectedRoute>,
  },
  {
    path: "/transactions",
    element: <ProtectedRoute>
      <TransactionPage />
    </ProtectedRoute>
    ,
  },
  {
    path: "/support",
    element: <ProtectedRoute>
      <Support />
    </ProtectedRoute> 
    ,
  },
  {
      path : "/signin",
      element : <AlreadySigninRoute>
        <Signin/>
      </AlreadySigninRoute>
      
  },
  {
    path : "/signup",
    element : <AlreadySigninRoute>
        <Signup/>
    </AlreadySigninRoute>
  },
  {
    path : "/registerverifyemail/:email",
    element  : <AlreadySigninRoute>
        <RegisterEmailverfy/>
    </AlreadySigninRoute>
  },
  {
    path : "/email-verify/:token",
    element  : <AlreadySigninRoute>
        <Registersuccess/>
    </AlreadySigninRoute>
  },
  {
    path : "/forgotpassword",
    element  : <AlreadySigninRoute>
        <ForgotPassword/>
    </AlreadySigninRoute>
  },
  {
    path : "/successfullysent/:email",
    element  : <AlreadySigninRoute>
        <SuccessfullySent/>
    </AlreadySigninRoute>
  },
  {
    path : "/resetsuccess",
    element  : <AlreadySigninRoute>
        <ResetSuccess/>
    </AlreadySigninRoute>
  },
  {
    path : "/forgot-password-verify/:token",
    element  : <AlreadySigninRoute>
        <Resetpassword/>
    </AlreadySigninRoute>
  },

  
]);

  const queryClient  = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
