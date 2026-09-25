// O modo portfólio permite demonstrar a interface sem depender da API local.
// Para voltar ao login real, defina VITE_PORTFOLIO_DEMO=false.
export const PORTFOLIO_DEMO = import.meta.env.VITE_PORTFOLIO_DEMO !== 'false';

export const DEMO_USER = {
  id: 1,
  name: 'Usuário de demonstração',
  email: 'portfolio@ecanhoto.com',
  empresaId: 1,
  isAdmin: false,
  urlPerfilFoto: '',
};
