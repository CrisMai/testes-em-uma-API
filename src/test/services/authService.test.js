import { describe } from '@jest/globals';

import AuthService from '../../services/authService';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha', async() => {

    //arrage
    const usuarioMock = {
      nome: 'Cris',
      email: 'cris@teste.com.br'
    };

    //act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    //assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatória!');

  });
});
