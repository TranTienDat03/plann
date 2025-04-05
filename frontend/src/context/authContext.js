import { createContext, useContext, useEffect, useState, useTransition } from 'react';



const AuthContext = createContext(null);


export function TasksProvider({ children }) {
  const [auth,setAuth] = useState({
    user: null,
    isLogin: false,
  });

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    async function getMe() {
        const res = await fetch('http://localhost:5000/check-session', {
            credentials: "include"
        });
        const data = await res.json();
        setAuth({
            user: null,
            isLogin: data.loggedIn
        })
    }
    startTransition( async () =>  {
     await getMe();
    });
    
  },[]);

  const handleRegister = async ({ name, password }) => {
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password }), // Đúng format backend yêu cầu
        credentials: "include",
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setAuth({
          user: data.user, // Kiểm tra `data.user` có đúng không
          isLogin: true,
        });
        return { isLogin: true };
      } else {
        console.error("Đăng ký thất bại:", data.message);
        return { isLogin: false };
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      return { isLogin: false };
    }
  };
  

  const handleLogin = ({user,isLogin}) => {
    setAuth({
        user,isLogin
    })
  }

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/logout", { 
        method: "POST", 
        credentials: "include" 
      });
  
      if (res.ok) {
        setAuth({
          user: null,
          isLogin: false,
        });
      } else {
        console.error("Logout thất bại:", await res.text());
      }
    } catch (error) {
      console.error("Lỗi khi logout:", error);
    }
  };
  

  return (
    <AuthContext.Provider value={{
        auth,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister
    }}>
        {isPending === false && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
