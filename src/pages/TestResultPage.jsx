import { useEffect, useState } from "react";
import { deleteTestResult, getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResult = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = async () => {
    try {
      await fetchResults();
    } catch (error) {
      alert("결과를 업데이트할 수 없습니다.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);
      fetchResults();
    } catch (error) {
      alert("오류로 인해 삭제할 수 없습니다.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
