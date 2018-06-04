import { Connect, SimpleSigner } from 'uport-connect'

    const uport = new Connect('Globle.work', {
      clientId: '2oey7BTwZbHLVrVX94YbwTtSG429ASaF7w4',
      network: 'rinkeby',
      signer: SimpleSigner('b676b044388908534fbdf8f4a045b536b68dea1f7501730913b7b63adebc2e8a')
    })

    // Request credentials to login
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    })
    .then((credentials) => {
      console.log(credentials)
    })

    // Attest specific credentials
    // uport.attestCredentials({
    //   sub: THE_RECEIVING_UPORT_ADDRESS,
    //   claim: {
    //     CREDENTIAL_NAME: CREDENTIAL_VALUE
    //   },
    //   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    // })
    