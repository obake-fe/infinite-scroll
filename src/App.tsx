import React from 'react';
import './App.css';
import { List, WindowScroller } from 'react-virtualized';


// List data as an array of strings
const list = [
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn5',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn10',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn15',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn20',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn25',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn30',
];

function rowRenderer({
 key, // Unique key within array of rows
 index, // Index of row within collection
 isScrolling, // The List is currently being scrolled
 isVisible, // This row is visible within the List (eg it is not an overscanned row)
 style, // Style object to be applied to row (to position it)
}: any) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    );
}

function App() {
    return (
      <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <List
                  width={300}
                  height={height}  // ビューポートのheightを設定している
                  autoHeight  // WindowScrollerのときは必須感
                  isScrolling={isScrolling}  // WindowScroller用 スクロール検知
                  rowCount={list.length}  // 列の数
                  rowHeight={100}  // 列の高さ(px)
                  rowRenderer={rowRenderer} // リストのDOM
                  scrollTop={scrollTop}  // スクロール用オフセット値
              />
          )}
      </WindowScroller>
    );
}

export default App;
