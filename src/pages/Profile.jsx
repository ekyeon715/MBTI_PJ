import { useState } from "react";
import { updateProfile } from "../api/auth";
import useUserStore from "../zustand/useUserStore";

const Profile = () => {
  const { user, setUser } = useUserStore();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { nickname }; // 수정된 닉네임 데이터 준비
      const updatedUser = await updateProfile(formData, user.accessToken); // 서버에 업데이트 요청
      setUser(updatedUser); // 상태에 업데이트된 유저 정보 반영
      alert("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생:", error);
      alert("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
