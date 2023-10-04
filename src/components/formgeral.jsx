const formgeral = () => {
  return (
    <div>   
      <section>
        <form action='#' className='link' method='POST'>
          <h1>Crie sua conta</h1>
          <fieldset>
            <div className='container'>
              <input type='text' required name='name' />
              <label>Nome</label>
            </div>

            <div className='container'>
              <input type='text' required name='lastname' />
              <label>Sobrenome</label>
            </div>
          </fieldset>

          <fieldset>
            <div className='container'>
              <input type='email' required name='email' />
              <label>E-mail</label>
            </div>
          </fieldset>

          <fieldset>
            <div className='container'>
              <input type='password' required name='password' />
              <label>Senha</label>
            </div>

            <div className='container'>
              <input type='password' required name='confirm' />
              <label>Confirmar senha</label>
            </div>
          </fieldset>

          <fieldset>
            <div id='check'>
              <input type='checkbox' required name='accept' />
              <label>Aceitar os termos de uso</label>
            </div>

            <button>Criar conta</button>
          </fieldset>

          <a href='#' className='link'>
            Ler termos de uso
          </a>
        </form>
        <img src='../src/assets/img/user-244.svg'></img>
      </section>
    </div>
  )
}

export default formgeral
