import { useEffect, useState } from 'react';
import './App.css';
import ReactDragListView from 'react-drag-listview';

function App() {
  const [d, setd] = useState([]);

  const [index, setindex] = useState(0);

  useEffect(() => {
    const data = [];
    for (let i = 0, len = 50; i < len; i++) {
      data.push({
        title: `rows ${i}`,
        order: i
      });
    }
    setd(data);
  }, []);

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      // const data = [...d];
      // const item = data.splice(fromIndex, 1)[0];
      // data.splice(toIndex, 0, item);
      // setd(data);
    },
    nodeSelector: 'li',
    handleSelector: 'a'
  };

  return (
    <div className="App">
      <input
        type="text"
        value={index}
        onChange={(e) => setindex(e.target.value)}
      />
      <button
        onClick={() => {
          let dnew = [];
          for (let i = 0; i < 49; i += 1) {
            let j = i;
            if (Number(index) === i) {
              dnew.push({ title: `rows ${i}`, order: j });
              dnew.push({ title: `rows ${i}`, order: (j += 1) });
            } else if (Number(index) < i) {
              dnew.push({ title: `rows ${i}`, order: (j += 1) });
            } else {
              dnew.push({ title: `rows ${i}`, order: j });
            }
          }
          setd(dnew);
          console.log(dnew.length);
        }}
      >
        Tıkla
      </button>

      <ReactDragListView {...dragProps}>
        <ol>
          {d.map((item, index) => (
            <li key={index}>
              {item?.title} {item?.order} {item?.index}
            </li>
          ))}
        </ol>
      </ReactDragListView>
    </div>
  );
}

export default App;
