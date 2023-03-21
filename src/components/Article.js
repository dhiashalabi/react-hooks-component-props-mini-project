import React from "react";

function Article(props) {
    const { title, date, preview, minutes } = props;

    const cups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    let timeToRead = "";
    if (minutes < 30) {
        timeToRead = "☕️ ".concat("☕️ ".repeat(cups - 1), minutes, " min read");
    } else {
        timeToRead = "🍱".concat("🍱".repeat(bentoBoxes), " ", minutes, " min read");
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {timeToRead}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
