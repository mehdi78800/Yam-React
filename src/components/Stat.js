import { useSelector } from 'react-redux';
import { set_nb_throw } from '../actions/actions-types';

const Stat = () => {
    const { stats,nb_throw } = useSelector(state => state);

    return (
        <ul>
            <li>Yam: {stats.yam} ({stats.yam*100/Math.round(nb_throw)}%)</li>
            <li>Carré: {stats.carre} ({stats.carre*100/Math.round(nb_throw)}%)</li>
            <li>Brelan: {stats.brelan} ({stats.brelan*100/Math.round(nb_throw)}%)</li>
            <li>Double paires: {stats.double_paire} ({stats.double_paire*100/Math.round(nb_throw)}%)</li>
            <li>Paire: {stats.paire} ({stats.paire*100/Math.round(nb_throw)}%)</li>
        </ul>
    )
}

export default Stat;