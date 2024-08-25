import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
import Logo from "./Logo";


export default function Layout({children}) {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);

  // if we don't have any session
  if(!session) {
    return (
      <div className="bg-gray-300 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button onClick={() => signIn('google')} 
                className="bg-white p-2 px-4 rounded-lg">
                  Login with Google
        </button>
      </div>
    </div>
    );
  }

  // if we have a session
  return (
    <div className="bg-bgGray min-h-screen">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-6">
            <path fillRule="evenodd" 
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex grow justify-center mr-6"> 
          <Logo />
        </div> 
      </div>
    
      <div className="flex">
      <Nav show={showNav} />
      <div className= "flex-grow p-4"
      //"bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4" 
      >  
        {children}
      </div>
    </div>
    </div>
  );
}