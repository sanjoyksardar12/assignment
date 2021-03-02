import React, { memo, useCallback, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectData } from "../selectors";
import { fetchPosts, fetchAlbums, fetchUsers, fetchTodos } from "../actions";
import { ApiResponseTypes } from "../app-constant";

const Badge = memo(({ name }) => {
  const data = useSelector(state => selectData(state, name));
  return <span className="badge">{data.length > 0 && data.length}</span>;
});

function Header() {
  const dispatch = useDispatch();
  const [albumVisibility, setAlbumVisibility] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const getPosts = useCallback(async () => {
    await dispatch(fetchPosts());
    setAlbumVisibility(true);
  });

  const getAlbums = useCallback(async () => {
    await dispatch(fetchAlbums());
    setDropdownVisibility(true);
  });

  const getUsers = useCallback(() => {
    dispatch(fetchUsers());
  });

  const getTodos = useCallback(() => {
    dispatch(fetchTodos());
  });

  return (
    <header className="App-header">
      <ul className="navbar">
        <li onClick={getPosts}>
          <Link to="/posts">
            Posts
            <Badge name={ApiResponseTypes.POSTS} />
          </Link>
        </li>
        <li onClick={getAlbums} className={!albumVisibility ? "inactive" : ""}>
          <Link to="/albums">
            Albums
            <Badge name={ApiResponseTypes.ALBUMS} />
          </Link>
        </li>

        <ul className={`navbar__dropdown ${!dropdownVisibility ? "inactive" : ""}`}>
          <button className="navbar__dropdown__dropBtn">
            Dropdown
        </button>
          <ul className="navbar__dropdown__content">
            <li onClick={getUsers}>
              <Link to="/users">
                Users
                <Badge name={ApiResponseTypes.USERS} />
              </Link>
            </li>
            <li onClick={getTodos}>
              <Link to="/todos">
                Todos
                <Badge name={ApiResponseTypes.TODOS} />
              </Link>
            </li>
          </ul>
        </ul>
      </ul>
    </header>);
}

export default memo(Header);

