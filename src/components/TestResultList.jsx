import useUserStore from "../zustand/useUserStore";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useUserStore();
  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;
