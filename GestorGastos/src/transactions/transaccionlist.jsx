import { useGlobalState } from "../context/GlobalState.jsx";

function TransaccionList() {
    const { transactions } = useGlobalState(); 
    return (
        <div>
            <h2>Lista de Transacciones</h2>
            {transactions.length === 0 ? (
                <p>No hay transacciones</p>
            ) : (
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.descripcion} - ${transaction.amount}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TransaccionList;
