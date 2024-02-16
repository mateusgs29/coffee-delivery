import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Configuração do tema padrão para aparecer nas sugestões do typescript

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}