const calculateStats = (results, stats) => {

    function countUnique(iterable) {
        return new Set(iterable).size;
    }

    const new_stats = stats;

    console.log('old', stats);
    // console.log('results', results);


    results.forEach(result => {

        console.log('reorder', result.sort());

        var current = null;
        var cnt = 0;
        var double = 0;

        for (var i = 0; i < result.length; i++) {
            if (result[i] != current) {
                current = result[i];

                cnt = 1;
            } else {
                cnt++;
            }
            if(cnt == 2 ){
                double++
            }
            switch (cnt) {
                case 5:
                    new_stats.yam++
                    new_stats.paire--
                    new_stats.paire--
                    new_stats.brelan--
                    break;
    
                case 4:
                    new_stats.paire--
                    new_stats.paire--
                    new_stats.carre++
                    break;
    
                case 3:
                    new_stats.brelan++
                    new_stats.paire--
                    break;
    
                case 2:
                    new_stats.paire++
                    break;
            
                default:
                    break;
            }

            if(double == 2){
                if(countUnique(result) == 3) {
                    new_stats.double_paire++
                    new_stats.paire--
                    new_stats.paire--
                    double = 0;
                }
            }
        }

    });

    console.log('new', new_stats);




    return new_stats

}

export default calculateStats