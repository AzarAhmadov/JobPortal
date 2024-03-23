interface Config {
    username: string;
    password: string;
    dashboardRoute: string;
    loginRoute: string;
  }
  
  const config: Config = {
    username: process.env.NEXT_PUBLIC_USER || '',
    password: process.env.NEXT_PUBLIC_PASSWORD || '',
    dashboardRoute: 'admin/dashboard',
    loginRoute: '/'
  };
  
  export default config;
  