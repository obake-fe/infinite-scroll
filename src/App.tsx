import React from "react";
import { List, WindowScroller } from "react-virtualized";
import {
  createStyles,
  makeStyles,
  Card,
  CardActionArea
} from "@material-ui/core";

// List data as an array of strings
const list = [
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn5",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn10",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn15",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn20",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn25",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn",
  "Brian Vaughn30"
];

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      textAlign: "center",
      backgroundColor: "#aaa",
      height: 170,
      fontSize: 20
    },
    cardArea: {
      marginTop: 10
    },
    cardButton: {
      height: "100%"
    }
  })
);

function App() {
  const classes = useStyles();

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }: any) {
    return (
      <div key={key} style={style}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardButton}>
            {list[index]}
          </CardActionArea>
        </Card>
      </div>
    );
  }

  return (
    <WindowScroller>
      {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
        <div ref={registerChild} className={classes.cardArea}>
          <List
            width={300}
            height={height} // ビューポートのheightを設定している
            autoHeight // WindowScrollerのときは必須感
            isScrolling={isScrolling} // WindowScroller用 スクロール検知
            rowCount={list.length} // 列の数
            rowHeight={200} // 列の高さ(px)
            rowRenderer={rowRenderer} // リストのDOM
            scrollTop={scrollTop} // スクロール用オフセット値
          />
        </div>
      )}
    </WindowScroller>
  );
}

export default App;
