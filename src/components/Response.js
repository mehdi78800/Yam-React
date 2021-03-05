import { useSelector } from 'react-redux';


const Response = () => {
    const {result, nb_throw} = useSelector(state => state);


    return (
        <>
        <ul>
          <li>Résultat des {nb_throw} lancers de dés :</li>
          {result.map(
              (dices, i) => 
                <li key={i} >{dices.map(
                    (dice, i) => <b  key={i}>{dice} </b>
                )}</li>
              )}
        </ul>
        </>
    )
}

export default Response;