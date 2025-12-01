import { useEffect, useState} from 'react';
import { api  } from '../../api/apiConsumer';
import styles from './styles.module.css'
import { Venda } from '../../models/VendaModel';


export function VendasTable() {
  const [ vendas, setVendas ] = useState<Venda[]>([]);

  useEffect(() => {
    api.get('vendas/')
    .then(res => setVendas(res.data))
    .catch(err => console.error(err));
  }, [vendas]);
  
  console.log(vendas)

  return (
    <>
    <table className={styles.tableView}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Valor</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {vendas.map(v => (
          <tr key={v.id}>
            <td>{v.produto}</td>
            <td>{v.preco}</td>
            <td>{v.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>

  );
}