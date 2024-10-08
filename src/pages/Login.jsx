import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";
import { login } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      setUser(response);
      navigate("/");
      alert("로그인에 성공했습니다.");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
