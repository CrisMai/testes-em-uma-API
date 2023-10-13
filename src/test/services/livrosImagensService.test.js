import { describe } from '@jest/globals';
import LivrosImagensService from '../../services/livrosImagensService';

const livrosImagensService = new LivrosImagensService();

describe ('Testando livrosImagensService.cadastrarImagem', () => {
    it ('O sistema deve salvar uma imagem vinculada ao livro caso todos os dados estejam corretos', async () => {

        const imagemMock = {
            file: {
              originalname: 'curso node.png',
              mimetype: 'image/png',
              size: 2857,
              buffer: {
                type: 'Buffer',
                data: [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 1, 192, 0, 0, 1, 
                    46, 8, 2, 0, 0, 0, 150, 9, 85, 214, 0, 0, 0, 1, 115, 82, 71, 66, 0, 174, 206, 28, 233]
              }
            },
            body: {
              livroId: 1,
            }
        }

        const imagemSalva = await livrosImagensService.cadastrarImagem(imagemMock);

        expect(imagemSalva.content.livro_id).toBe(imagemMock.body.livroId);
        expect(imagemSalva.content.size).toBeLessThan(5000);

        await livrosImagensService.excluirImagemLivro(imagemSalva.content.id);
    })

    
})
