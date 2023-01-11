
    let conta = {
        agencia: '0321',
        banco: {
        cod: '001',
        id: 4,
        nome: 'Nubank',
        },
    };

    let Charles = {
        Esposa: 'Patrícia',
        Filhos: {
            Filho: 'Victor',
            Filha: 'Mariana',
        },
        Pet: 'Luma',
    };

    let infoDoCharles = 'Filhos';
    console.log(Charles[infoDoCharles]);
    console.log(Charles[infoDoCharles]['Filha']);

    console.log(Charles.Esposa);
    console.log(Charles['Pet']);
    console.log(Charles.Filhos.Filho);
    
    delete Charles.Pet
    let infoDoBanco = 'banco';
    console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
    console.log(conta[infoDoBanco]['nome']); // TrybeBank
    
    console.log(conta.agencia); // 0000
    console.log(conta['agencia']); // 0000
    
    console.log(conta.banco.cod); // 012
    console.log(conta['banco']['id']); // 4
    console.table(Charles);
    console.log(Charles);