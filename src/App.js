import { useEffect, useState } from 'react';
import './App.css';
import ReactDragListView from 'react-drag-listview';

function App() {
  const [d, setd] = useState([]);

  const [index, setindex] = useState(0);

  useEffect(() => {
    const data = [];
    for (let i = 0, len = 100; i < len; i++) {
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
          if (d.length - Number(index) === 1) {
            dnew = [...d];
            dnew[index] = { title: `rows ${index}`, order: index };
          } else {
            console.log(1);
            for (let i = 0; i < 99; i++) {
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
          }

          setd(dnew);
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
