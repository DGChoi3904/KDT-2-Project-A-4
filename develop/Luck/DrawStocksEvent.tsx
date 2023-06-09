import React, { useState, ChangeEvent, FormEvent } from "react";

function DrawEvent() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);

  const handleCreate = (): void => {
    setInputs([...inputs, ""]);
  };

  const handleInputEventChange = (index: number, event: ChangeEvent<HTMLInputElement>): void => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleDelete = (): void => {
    if (inputs.length === 0) {
      return;
    }
    const updatedInputs: string[] = [...inputs];
    updatedInputs.pop();
    setInputs(updatedInputs);
  };

  const handleConfirm = (event: FormEvent): void => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    setOutputs(inputs);
  };

  return (
    <div>
      <h1>주식 종목 뽑기</h1>
      <form onSubmit={handleConfirm}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              title="drawStocks"
              placeholder="주식 종목을 쓰세요"
              value={input}
              onChange={(event) => handleInputEventChange(index, event)}
            />
          </div>
        ))}
        <button type="submit">확인</button>
      </form>
      <button type="button" onClick={handleCreate}>
        종목 생성
      </button>
      <button type="button" onClick={handleDelete}>
        종목 삭제
      </button>
      <div>
      {outputs.map((output, index) => (
        <div key={index}>입력한 주식 종목: {output}</div>
      ))}
        {inputs.length}개의 종목 중 하나인 {outputs.join(",")} 당첨!!!
      </div>
    </div>
  );
}

export default DrawEvent;
