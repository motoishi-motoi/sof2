import {useEffect} from 'react';

function Page() {
    useEffect(() => {
      window.gtag('config', 'UA-157580228-1', {
        'page_path': window.location.pathname
      });
    }, []);
  
    return null;
  }

export default Page