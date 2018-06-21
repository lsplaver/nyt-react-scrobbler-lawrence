import React from "react";
import SearchForm from "./../components/SearchForm";
import List from "./../components/ListsComp";
import ListItems from "../components/ListItemsComp";

/*export*/ const Home = () => (
    <div>
        <SearchForm />
        <div />
        <div>
            <label> Results </label>
            <div>
                <List>
                    <ListItems />
                </List>
            </div>
        </div>
    </div>
);

export default Home;