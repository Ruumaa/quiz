import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-sm mx-auto md:max-w-2xl xl:max-w-6xl overflow-y-auto overflow-x-hidden ">
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MainLayout;
