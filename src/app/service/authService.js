import LocalStorageService from "../localStorageService";

export const USUARIO_LOGADO = '_usuario_logado'
export const LANCAMENTO = '_lancamento'

export default class AuthService{
    static isUsuarioAutenticado()
    {
        const usuario = LocalStorageService.obterIten(USUARIO_LOGADO)
        return usuario && usuario.id
    }

    static isLancamentoAutenticado()
    {
        const lancamento = LocalStorageService.obterIten(LANCAMENTO)
        return lancamento && lancamento.id
    }

    static removerUserLogado()
    {
        LocalStorageService.removerItem(USUARIO_LOGADO)
    }

    static removerLancamentoLogado(){
        LocalStorageService.removerItem(LANCAMENTO)
    }

}