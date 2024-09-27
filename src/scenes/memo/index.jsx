import MemoElem from "../../components/memo/MemoElem";
import MemoInput from "../../components/memo/MemoInput";
import MemoBoard from "../../components/memo/MemoBoard";
import { useMemoStore } from "../../store/MemoList";

const Memo = () => {
  const { memoList } = useMemoStore();
  return (
    <>
      <h2>Zustand</h2>
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            );
          })
        ) : (
          <span>메모를 입력해주세요</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
};

export default Memo;
