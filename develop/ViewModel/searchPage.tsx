import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import {connectToMariaDB, runQuery} from "../Controller/mariadb"

//검색결과
interface SearchResult {
  name?: string|number;
  code?: string;
}

//검색 로직 작성 중
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string|number>("");
  const [searchCategory, setSearchCategory] = useState<string>("name");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchCategory(event.target.value);
  };

  const companyNameQuery : string = 'select no, code, name from companylist;'

  runQuery(connectToMariaDB, )

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('submit',event)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleCategoryChange} value={searchCategory}>
          <option value="name">회사명</option>
          <option value="code">회사코드</option>
        </select>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value="확인" />
      </form>
      <ul></ul>
    </div>
  );
};

export default SearchPage;
