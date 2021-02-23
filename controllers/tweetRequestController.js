exports.getTweetRequest = function(req, res) {
    var tweetRequest = tweetRequests.find(tweetRequest => tweetRequest.id === req.params.tweetRequestId);
    res.json(tweetRequest);
  };
  
  var tweetRequests = [{
    id: '1',
    Nombre: 'Nazareno',
    Color: 'Azul',
    Frase: "Intentando aprender algo de JS"
  }, {
    id: '2',
    device_token: '2',
    hashtags: "#android #kotlin"
  }, {
    id: '3',
    device_token: '3',
    hashtags: "#backend #nodejs"
  }, {
    
    id: '4',
    Preparando_Acceso_a_BD: 'aca deberia hacer el aaceso a la BD y lrpm...'
    /*
    const sql = `SELECT department_name,
    CURSOR(SELECT salary, commission_pct
           FROM employees e
           WHERE e.department_id = d.department_id
           ORDER BY salary) as nc
    FROM departments d
    ORDER BY department_name`;

    const result = await connection.execute(sql);
    console.dir(result.rows, {depth: null});
    */
  }

];