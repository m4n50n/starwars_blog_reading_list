import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./action-buttons.css";
import { BookmarkIcon, BookmarkFillIcon, HeartIcon, HeartFillIcon } from "../Icons/icons.jsx";

export const ActionButtons = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <button 
                type="button"
                className={`btn btn-sm btn-outline-warning btn-green shadow-none ${store.bookmarks.indexOf(props.id) !== -1 ? "bookmark" : ""}`}
                onClick={() => actions.SaveCharacter(props.id, "bookmarks")}
            >
                {store.bookmarks.indexOf(props.id) !== -1 ? (
                    <BookmarkFillIcon />
                ) : (
                    <BookmarkIcon />
                )}
            </button>

            <button
                type="button"
                className={`btn btn-sm btn-outline-warning shadow-none ${store.likes.indexOf(props.id) !== -1 ? "like" : ""}`}
                onClick={() => actions.SaveCharacter(props.id, "likes")}
            >
                {store.likes.indexOf(props.id) !== -1 ? (
                    <HeartFillIcon />
                ) : (
                    <HeartIcon />
                )}
            </button>
        </>
    )
}

ActionButtons.propTypes = {
    id: PropTypes.number
}
