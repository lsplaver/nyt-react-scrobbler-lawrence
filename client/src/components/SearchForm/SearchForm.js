import React from "react";

const SearchForm = props => (
    <form>
        <div>
            <label id="searchFormTitle"> Search for Articles </label>
        </div>
        <div>
            <label id="topic"> Topic </label>
            <input id="inputTopic" type="text" />
            <label id="yearStart"> Date Range by Year - Start </label>
            <input id="inputStart" type="number" />
            <label id="yearEnd"> Date Ramge by Year - End </label>
            <input id="inputEnd" type="number" />
            <button id="submitBtn" type="submit"> Submit </button>
        </div>
    </form>
)

export default SearchForm;