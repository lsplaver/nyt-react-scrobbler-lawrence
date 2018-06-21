import React from "react";
import SearchForm from "./../SearchForm/index";
import List from "./../components/List";
import ListItems from "../components/List/ListItems";

const Home = () => (
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