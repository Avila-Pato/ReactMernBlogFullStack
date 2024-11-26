import { SignIn } from "@clerk/clerk-react";

//Configurando Login Con clerk 
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register"/>
    </div>
  );
};

export default LoginPage;