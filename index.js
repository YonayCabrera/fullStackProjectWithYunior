fetch('/data/london.json')
            .then(response => response.json())
            .then(apartamentos => {
                console.log(apartamentos.slice(0,20));
            })

