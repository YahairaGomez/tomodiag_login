//Verifico si mi usuario está o no loggeado

exports.handler = async (event, context) => {
    const guides = [
      { title: 'Beat all Zelda Bosses Like a Boss', author: 'mario' },
      { title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'luigi' },
      { title: 'Ultimate Street Fighter Guide', author: 'chun-li' },
    ]
  
    // solo si hay propiedades del cliente (clientContext) retorno data
    // o sea si está loggeado
    if (context.clientContext.user) {
      // fetch data & then return
      return {
        statusCode: 200,
        body: JSON.stringify(guides)
      }
    }
    // Sino retorno error
    return {
      statusCode: 401,
      body: JSON.stringify({ mssg: 'Necesitas iniciar sesión ' })
    }
     
  }