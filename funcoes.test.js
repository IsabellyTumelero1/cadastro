const minhasFuncoes = require('./funcoes')

test('O mínimo é 5 e passei 3, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5,'bob')).toBe(false);
})

test('O mínimo é 3 e passei 5, tem que retornar true', () => {
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3, 'belly')).toBe(true);
})

test('O campo é obrigatório e está vazio, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('')).toBe(false);
})

test('O campo é obrigatório e está preenchido, tem que retornar true', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('olá')).toBe(true);
})

test('As senhas devem ser iguais, mas estam diferentes, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('Maria', 'Mario')).toBe(false);
})

test('As senhas devem ser iguais, tem que retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('Carlo', 'Carlo')).toBe(true);
})

test('Tem que haver letra maiúscula, mas não tem, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('ola')).toBe(false);
})

test('Tem que haver letra maiúscula, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('Ola')).toBe(true);
})

test('Tem que haver caracter especial, mas não tem, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('nenhum')).toBe(false);
})

test('Tem que haver caracter especial, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('#')).toBe(true);
})

test('E-mail inválido, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarEmail('teste')).toBe(false);
})

test('E-mail válido, tem que retornar true', () => {
    expect(minhasFuncoes.fnValidarEmail('teste@gmail.com')).toBe(true);
})