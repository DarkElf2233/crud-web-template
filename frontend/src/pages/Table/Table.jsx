import { useState, useEffect } from "react";

import { API_URL } from "../../constants";
import axios from "axios";

import { Table as BootstrapTable } from "react-bootstrap";

import { TableItem } from "../../components/TableItem";

export const Table = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios(API_URL + ``, {
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="table">
      <h1 className="table__title">Таблица</h1>
      {!items || items.length <= 0 ? (
          <p>Таблица пустая.</p>
        ) : (
          <BootstrapTable>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <TableItem
                  key={item.id}
                  item={item}
                />
              ))}
            </tbody>
          </BootstrapTable>
        )}
    </div>
  );
};
