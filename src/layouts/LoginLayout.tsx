import { ReactNode } from 'react';

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full min-h-80 md:min-h-[70vh] flex ">{children}</div>
    </div>
  );
};

export default LoginLayout;
