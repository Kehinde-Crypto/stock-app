import React from 'react';
import Header from '@/components/ui/Header';import { auth } from '@/lib/better-auth/auth';


const layout =async({children}: {children:React.ReactNode}) => {
   const session = await auth.api.getSession({
    headers:await headers();
    if(!session?.user) redirect('/sign-in');
   })
   const user = {
     id: session.user.id,
     email: session.user.email,
     name: session.user.name,
   }
  return (
    <main className='min-h-screen text-gray-50'>
      <Header/>
      <div className='container py-10'>
        {children}
      </div>
    </main>
  );
}

export default layout;
