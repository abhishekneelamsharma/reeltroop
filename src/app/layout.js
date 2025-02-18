import Myparticle from "@/_components/global/MyPartical";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: "Reel Troop",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/vendor/animate-css/vivify.min.css" />
        <link rel="stylesheet" href="/assets/vendor/c3/c3.min.css" />
        <link rel="stylesheet" href="/assets/css/site.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >
        <SessionProvider>
          {children}
        </SessionProvider>
        <div className='particle-js'>
          <Myparticle />
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
